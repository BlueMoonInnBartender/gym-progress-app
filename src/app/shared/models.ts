export class Rekord {
    constructor(
        public cwiczenie: string,
        public liczbaSerii: string,
        public liczbaPowtorzen: string,
        public ciezar: string,
        public progress: number,
        public data: Date
    ) {
    }
}

export interface Trening {
    cwiczenia: Array<Cwiczenie>;
    data: Date;
}

export class Cwiczenie {
    constructor(
        public nazwa: string,
        public liczbaSerii: string,
        public liczbaPowtorzen: string,
        public ciezar: string
    ) {
    }

}

export interface Profile {
    name: string;
    surname: string;
    weight: string;
    height: string;
    gender: string;
    bmi: string;
}

export interface State {
    rekordy: Array<Rekord>;
    cwiczenia: Array<string>;
    profile: Profile;
    treningi: Array<Trening>;
}
