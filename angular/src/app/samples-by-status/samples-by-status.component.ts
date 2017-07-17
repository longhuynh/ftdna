
import { Component, Injector, AfterViewInit, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { SamplesServiceProxy, ComboBoxItemsServiceProxy, SampleDto, CreateSampleInput, ComboBoxItemDto} from '@shared/service-proxies/service-proxies';

import { PagedListingComponentBase } from "@shared/paged-listing-component-base";

@Component({
    templateUrl: './samples-by-status.component.html',
    animations: [appModuleAnimation()]
})
export class SamplesByStatusComponent extends PagedListingComponentBase{

    private statuses: ComboBoxItemDto[] = [];
    private selectedValue: any;

    constructor(injector: Injector,
        private comboBoxItemsService: ComboBoxItemsServiceProxy,
        private samplesService: SamplesServiceProxy) {
        super(injector);          
    }

    ngOnInit(): void {
         this.loadStatuses();      
    }

    private loadStatuses(){
         this.comboBoxItemsService.getAllStatus().subscribe(response => {
            this.statuses = response.items;
            this.selectedValue = response.items[0].value;
            this.bindData();
        });
    }

    private bindData(){      
        this.samplesService.getByStatus(this.selectedValue).subscribe(response => {
            this.data = response.items;
            this.length = response.items.length;
            this.refresh();
        });
    }

    private onStatusChange(value){
        this.selectedValue = value;
        this.bindData();
    }
}