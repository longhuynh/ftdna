import { Component, ViewContainerRef, Injector, OnInit, AfterViewInit } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppComponentBase implements OnInit, AfterViewInit {

  private viewContainerRef: ViewContainerRef;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    ($ as any).AdminBSB.activateAll();
    ($ as any).AdminBSB.activateDemo();
  }
}