import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { SamplesServiceProxy, ComboBoxItemsServiceProxy, CreateSampleInput, ComboBoxItemDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { AppConsts } from '@shared/AppConsts';

import * as _ from "lodash";

@Component({
  selector: 'create-sample-modal',
  templateUrl: './create-sample.component.html'
})
export class CreateSampleComponent extends AppComponentBase {

    @ViewChild('createSampleModal') modal: ModalDirective;
    @ViewChild('modalContent') modalContent: ElementRef;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active: boolean = false;
    saving: boolean = false;
    sample: CreateSampleInput = null;

    private statuses: ComboBoxItemDto[] = [];
    private users: ComboBoxItemDto[] = [];

    constructor(
        injector: Injector,
        private comboBoxItemsService: ComboBoxItemsServiceProxy,
        private sampleService: SamplesServiceProxy
    ) {
        super(injector);        
    }

    private loadStatuses(){
         this.comboBoxItemsService.getAllStatus().subscribe(response => {
            this.statuses = response.items;
            this.sample.statusId = Number(response.items[0].value);
        });
    }

     private loadUsers(){
         this.comboBoxItemsService.getAllUsers().subscribe(response => {
            this.users = response.items;
            this.sample.createBy = Number(response.items[0].value);
        });
    }

    show(): void {
        this.active = true;
        this.loadStatuses();   
        this.loadUsers();    
        this.modal.show();
        this.sample = new CreateSampleInput({isActive:true});
    }

    onShown(): void {
        ($ as any).AdminBSB.input.activate($(this.modalContent.nativeElement));

        $('#form_create_sample').validate({
            highlight: function (input) {
                $(input).parents('.form-line').addClass('error');
            },
            unhighlight: function (input) {
                $(input).parents('.form-line').removeClass('error');
            },
            errorPlacement: function (error, element) {
                $(element).parents('.form-group').append(error);
            }
        });
    }

    save(): void {
        this.saving = true;

        this.sampleService.createSample(this.sample)
            .finally(() => { this.saving = false; })
            .subscribe(() => {               
                this.close();
                this.modalSave.emit(null);
            },
            (error) =>{  
                this.close();
                this.modalSave.emit(null);
            });
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
