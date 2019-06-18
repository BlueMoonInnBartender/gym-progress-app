import { Component, OnInit } from "@angular/core";

@Component({
    selector: "AppOptions",
    moduleId: module.id,
    templateUrl: "./options.component.html",
    styles: [`
        .button--opt {
            padding: 35 10;
            margin-left: 10;
            margin-right: 10;
            width: 80%;
            font-size: 23;
            letter-spacing: .1;
        }
    `]
})
export class OptionsComponent implements OnInit {
    constructor() {
    }
    ngOnInit(): void {
    }
}
