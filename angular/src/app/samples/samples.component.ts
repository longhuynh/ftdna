
import { Component, Injector, OnInit, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { SamplesServiceProxy, SampleDto, CreateSampleInput, ListResultDtoOfSampleDto} from '@shared/service-proxies/service-proxies';

import { PagedListingComponentBase } from "@shared/paged-listing-component-base";
import { CreateSampleComponent } from "@app/samples/create-sample.component";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/first';

@Component({
    templateUrl: './samples.component.html',
    animations: [appModuleAnimation()]
})
export class SamplesComponent extends PagedListingComponentBase {  

    @ViewChild('createSampleModal') createSampleModal: CreateSampleComponent;
    private sample$: Observable<ListResultDtoOfSampleDto>;

    constructor(injector: Injector,
        private samplesService: SamplesServiceProxy) {
        super(injector);       
    }

    ngOnInit(): void {
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