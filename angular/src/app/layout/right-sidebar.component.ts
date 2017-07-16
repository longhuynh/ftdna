import { Component, Injector, ViewEncapsulation, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    templateUrl: './right-sidebar.component.html',
    selector: 'right-sidebar',
    encapsulation: ViewEncapsulation.None
})
export class RightSideBarComponent extends AppComponentBase implements OnInit {
    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
      
    }

    setTheme(cssClass): void {     
         
    }
}