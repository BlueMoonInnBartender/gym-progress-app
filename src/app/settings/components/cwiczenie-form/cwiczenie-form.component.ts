import { Component, OnInit } from "@angular/core";
import { StoreService } from "~/app/shared/store.service";
import { RouterExtensions } from "nativescript-angular";
import { Router } from "@angular/router";
import * as application from "tns-core-modules/application";
import { AndroidApplication } from "tns-core-modules/application";
import { AndroidActivityBackPressedEventData } from "tns-core-modules/application";

@Component({
    selector: "CwiczenieForm",
    moduleId: module.id,
    templateUrl: "./cwiczenie-form.component.html",
    styleUrls: ["./cwiczenie-form.component.scss"]
})
export class CwiczenieFormComponent implements OnInit {
    cwiczenie: string;

    addCwiczenie() {
        this.store.addCwiczenie(this.cwiczenie);
        this.router.navigate(["settings"]);
    }
    constructor(
        private routerExtensions: RouterExtensions,
        private router: Router,
        private store: StoreService) {
    }
    ngOnInit(): void {
        application
            .android
            .on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
                data.cancel = true; // prevents default back button behavior
                this.router.navigate(["settings"]);
                /*if (this.router.isActive("/articles", false)) {}*/
            });
    }
}
