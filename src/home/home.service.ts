import { Injectable } from "@angular/core";
import { AuthService } from "src/auth/auth.service";

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    constructor(private authService: AuthService) {}

    signout(): void {
        this.authService.signOut();
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('Test')
    }
}