import { Component } from "@angular/core";
import { HomeService } from "./home.service";
import { Class } from "src/model/class";
import { map } from "rxjs";
import { Timestamp } from "firebase/firestore"
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        WorkoutModule
    ],
    
})

export class HomeComponent {
    classes: Class[] = []
    constructor(private homeService: HomeService) {}

    signout(): void {
        this.homeService.signout()
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getAllClasses();
    }

    getAllClasses() {
        this.homeService.getClasses()
            .pipe( 
                map((data) => {
                    return data.map((val: any) => {
                        const id = val.payload.doc.id;
                        const dt = val.payload.doc.data();

                        if (dt.date) {
                            const date = dt.date as unknown as Timestamp;
                            dt.date = date.toDate().toString();
                        }
                        return { id, ...dt } as unknown as Class;
                    })
                })
            ).subscribe((data) => {
                this.classes = data;
            })
    }
    
}
import { RouterModule } from "@angular/router";import { LayoutComponent } from "src/layout/layout.component";
import { WorkoutModule } from "src/workoutPlan/work.module";

