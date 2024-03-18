import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { WorkoutService } from "../work.service";
import { WorkoutPlan } from "src/model/workoutPlan";

@Component({
    selector: 'app-create-work',
    templateUrl: './creatework.component.html'
})

export class CreateWorkComponent {

    workoutPlan = new FormGroup( {
        name : new FormControl(''),
        date : new FormControl(''),
    })
    
    constructor(private workService: WorkoutService) {}

    addWorkoutPlan(){
        const date = new Date(this.workoutPlan.value.date!)
        const wp: WorkoutPlan = {
            name: this.workoutPlan.value.name as string,
            date: date.toDateString(),
            status: false,
            exercice: [],
            id: ''
        };



        this.workService.addWorkPlan(wp)

    }
}