import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { CwiczenieFormComponent } from "~/app/settings/components/cwiczenie-form/cwiczenie-form.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { ProfileFormComponent } from "~/app/settings/components/profile-form/profile-form.component";
import { TreningFormComponent } from "~/app/settings/components/trening-form/trening-form.component";
import { OptionsComponent } from "~/app/settings/components/options/options.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SettingsComponent,
        CwiczenieFormComponent,
        ProfileFormComponent,
        TreningFormComponent,
        OptionsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
