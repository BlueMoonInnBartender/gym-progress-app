import { Component, OnInit } from "@angular/core";
import { StoreService } from "~/app/shared/store.service";
import { Router } from "@angular/router";

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
        private router: Router,
        private store: StoreService) {
    }
    ngOnInit(): void {
    }
}
