import { RouterModule, Routes } from "@angular/router";
import { WorkViewComponent } from "./view/workview.component";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "src/layout/layout.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateWorkComponent } from "./create/creatework.component";


const routes: Routes = [
    {
      path: 'view',
      component: WorkViewComponent,
    },
    { path: 'create', component: CreateWorkComponent },
];


@NgModule({

    declarations: [
        LayoutComponent,
        WorkViewComponent,
        CreateWorkComponent
    ],
    imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],

    exports: [RouterModule, LayoutComponent],
}) 

export class WorkoutModule {}