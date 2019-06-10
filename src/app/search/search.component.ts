import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Rekord } from "~/app/shared/models";
import { StoreService } from "~/app/shared/store.service";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    data: Date;
    day;
    month;
    year;
    records: Array<Rekord>;
    foundRecords: Array<Rekord> = [];
    searched = false;

    constructor(private store: StoreService) {
    }
    findRecords() {
        this.foundRecords = this.records.filter((record: Rekord) => {
            let year = record.data.getFullYear();
            let month = record.data.getMonth();
            let day = record.data.getDate();

            return ((this.year === year) && (this.month === month) && (this.day === day));
        });
        this.searched = !this.searched;
    }
    onDayChange(args) {
        this.day = args.value;
    }

    onMonthChanged(args) {
        this.month = args.value;
    }

    onYearChanged(args) {
        this.year = args.value;
    }
    ngOnInit(): void {
        this.records = this.store.getRecords();
        this.data = new Date(Date.now());
        this.year = this.data.getFullYear();
        this.month = this.data.getMonth();
        this.day = this.data.getDate();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
