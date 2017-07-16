
import { Component, Injector, AfterViewInit, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { SamplesServiceProxy} from '@shared/service-proxies/service-proxies';

@Component({
    templateUrl: './home.component.html',
    animations: [appModuleAnimation()]
})
export class HomeComponent extends AppComponentBase implements AfterViewInit, OnInit {
    samples: any[];

    constructor(injector: Injector,
    	private samplesService: SamplesServiceProxy) {
        super(injector);           
         this.samplesService.getAll()
            .subscribe(data => 
            {
               console.log(this.samplesService);
            });
    }

    ngOnInit() {
        this.samplesService.getAll()
            .subscribe(response => 
            {
               console.log(response);
            });
    }

    ngAfterViewInit(): void {
    }
}