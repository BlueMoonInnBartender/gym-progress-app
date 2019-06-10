import { Component, OnInit } from "@angular/core";
import { StoreService } from "~/app/shared/store.service";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import * as application from "tns-core-modules/application";
import { AndroidApplication } from "tns-core-modules/application";
import { AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { Cwiczenie, Trening } from "~/app/shared/models";

@Component({
    selector: "TreningForm",
    moduleId: module.id,
    templateUrl: "./trening-form.component.html",
    styleUrls: ["./trening-form.component.scss"]
})
export class TreningFormComponent implements OnInit {
    cwiczeniaNames: Array<string>;
    picked;
    serie;
    powtorzenia;
    ciezar;
    cwiczenia: Array<Cwiczenie> = [];
    data: Date;
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;

    constructor(private store: StoreService, private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    selectedIndexChanged(args) {
        const picker = <ListPicker>args.object;
        this.picked = this.cwiczeniaNames[picker.selectedIndex];
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

    onTimeChange(args) {
        const timePicker = <TimePicker>args.object;

        this.hours = timePicker.hour;
        this.minutes = timePicker.minute;
    }

    addTrening() {
        const data = new Date(this.year, this.month, this.day, this.hours, this.minutes, 0, 0);
        const cwiczenia = this.cwiczenia;
        const trening: Trening = {cwiczenia, data};
        this.store.addTrening(trening);
    }

    addCwiczenie() {
        this.cwiczenia
            .push(new Cwiczenie(this.picked, this.serie, this.powtorzenia, this.ciezar));
        this.serie = "";
        this.powtorzenia = "";
        this.ciezar = "";
    }

    ngOnInit(): void {
        this.cwiczeniaNames = this.store.getCwiczenia();
        this.data = new Date(Date.now());
        this.year = this.data.getFullYear();
        this.month = this.data.getMonth();
        this.day = this.data.getDate();
        this.hours = this.data.getHours();
        this.minutes = this.data.getMinutes();
        /* application
             .android
             .on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
                 data.cancel = true; // prevents default back button behavior
                 this.router.navigate(["settings"]);
                 /!*if (this.router.isActive("/articles", false)) {}*!/
             });*/

    }
}
