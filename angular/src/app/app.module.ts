import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';

import { AppConsts } from '@shared/AppConsts';
import { API_BASE_URL } from '@shared/service-proxies/service-proxies';

import { ModalModule, PaginationModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';

import { TopBarComponent } from '@app/layout/topbar.component';
import { SideBarUserAreaComponent } from '@app/layout/sidebar-user-area.component';
import { SideBarNavComponent } from '@app/layout/sidebar-nav.component';
import { SideBarFooterComponent } from '@app/layout/sidebar-footer.component';
import { RightSideBarComponent } from '@app/layout/right-sidebar.component';

import { NgxTableModule } from '@ngx-table/ngx-table-module';

import { SamplesComponent } from '@app/samples/samples.component';
import { CreateSampleComponent } from '@app/samples/create-sample.component';
import { SamplesByStatusComponent } from '@app/samples-by-status/samples-by-status.component';
import { SamplesByUserComponent } from '@app/samples-by-user/samples-by-user.component';

export function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TopBarComponent,
        SideBarUserAreaComponent,
        SideBarNavComponent,
        SideBarFooterComponent,
        RightSideBarComponent,
        SamplesComponent,
        CreateSampleComponent,
        SamplesByStatusComponent,
        SamplesByUserComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ModalModule.forRoot(),
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        PaginationModule.forRoot(),
        NgxTableModule
    ],
    providers:
    [
        { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }