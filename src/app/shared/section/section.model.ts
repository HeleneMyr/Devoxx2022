import { Subsection } from "./subsection/subsection.model";

export class Section {
    subsections: Subsection[] = [];

    constructor(public menu: string, public showProgressBar: boolean, public idSection: string) {}

    addSubsection(subsection: Subsection) {
        this.subsections.push(subsection);
    }

    addSubsections(subsections: Subsection[]) {
        this.subsections = [...subsections];
    }
    
}