import { Component } from "@angular/core";
import { AuthService } from "src/auth/auth.service";
import { HomeService } from "./home.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent {

    constructor(private homeService: HomeService) {}

    signout(): void {
        this.homeService.signout()
    }

    
}