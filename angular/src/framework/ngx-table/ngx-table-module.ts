import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTableComponent } from './table/ngx-table.component';
import { NgTableFilteringDirective } from './table/ngx-table-filtering.directive';
import { NgTablePagingDirective } from './table/ngx-table-paging.directive';
import { NgTableSortingDirective } from './table/ngx-table-sorting.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective],
  exports: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective]
})
export class NgxTableModule {
}
