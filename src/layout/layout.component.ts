import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "src/auth/auth.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './layout.component.html',    
})

export class LayoutComponent {
    constructor(private authService: AuthService) {}

    signout() {
        this.authService.signOut();
    }
}