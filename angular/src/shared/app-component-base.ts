import { Injector, ElementRef} from '@angular/core';
import { AppConsts } from '@shared/AppConsts';


export abstract class AppComponentBase {
    domNode: HTMLElement = null;

    constructor(injector: Injector) {     
        this.domNode = injector.get(ElementRef).nativeElement;
    }

    ngAfterViewChecked(): void {
         ($ as any).AdminBSB.input.activate($(this.domNode));
    }		      
}