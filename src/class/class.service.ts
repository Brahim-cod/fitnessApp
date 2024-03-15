import { Injectable, inject } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
    providedIn: 'root'
})

export class ClassService {
    private readonly firestoreService = inject(AngularFirestore);

    getAllClasses() {
        return this.firestoreService.collection('classe').snapshotChanges();
    }

    getClass(id: string) {
        return this.firestoreService.collection('classe').doc(id).get();
    }
}