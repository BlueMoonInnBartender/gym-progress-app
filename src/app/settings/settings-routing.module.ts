import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SettingsComponent } from "./settings.component";
import { CwiczenieFormComponent } from "~/app/settings/components/cwiczenie-form/cwiczenie-form.component";
import { ProfileFormComponent } from "~/app/settings/components/profile-form/profile-form.component";
import { TreningFormComponent } from "~/app/settings/components/trening-form/trening-form.component";
import { OptionsComponent } from "~/app/settings/components/options/options.component";

const routes: Routes = [
    { path: "", component: SettingsComponent, children: [
            { path: "", component: OptionsComponent},
            { path: "add-cwiczenie", component: CwiczenieFormComponent},
            { path: "edit-profile", component: ProfileFormComponent},
            { path: "add-trening", component: TreningFormComponent}

        ] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SettingsRoutingModule { }
