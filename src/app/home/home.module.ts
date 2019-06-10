import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { FormComponent } from "~/app/home/components/form/form.component";
import { RecordListComponent } from "~/app/home/components/record-list/record-list.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule,
        SharedModule,
    ],
    declarations: [
        HomeComponent,
        FormComponent,
        RecordListComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
