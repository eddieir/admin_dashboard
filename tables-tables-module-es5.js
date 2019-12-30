(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/tables/advanced/advanced.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/tables/advanced/advanced.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"'advanced'\" class=\"bg-blue-600\"></page-header>\n\n<form>\n  <mat-form-field class=\"m-r-8\">\n    <input matInput [(ngModel)]=\"query.q\" name=\"q\" placeholder=\"Query String\">\n  </mat-form-field>\n\n  <mat-form-field class=\"m-r-8\">\n    <mat-select [(ngModel)]=\"query.sort\" name=\"sort\" placeholder=\"Sort\">\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"stars\">stars</mat-option>\n      <mat-option value=\"forks\">forks</mat-option>\n      <mat-option value=\"updated\">updated</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"m-r-8\">\n    <mat-select [(ngModel)]=\"query.order\" name=\"order\" placeholder=\"Order\">\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"desc\">desc</mat-option>\n      <mat-option value=\"asc\">asc</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <button class=\"m-r-8\" mat-raised-button color=\"primary\" (click)=\"search()\">Search</button>\n</form>\n\n<mtx-grid class=\"mat-elevation-z1\"\n          [data]=\"list\"\n          [columns]=\"columns\"\n          [length]=\"total\"\n          [loading]=\"isLoading\"\n          [pageIndex]=\"query.page\"\n          [pageSize]=\"query.per_page\"\n          [pageSizeOptions]=\"[5,10,20]\"\n          (page)=\"getNextPage($event)\">\n</mtx-grid>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/tables/basic/basic.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/tables/basic/basic.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header class=\"bg-green-600\"></page-header>\n\n<mtx-grid class=\"mat-elevation-z1\"\n          [data]=\"list\"\n          [columns]=\"columns\"\n          [loading]=\"isLoading\"\n          [frontPage]=\"true\"\n          [pageSizeOptions]=\"[5,10,50,100]\"\n          (changeSort)=\"changeSort($event)\"\n          (changeSelect)=\"changeSelect($event)\">\n</mtx-grid>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/tables/basic/edit/edit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/tables/basic/edit/edit.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi</h1>\n<div mat-dialog-content>\n  {{data|json}}\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onClose()\">Close</button>\n  <button mat-button cdkFocusInitial>Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/tables/advanced/advanced.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/tables/advanced/advanced.component.ts ***!
  \**************************************************************/
/*! exports provided: TablesAdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesAdvancedComponent", function() { return TablesAdvancedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advanced_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced.service */ "./src/app/routes/tables/advanced/advanced.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");




var TablesAdvancedComponent = /** @class */ (function () {
    function TablesAdvancedComponent(advancedSrv, cdr) {
        this.advancedSrv = advancedSrv;
        this.cdr = cdr;
        this.columns = [];
        this.list = [];
        this.total = 0;
        this.isLoading = true;
        this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 5,
        };
    }
    Object.defineProperty(TablesAdvancedComponent.prototype, "params", {
        get: function () {
            var p = Object.assign({}, this.query);
            p.page += 1;
            return Object(_shared__WEBPACK_IMPORTED_MODULE_3__["delEmptyKey"])(p);
        },
        enumerable: true,
        configurable: true
    });
    TablesAdvancedComponent.prototype.ngOnInit = function () {
        this.columns = this.advancedSrv.columns;
        this.getData();
    };
    TablesAdvancedComponent.prototype.getData = function () {
        var _this = this;
        this.isLoading = true;
        this.advancedSrv.getData(this.params).subscribe(function (res) {
            _this.list = res.items;
            _this.total = res.total_count;
            _this.isLoading = false;
            _this.cdr.detectChanges();
        });
    };
    TablesAdvancedComponent.prototype.getNextPage = function (e) {
        this.query.page = e.pageIndex;
        this.query.per_page = e.pageSize;
        this.getData();
    };
    TablesAdvancedComponent.prototype.search = function () {
        this.query.page = 0;
        this.getData();
    };
    TablesAdvancedComponent.ctorParameters = function () { return [
        { type: _advanced_service__WEBPACK_IMPORTED_MODULE_2__["TableAdvancedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    TablesAdvancedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables-advanced',
            template: __webpack_require__(/*! raw-loader!./advanced.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/tables/advanced/advanced.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [_advanced_service__WEBPACK_IMPORTED_MODULE_2__["TableAdvancedService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_advanced_service__WEBPACK_IMPORTED_MODULE_2__["TableAdvancedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TablesAdvancedComponent);
    return TablesAdvancedComponent;
}());



/***/ }),

/***/ "./src/app/routes/tables/advanced/advanced.service.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/tables/advanced/advanced.service.ts ***!
  \************************************************************/
/*! exports provided: TableAdvancedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableAdvancedService", function() { return TableAdvancedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");




var TAG = {
    true: { text: 'Yes', color: 'red-100' },
    false: { text: 'No', color: 'green-100' },
};
var TableAdvancedService = /** @class */ (function () {
    function TableAdvancedService(http) {
        this.http = http;
        this.columns = [
            {
                title: 'Name',
                index: 'name',
                type: 'format',
                format: function (data) {
                    return "<a href=\"" + data.html_url + "\" target=\"_blank\">" + data.name + "</a>";
                },
            },
            {
                title: 'Owner',
                index: 'owner.login',
            },
            {
                title: 'Owner Avatar',
                index: 'owner.avatar_url',
                type: 'img',
            },
            {
                title: 'Description',
                index: 'description',
                width: '300px',
            },
            {
                title: 'stars',
                index: 'stargazers_count',
            },
            {
                title: 'forks',
                index: 'forks_count',
            },
            {
                title: 'Score',
                index: 'score',
            },
            {
                title: 'Issues',
                index: 'open_issues',
            },
            {
                title: 'Language',
                index: 'language',
            },
            {
                title: 'License',
                index: 'license.name',
            },
            {
                title: 'Home Page',
                index: 'homepage',
                type: 'link',
            },
            {
                title: 'Is forked',
                index: 'fork',
                type: 'format',
                format: function (data) {
                    return JSON.stringify(data.fork);
                },
            },
            {
                title: 'Archived',
                index: 'archived',
                type: 'tag',
                tag: TAG,
            },
            {
                title: 'Created Date',
                index: 'created_at',
            },
            {
                title: 'Updated Date',
                index: 'updated_at',
            },
        ];
    }
    TableAdvancedService.prototype.getData = function (query) {
        if (query === void 0) { query = {}; }
        return this.http.get('https://api.github.com/search/repositories?' + Object(_shared__WEBPACK_IMPORTED_MODULE_3__["serialize"])(query));
    };
    TableAdvancedService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TableAdvancedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TableAdvancedService);
    return TableAdvancedService;
}());



/***/ }),

/***/ "./src/app/routes/tables/basic/basic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/tables/basic/basic.component.ts ***!
  \********************************************************/
/*! exports provided: TableBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBasicComponent", function() { return TableBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-matero/extensions/dialog */ "./node_modules/@ng-matero/extensions/fesm5/mtxDialog.js");
/* harmony import */ var _basic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic.service */ "./src/app/routes/tables/basic/basic.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/routes/tables/data.service.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/routes/tables/basic/edit/edit.component.ts");






var TableBasicComponent = /** @class */ (function () {
    function TableBasicComponent(basicSrv, dataSrv, dialog) {
        this.basicSrv = basicSrv;
        this.dataSrv = dataSrv;
        this.dialog = dialog;
        this.columns = [];
        this.list = [];
        this.isLoading = true;
    }
    TableBasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columns = this.basicSrv.getColumns(function (record) { return _this.edit(record); }, function (record) { return _this.delete(record); });
        this.list = this.dataSrv.getData();
        this.isLoading = false;
    };
    TableBasicComponent.prototype.edit = function (value) {
        var dialogRef = this.dialog.originalOpen(_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["TableBasicEditComponent"], {
            width: '600px',
            data: { record: value },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    TableBasicComponent.prototype.delete = function (value) {
        this.dialog.alert("You have deleted " + value.position + "!");
    };
    TableBasicComponent.prototype.changeSelect = function (e) {
        console.log(e);
    };
    TableBasicComponent.prototype.changeSort = function (e) {
        console.log(e);
    };
    TableBasicComponent.ctorParameters = function () { return [
        { type: _basic_service__WEBPACK_IMPORTED_MODULE_3__["TableBasicService"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["TableDataService"] },
        { type: _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_2__["MtxDialog"] }
    ]; };
    TableBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-basic',
            template: __webpack_require__(/*! raw-loader!./basic.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/tables/basic/basic.component.html"),
            providers: [_basic_service__WEBPACK_IMPORTED_MODULE_3__["TableBasicService"], _data_service__WEBPACK_IMPORTED_MODULE_4__["TableDataService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_basic_service__WEBPACK_IMPORTED_MODULE_3__["TableBasicService"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["TableDataService"],
            _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_2__["MtxDialog"]])
    ], TableBasicComponent);
    return TableBasicComponent;
}());



/***/ }),

/***/ "./src/app/routes/tables/basic/basic.service.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/tables/basic/basic.service.ts ***!
  \******************************************************/
/*! exports provided: TableBasicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBasicService", function() { return TableBasicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableBasicService = /** @class */ (function () {
    function TableBasicService() {
        this.columns = [
            {
                title: 'Select',
                index: 'select',
                type: 'checkbox',
                fixed: 'left',
                width: '30px',
            },
            {
                title: 'Position',
                index: 'position',
                width: 'auto',
                sort: true,
            },
            {
                title: 'Name',
                index: 'name',
                width: 'auto',
                sort: true,
            },
            {
                title: 'Weight',
                index: 'weight',
                width: 'auto',
            },
            {
                title: 'Symbol',
                index: 'symbol',
                width: 'auto',
            },
            {
                title: 'Gender',
                index: 'gender',
                width: 'auto',
            },
            {
                title: 'Mobile',
                index: 'mobile',
                width: 'auto',
            },
            {
                title: 'Tele',
                index: 'tele',
                width: 'auto',
            },
            {
                title: 'City',
                index: 'city',
                width: 'auto',
            },
            {
                title: 'Address',
                index: 'address',
                width: '200px',
            },
            {
                title: 'Date',
                index: 'date',
                width: 'auto',
            },
            {
                title: 'Website',
                index: 'website',
                width: 'auto',
            },
            {
                title: 'Company',
                index: 'company',
                width: 'auto',
            },
            {
                title: 'Email',
                index: 'email',
                width: 'auto',
            },
        ];
    }
    TableBasicService.prototype.getColumns = function (fn1, fn2) {
        this.columns.push({
            title: 'Option',
            index: 'option',
            width: '80px',
            fixed: 'right',
            right: '0px',
            type: 'button',
            buttons: [
                {
                    icon: 'edit',
                    tooltip: 'Edit',
                    type: 'link',
                    click: fn1,
                },
                {
                    icon: 'delete',
                    tooltip: 'Delete',
                    color: 'warn',
                    type: 'link',
                    pop: true,
                    popTitle: 'Confirm delete?',
                    click: fn2,
                },
            ],
        });
        return this.columns;
    };
    TableBasicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableBasicService);
    return TableBasicService;
}());



/***/ }),

/***/ "./src/app/routes/tables/basic/edit/edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/tables/basic/edit/edit.component.ts ***!
  \************************************************************/
/*! exports provided: TableBasicEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBasicEditComponent", function() { return TableBasicEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var TableBasicEditComponent = /** @class */ (function () {
    function TableBasicEditComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TableBasicEditComponent.prototype.ngOnInit = function () { };
    TableBasicEditComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    TableBasicEditComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    TableBasicEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-basic-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/tables/basic/edit/edit.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], TableBasicEditComponent);
    return TableBasicEditComponent;
}());



/***/ }),

/***/ "./src/app/routes/tables/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/tables/data.service.ts ***!
  \***********************************************/
/*! exports provided: TableDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataService", function() { return TableDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        gender: 'male',
        mobile: '13198765432',
        tele: '80675432',
        city: 'New York',
        address: '555 Lexington Avenue',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Hydrogen@gmail.com',
    },
    {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        gender: 'male',
        mobile: '13034676675',
        tele: '80675432',
        city: 'Shanghai',
        address: '88 Songshan Road',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Helium@gmail.com',
    },
    {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        gender: 'male',
        mobile: '15376892233',
        tele: '80675432',
        city: 'Los Angeles',
        address: '48400 Seminole Dr.,Cabazon',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Lithium@gmail.com',
    },
    {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        gender: 'male',
        mobile: '13765443298',
        tele: '80675432',
        city: 'Beijing',
        address: 'chaoyang',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Beryllium@gmail.com',
    },
    {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        gender: 'male',
        mobile: '13198765432',
        tele: '80675432',
        city: 'Berlin',
        address: 'Bernauer Str.111,13355',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Boron@gmail.com',
    },
    {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        gender: 'male',
        mobile: '13166665432',
        tele: '80675432',
        city: 'Madrid',
        address: 'Madrid International Exhibition Center',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Carbon@gmail.com',
    },
    {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        gender: 'male',
        mobile: '15811112222',
        tele: '80675432',
        city: 'Sydney',
        address: 'Circular Quay, Sydney NSW 2000',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Nitrogen@gmail.com',
    },
    {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        gender: 'male',
        mobile: '15044558899',
        tele: '80675432',
        city: 'Washington',
        address: 'University of Washington',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Oxygen@gmail.com',
    },
    {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        gender: 'male',
        mobile: '13198666677',
        tele: '80675432',
        city: 'London',
        address: 'unkown',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Fluorine@gmail.com',
    },
    {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        gender: 'male',
        mobile: '17098765432',
        tele: '12345678',
        city: 'Paris',
        address: 'Rue Croix des Petits Champs',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Neon@gmail.com',
    },
    {
        position: 11,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        gender: 'male',
        mobile: '13166665432',
        tele: '80675432',
        city: 'Madrid',
        address: 'Madrid International Exhibition Center',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Carbon@gmail.com',
    },
    {
        position: 12,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        gender: 'male',
        mobile: '15811112222',
        tele: '80675432',
        city: 'Sydney',
        address: 'Circular Quay, Sydney NSW 2000',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Nitrogen@gmail.com',
    },
    {
        position: 13,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        gender: 'male',
        mobile: '15044558899',
        tele: '80675432',
        city: 'Washington',
        address: 'University of Washington',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Oxygen@gmail.com',
    },
    {
        position: 14,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        gender: 'male',
        mobile: '13198666677',
        tele: '80675432',
        city: 'London',
        address: 'unkown',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Fluorine@gmail.com',
    },
    {
        position: 15,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        gender: 'male',
        mobile: '17098765432',
        tele: '12345678',
        city: 'Paris',
        address: 'Rue Croix des Petits Champs',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Neon@gmail.com',
    },
    {
        position: 16,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        gender: 'male',
        mobile: '13198765432',
        tele: '80675432',
        city: 'New York',
        address: '555 Lexington Avenue',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Hydrogen@gmail.com',
    },
    {
        position: 17,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        gender: 'male',
        mobile: '13034676675',
        tele: '80675432',
        city: 'Shanghai',
        address: '88 Songshan Road',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Helium@gmail.com',
    },
    {
        position: 18,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        gender: 'male',
        mobile: '15376892233',
        tele: '80675432',
        city: 'Los Angeles',
        address: '48400 Seminole Dr.,Cabazon',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Lithium@gmail.com',
    },
    {
        position: 19,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        gender: 'male',
        mobile: '13765443298',
        tele: '80675432',
        city: 'Beijing',
        address: 'chaoyang',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Beryllium@gmail.com',
    },
    {
        position: 20,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        gender: 'male',
        mobile: '13198765432',
        tele: '80675432',
        city: 'Berlin',
        address: 'Bernauer Str.111,13355',
        date: '1423456765768',
        website: 'www.matero.com',
        company: 'matero',
        email: 'Boron@gmail.com',
    },
];
var TableDataService = /** @class */ (function () {
    function TableDataService() {
    }
    TableDataService.prototype.getData = function () {
        return ELEMENT_DATA;
    };
    TableDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TableDataService);
    return TableDataService;
}());



/***/ }),

/***/ "./src/app/routes/tables/tables-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/tables/tables-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function() { return TableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/routes/tables/basic/basic.component.ts");
/* harmony import */ var _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced/advanced.component */ "./src/app/routes/tables/advanced/advanced.component.ts");





var routes = [
    { path: 'basic', component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__["TableBasicComponent"], data: { title: 'Table Basic' } },
    { path: 'advanced', component: _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_4__["TablesAdvancedComponent"] },
];
var TableRoutingModule = /** @class */ (function () {
    function TableRoutingModule() {
    }
    TableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TableRoutingModule);
    return TableRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/tables/tables.module.ts":
/*!************************************************!*\
  !*** ./src/app/routes/tables/tables.module.ts ***!
  \************************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/routes/tables/tables-routing.module.ts");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/routes/tables/basic/basic.component.ts");
/* harmony import */ var _basic_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic/edit/edit.component */ "./src/app/routes/tables/basic/edit/edit.component.ts");
/* harmony import */ var _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advanced/advanced.component */ "./src/app/routes/tables/advanced/advanced.component.ts");







var COMPONENTS = [_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["TableBasicComponent"], _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_6__["TablesAdvancedComponent"]];
var COMPONENTS_DYNAMIC = [_basic_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["TableBasicEditComponent"]];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TableRoutingModule"]],
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](COMPONENTS, COMPONENTS_DYNAMIC),
            entryComponents: COMPONENTS_DYNAMIC,
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module-es5.js.map