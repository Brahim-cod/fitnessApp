import { Injectable, inject } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { WorkoutPlan } from "src/model/workoutPlan";

@Injectable({
    providedIn: 'root'
})

export class WorkoutService {
    private readonly firestoreService = inject(AngularFirestore);

    getAllWorkPlans() {
        return this.firestoreService.collection('workoutPlan').snapshotChanges();
    }

    getWorkPlan(id: string) {
        return this.firestoreService.collection('workoutPlan').doc(id).get();
    }

    addWorkPlan(wp: WorkoutPlan) {
        return this.firestoreService.collection('workoutPlan').add(wp);
    }
    updateWorkplan(wp: WorkoutPlan, id: string) {
        //
        return this.firestoreService.collection('workoutPlan').doc(id).update(wp);
    }

    deleteWorkPlan(id: string) {
        return this.firestoreService.collection('workoutPlan').doc(id).delete();
    }

}