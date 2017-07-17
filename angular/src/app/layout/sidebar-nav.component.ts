import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MenuItem } from '@shared/layout/menu-item';

@Component({
    templateUrl: './sidebar-nav.component.html',
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.None
})
export class SideBarNavComponent extends AppComponentBase {
    menuItems: MenuItem[] = [
        new MenuItem("Home", "", "home", "/app/home"),     
        new MenuItem("All samples", "", "spellcheck", "/app/samples"),     
        new MenuItem("Samples by user", "", "people", "/app/samples-by-user"),     
        new MenuItem("Samples by status", "", "local_offer", "/app/samples-by-status"),     
        new MenuItem("About", "", "info", "/app/about")
    ];

    constructor(injector: Injector) {
        super(injector);
    }

    showMenuItem(menuItem): boolean {
        return true;
    }
}