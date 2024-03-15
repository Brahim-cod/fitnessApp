import { Injectable, inject } from "@angular/core";
import { AuthService } from "src/auth/auth.service";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Class } from "src/model/class";
import { ClassService } from "src/class/class.service";

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    constructor(private authService: AuthService, private classService: ClassService) {}

    

    signout(): void {
       this.authService.signOut();
    }

    ngOnInit(): void {
        console.log(this.getClasses());
        this.getClasses();
    }

    getClasses() {
        return this.classService.getAllClasses();
    }
}