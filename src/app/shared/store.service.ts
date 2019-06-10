import { Injectable } from '@angular/core';
import { Rekord, State, Trening } from "~/app/shared/models";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    private state: State = {
        rekordy: [new Rekord("wiosłowanie", '3', '10', '60', 0, new Date(Date.now()))],
        cwiczenia: ["wiosłowanie", "przysiad", "martwy ciąg"],
        profile: {
            name: "Name",
            surname: "Surname",
            gender: "male",
            weight: '70',
            height: '175',
            bmi: '0'
        },
        treningi: []
    };
    profileSubject$ = new BehaviorSubject(this.state.profile);

    addRecord(record: Rekord) {
        const treningCopy = JSON.parse(JSON.stringify(record));
        this.state.rekordy.push(treningCopy);
    }
    addTrening(trening: Trening) {
        const treningCopy = JSON.parse(JSON.stringify(trening));
        this.state.treningi.push(treningCopy);
    }

    addCwiczenie(cwiczenie: string) {
        this.state.cwiczenia.push(cwiczenie);
    }

    getRecords() {
        return JSON.parse(JSON.stringify(this.state.rekordy));
    }
    getTreningi() {
        return JSON.parse(JSON.stringify(this.state.treningi));
    }
        getCwiczenia() {
        return [...this.state.cwiczenia];
    }

    constructor() {
    }
}
