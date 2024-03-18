import { Component } from "@angular/core";
import { AuthService } from "src/auth/auth.service";
import { WorkoutService } from "../work.service";
import { map } from "rxjs";
import { Timestamp } from "firebase/firestore";
import { WorkoutPlan } from "src/model/workoutPlan";

@Component({
    selector: 'app-workview',
    templateUrl: './workview.component.html',
})

export class WorkViewComponent {

    workouts: WorkoutPlan[] = [];

    constructor(private authService: AuthService, private workoutService: WorkoutService) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getAllWorkPlans();
    }

    signout(){
        this.authService.signOut();
    }

    getAllWorkPlans(){
        this.workoutService.getAllWorkPlans()
        .pipe( 
            map((data) => {
                return data.map((val: any) => {
                    const id = val.payload.doc.id;
                    const dt = val.payload.doc.data();
                    if (dt.date) {
                        const date = dt.date as unknown as Timestamp;
                        dt.date = date.toDate().toString();
                    }
                    return { id, ...dt } as unknown as WorkoutPlan;
                })
            })
        ).subscribe((data) => {
            
            this.workouts = data;
        })
    }

    deleteWorkPlan(id: string) {
        this.workoutService.deleteWorkPlan(id);
    }
}