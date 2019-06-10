import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { FormComponent } from "~/app/home/components/form/form.component";
import { RecordListComponent } from "~/app/home/components/record-list/record-list.component";

const routes: Routes = [
    { path: "", component: HomeComponent, children: [
            { path: "", component: RecordListComponent },
            { path: "form", component: FormComponent }
        ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
