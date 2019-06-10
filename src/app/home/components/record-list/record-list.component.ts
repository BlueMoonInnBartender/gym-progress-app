import { Component, OnInit } from "@angular/core";
import { Rekord } from "~/app/shared/models";
import { StoreService } from "~/app/shared/store.service";

@Component({
    selector: "RecordList",
    moduleId: module.id,
    templateUrl: "./record-list.component.html",
    styleUrls: ["./record-list.component.scss"]
})
export class RecordListComponent implements OnInit {
    records: Array<Rekord>;

    constructor(private store: StoreService) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        this.records = this.store.getRecords();
    }
}
