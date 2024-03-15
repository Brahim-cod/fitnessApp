import { RouterModule, Routes } from "@angular/router";
import { WorkViewComponent } from "./view/workview.component";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "src/layout/layout.component";
import { CommonModule } from "@angular/common";


const routes: Routes = [
    {
      path: 'view',
      component: WorkViewComponent,
    },
    //{ path: 'create', component: SignupComponent },
];


@NgModule({

    declarations: [
        LayoutComponent,
        WorkViewComponent
    ],
    imports: [RouterModule.forChild(routes), CommonModule],

    exports: [RouterModule, LayoutComponent],
}) 

export class WorkoutModule {}