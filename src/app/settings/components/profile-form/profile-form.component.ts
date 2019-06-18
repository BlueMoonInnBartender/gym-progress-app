import { Component, OnInit } from "@angular/core";
import { StoreService } from "~/app/shared/store.service";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";
import { Profile } from "~/app/shared/models";
import { Router } from "@angular/router";
@Component({
    selector: "ProfileForm",
    moduleId: module.id,
    templateUrl: "./profile-form.component.html",
    styleUrls: ["./profile-form.component.scss"]
})
export class ProfileFormComponent implements OnInit {

    profile: Profile = {
        name: "",
        surname: "",
        weight: '0',
        height: '0',
        gender: "male",
        bmi: '0'
    };

    onSubmit() {
        const weight = parseFloat(this.profile.weight);
        const height = parseFloat(this.profile.height) / 100;
        this.profile.bmi = Math.round((weight / (height * height))).toString();
        this.store.profileSubject$.next(this.profile);
        this.router.navigate(["settings"]);
    }

    onCheckedChange(args: EventData) {
        let mySwitch = args.object as Switch;
        if (mySwitch.checked) {
            this.profile.gender = mySwitch.className;
        }
    }

    constructor(
        private router: Router,
        private store: StoreService) {
    }

    ngOnInit(): void {
    }
}
