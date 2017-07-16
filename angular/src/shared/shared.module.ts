import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRouteGuard } from './auth/auth-route-guard';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AppRouteGuard
            ]
        }
    }
}