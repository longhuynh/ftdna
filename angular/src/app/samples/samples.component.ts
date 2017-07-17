
import { Component, Injector, AfterViewInit, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { SamplesServiceProxy, SampleDto, CreateSampleInput} from '@shared/service-proxies/service-proxies';

import { PagedListingComponentBase } from "@shared/paged-listing-component-base";
import { CreateSampleComponent } from "@app/samples/create-sample.component";

@Component({
    templateUrl: './samples.component.html',
    animations: [appModuleAnimation()]
})
export class SamplesComponent extends PagedListingComponentBase {  

   @ViewChild('createSampleModal') createSampleModal: CreateSampleComponent;

    constructor(injector: Injector,
        private samplesService: SamplesServiceProxy) {
        super(injector);
        this.bindData();
    }
    
    private bindData(){
        this.samplesService.getAll().subscribe(response => {
            this.data = response.items;
            this.length = response.items.length;
            this.refresh();
        });
    }

    // Show modals
    createSample(): void {
        this.createSampleModal.show();
    }
}