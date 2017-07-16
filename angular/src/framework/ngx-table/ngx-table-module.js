"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng_table_component_1 = require('./table/ngx-table.component');
var ng_table_filtering_directive_1 = require('./table/ngx-table-filtering.directive');
var ng_table_paging_directive_1 = require('./table/ngx-table-paging.directive');
var ng_table_sorting_directive_1 = require('./table/ngx-table-sorting.directive');
var NgxTableModule = (function () {
    function NgxTableModule() {
    }
    NgxTableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective],
                    exports: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective]
                },] },
    ];
    /** @nocollapse */
    NgxTableModule.ctorParameters = [];
    return NgxTableModule;
}());
exports.NgxTableModule = NgxTableModule;
