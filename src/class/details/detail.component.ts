import { Component, Injectable } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { AuthService } from "src/auth/auth.service";
import { ClassService } from "../class.service";
import { map } from "rxjs";
import { Class } from "src/model/class";
import { CommonModule } from "@angular/common";
import { Timestamp } from "firebase/firestore";

@Component({
    selector: 'app-class-detail',
    templateUrl: './detail.component.html',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class DetailComponent {

    c? : Class;

    constructor(private authService: AuthService, private route: ActivatedRoute, private classService: ClassService) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getClass();
    }

    signout(){
        this.authService.signOut();
    }

    getClass(){
        const id = this.route.snapshot.paramMap.get('id') as string;


        this.classService.getClass(id)
            .pipe(
                map((data) => {
                    const dt = data.data() as Class;

                    if (dt.date) {
                        const date = dt.date as unknown as Timestamp;
                        dt.date = date.toDate().toString();
                    }
                    return dt as Class
                })
            )
            .subscribe((data) => this.c = data)

    }
}