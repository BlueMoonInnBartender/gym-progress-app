import { Component, OnInit } from "@angular/core";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { StoreService } from "~/app/shared/store.service";
import { Rekord } from "~/app/shared/models";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";

function calcWeight(record: Rekord) {
    const recordClone = {...record};
    const seriaWaga = 10;
    const powtWaga = 5;
    const ciezWaga = 3;

    const sum =
        parseInt(recordClone.liczbaSerii) * seriaWaga +
        parseInt(recordClone.liczbaPowtorzen) * powtWaga +
        parseInt(recordClone.ciezar) * ciezWaga;

    return sum;
}

@Component({
    selector: "Form",
    moduleId: module.id,
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
    cwiczenia: Array<string>;
    records: Array<Rekord>;

    picked;
    serie;
    powtorzenia;
    ciezar;

    constructor(private store: StoreService, private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    calcProgress(record: Rekord) {
        const recent = {...record};
        const old = this.records.reverse().find((element: Rekord) => {
            return element.cwiczenie === recent.cwiczenie;
        });

        if (old) {
            const recentWeight = calcWeight(recent);
            const oldWeight = calcWeight(old);

            const result: number = Math.round(100 * ((recentWeight - oldWeight) / oldWeight));
            record.progress = result;

            return true;
        }

        return false;
    }

    addRecord() {
        const record = new Rekord(this.picked, this.serie, this.powtorzenia, this.ciezar, 0, new Date());
        this.calcProgress(record);

        this.store.addRecord(record);
    }

    selectedIndexChanged(args) {
        const picker = <ListPicker>args.object;
        this.picked = this.cwiczenia[picker.selectedIndex];
    }

    ngOnInit(): void {
        this.cwiczenia = this.store.getCwiczenia();
        this.records = this.store.getRecords();
    }
}
