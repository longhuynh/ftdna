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
        new MenuItem("Demo", "", "home", "/app/demo"),     
        new MenuItem("About", "", "info", "/app/about")
    ];

    constructor(injector: Injector) {
        super(injector);
    }

    showMenuItem(menuItem): boolean {
        return true;
    }
}