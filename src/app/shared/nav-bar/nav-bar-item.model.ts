import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class NavBarItem {
    textNav: string;
    active: boolean;
    faIcon: IconDefinition;
    idNavBar: string;

    constructor(textNav: string, faIcon: IconDefinition) {
        this.textNav = textNav;
        this.active = false;
        this.faIcon = faIcon;
        this.idNavBar = textNav.toLowerCase();
    }

    activeNavBar(textNav: string) {
        this.active = textNav === this.textNav;
    }

    identify() {
        return this.textNav; 
    }
}
