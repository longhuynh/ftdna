import * as moment from 'moment';
import { AppConsts } from '@shared/AppConsts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Type, CompilerOptions, NgModuleRef } from '@angular/core';

export class AppPreBootstrap {
    static run(callback: () => void): void {
        AppPreBootstrap.getApplicationConfig(callback);
    }

    static bootstrap<TM>(moduleType: Type<TM>, compilerOptions?: CompilerOptions | CompilerOptions[]): Promise<NgModuleRef<TM>> {
        debugger;
        return platformBrowserDynamic().bootstrapModule(moduleType, compilerOptions);
    }

    private static getApplicationConfig(callback: () => void) {
        AppConsts.remoteServiceBaseUrl =  "http://localhost:6740";
        AppConsts.appBaseUrl = "http://localhost:4200";   
    }
}