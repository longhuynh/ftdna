﻿import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';


@Component({
    templateUrl: './sidebar-user-area.component.html',
    selector: 'sidebar-user-area',
    encapsulation: ViewEncapsulation.None
})
export class SideBarUserAreaComponent extends AppComponentBase implements OnInit {
    shownLoginName: string = "";

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.shownLoginName = "Gene by Gene";
    }
}