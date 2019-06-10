import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AbsoluteValPipe } from "~/app/shared/absoluteVal.pipe";

@NgModule({
    imports: [],
    declarations: [
        AbsoluteValPipe
    ],
    exports: [
        AbsoluteValPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
}
