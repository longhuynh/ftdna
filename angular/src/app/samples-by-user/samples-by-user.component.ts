
import { Component, Injector, AfterViewInit, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { SamplesServiceProxy, SampleDto, CreateSampleInput} from '@shared/service-proxies/service-proxies';

import { PagedListingComponentBase } from "@shared/paged-listing-component-base";

@Component({
    templateUrl: './samples-by-user.component.html',
    animations: [appModuleAnimation()]
})
export class SamplesByUserComponent extends PagedListingComponentBase {

    constructor(injector: Injector,
        private samplesService: SamplesServiceProxy) {
        super(injector);
        this.samplesService.getByUserName('hu').subscribe(response => {
            this.data = response.items;
            this.length = response.items.length;
            this.refresh();
        });
    }
}