import { NgModule } from '@angular/core';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.SamplesServiceProxy,
        ApiServiceProxies.ComboBoxItemsServiceProxy
    ]
})
export class ServiceProxyModule { }