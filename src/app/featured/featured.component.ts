import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { StoreService } from "~/app/shared/store.service";
import { Trening } from "~/app/shared/models";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ["./featured.component.scss"]
})
export class FeaturedComponent implements OnInit {

    treningi: Array<Trening>;
    constructor(private store: StoreService) {
    }

    ngOnInit(): void {
        this.treningi = this.store.getTreningi();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
