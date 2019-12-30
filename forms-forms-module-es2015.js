(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/forms/dynamic/dynamic.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/forms/dynamic/dynamic.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header></page-header>\n\n<mat-card>\n  <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <formly-form [form]=\"form\" [fields]=\"fields\" [model]=\"model\"></formly-form>\n    <button mat-raised-button color=\"primary\">Submit</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/forms/elements/elements.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/forms/elements/elements.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header></page-header>\n\n<div fxLayout=\"row wrap\" class=\"matero-row\">\n  <div fxFlex=\"100\" class=\"matero-col\">\n    <mat-card>\n      <mat-card-title>Form Inline</mat-card-title>\n\n      <form>\n        <mat-form-field class=\"m-r-8\">\n          <input matInput placeholder=\"Username\" [(ngModel)]=\"q.username\" name=\"username\">\n        </mat-form-field>\n\n        <mat-form-field class=\"m-r-8\">\n          <input matInput placeholder=\"Email\" [(ngModel)]=\"q.email\" name=\"email\">\n        </mat-form-field>\n\n        <mat-form-field class=\"m-r-8\">\n          <mat-label>Gender</mat-label>\n          <mat-select [(ngModel)]=\"q.gender\" name=\"gender\">\n            <mat-option>-- None --</mat-option>\n            <mat-option value=\"1\">male</mat-option>\n            <mat-option value=\"2\">female</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <button mat-raised-button color=\"primary\">Search</button>\n      </form>\n      {{q|json}}\n\n    </mat-card>\n  </div>\n  <div fxFlex=\"33.33\" fxFlex.lt-sm=\"100\" class=\"matero-col\">\n    <mat-card>\n      <mat-card-title>Form Horizontal</mat-card-title>\n\n      <form [formGroup]=\"reactiveForm1\" class=\"matero-form-horizontal\">\n        <mat-form-field>\n          <mat-label>Username</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" formControlName=\"username\" required>\n          <mat-error *ngIf=\"reactiveForm1.get('username').invalid\">Please enter username\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" formControlName=\"email\" required>\n          <mat-error *ngIf=\"reactiveForm1.get('email').invalid\">\n            {{getErrorMessage(reactiveForm1)}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Gender</mat-label>\n          <mat-select required formControlName=\"gender\" required>\n            <mat-option>-- None --</mat-option>\n            <mat-option value=\"1\">male</mat-option>\n            <mat-option value=\"2\">female</mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"reactiveForm1.get('gender').invalid\">Please select gender</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>City</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" formControlName=\"city\" required>\n          <mat-error *ngIf=\"reactiveForm1.get('city').invalid\">Please enter city</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Address</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" formControlName=\"address\" required>\n          <mat-error *ngIf=\"reactiveForm1.get('address').invalid\">Please enter address</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Company</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" formControlName=\"company\" required>\n          <mat-error *ngIf=\"reactiveForm1.get('company').invalid\">Please enter company</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Mobile</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" type=\"number\" formControlName=\"mobile\"\n                 required>\n          <mat-icon matSuffix>smartphone</mat-icon>\n          <mat-error *ngIf=\"reactiveForm1.get('mobile').invalid\">Please enter mobile</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Tele</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" type=\"number\" formControlName=\"tele\"\n                 required>\n          <mat-icon matSuffix>phone</mat-icon>\n          <mat-error *ngIf=\"reactiveForm1.get('tele').invalid\">Please enter tele</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Website</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" formControlName=\"website\" required>\n          <mat-error *ngIf=\"reactiveForm1.get('website').invalid\">Please enter website</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"\n                 formControlName=\"date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"reactiveForm1.get('date').invalid\">Please enter website</mat-error>\n        </mat-form-field>\n\n        <button mat-raised-button color=\"primary\" class=\"m-t-8\">Save</button>\n      </form>\n      {{reactiveForm1.value|json}}\n\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"66.67\" fxFlex.lt-sm=\"100\" class=\"matero-col\">\n    <mat-card>\n      <mat-card-title>Form Horizontal</mat-card-title>\n\n      <form [formGroup]=\"reactiveForm2\" class=\"matero-form-horizontal\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"8px grid\">\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>Username</mat-label>\n              <input matInput placeholder=\"Simple placeholder\" formControlName=\"username\"\n                     required>\n              <mat-error *ngIf=\"reactiveForm2.get('username').invalid\">Please enter username\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>Email</mat-label>\n              <input matInput placeholder=\"Simple placeholder\" formControlName=\"email\" required>\n              <mat-error *ngIf=\"reactiveForm2.get('email').invalid\">\n                {{getErrorMessage(reactiveForm2)}}</mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>Gender</mat-label>\n              <mat-select required formControlName=\"gender\" required>\n                <mat-option>-- None --</mat-option>\n                <mat-option value=\"1\">male</mat-option>\n                <mat-option value=\"2\">female</mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"reactiveForm2.get('gender').invalid\">Please select gender\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>City</mat-label>\n              <input matInput placeholder=\"Simple placeholder\" formControlName=\"city\" required>\n              <mat-error *ngIf=\"reactiveForm2.get('city').invalid\">Please enter city</mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>Address</mat-label>\n              <input matInput placeholder=\"Simple placeholder\" formControlName=\"address\" required>\n              <mat-error *ngIf=\"reactiveForm2.get('address').invalid\">Please enter address\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>Company</mat-label>\n              <input matInput placeholder=\"Simple placeholder\" formControlName=\"company\" required>\n              <mat-error *ngIf=\"reactiveForm2.get('company').invalid\">Please enter company\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>Mobile</mat-label>\n              <input matInput placeholder=\"Simple placeholder\" type=\"number\"\n                     formControlName=\"mobile\" required>\n              <mat-icon matSuffix>smartphone</mat-icon>\n              <mat-error *ngIf=\"reactiveForm2.get('mobile').invalid\">Please enter mobile\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>Tele</mat-label>\n              <input matInput placeholder=\"Simple placeholder\" type=\"number\"\n                     formControlName=\"tele\" required>\n              <mat-icon matSuffix>phone</mat-icon>\n              <mat-error *ngIf=\"reactiveForm2.get('tele').invalid\">Please enter tele</mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <mat-label>Website</mat-label>\n              <input matInput placeholder=\"Simple placeholder\" formControlName=\"website\" required>\n              <mat-error *ngIf=\"reactiveForm2.get('website').invalid\">Please enter website\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"50\" fxFlex.lt-sm=\"100\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\"\n                     formControlName=\"date\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker #picker2></mat-datepicker>\n              <mat-error *ngIf=\"reactiveForm2.get('date').invalid\">Please enter website\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n        </div>\n\n        <button mat-raised-button color=\"primary\" class=\"m-t-8\">Save</button>\n\n      </form>\n      {{reactiveForm2.value|json}}\n\n    </mat-card>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/forms/selects/selects.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/forms/selects/selects.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header></page-header>\n\n<div fxLayout=\"row wrap\" class=\"matero-row\">\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"matero-col\">\n    <mat-card>\n      <mat-card-title>Data Source</mat-card-title>\n      <div>\n        <p>\n          Most common case is showing data from backend\n          API and with ng-select this is extremely simple since you can bind directly to\n          observable when using angular <b> | async</b> pipe\n        </p>\n        <ng-select [items]=\"people$ | async\" bindLabel=\"name\" bindValue=\"id\" autofocus\n                   [(ngModel)]=\"selectedPersonId\"\n                   placeholder=\"select person\">\n        </ng-select>\n        Selected: {{selectedPersonId}}\n        <mat-divider class=\"m-y-16\" inset></mat-divider>\n        <p>\n          You can also set array of objects as items input\n        </p>\n        <ng-select [items]=\"people\" bindLabel=\"name\" bindValue=\"id\" [(ngModel)]=\"selectedPersonId2\"\n                   placeholder=\"select person\">\n        </ng-select>\n        Selected: {{selectedPersonId2}}\n        <mat-divider class=\"m-y-16\" inset></mat-divider>\n        <p>\n          While array of objects is the most common items source, you may want to set simple array\n          of strings,\n          numbers, booleans\n        </p>\n        <ng-select [items]=\"simpleItems\" [(ngModel)]=\"selectedSimpleItem\">\n        </ng-select>\n        Selected: {{selectedSimpleItem | json}}\n        <mat-divider class=\"m-y-16\" inset></mat-divider>\n        <p>\n          If you have simple use case, you can omit items array and bind options directly in html\n          using\n          <b>ng-option</b> component.\n        </p>\n        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"toggleDisabled()\"\n                class=\"m-b-8\">Toggle\n          option[1] disabled</button>\n\n        <ng-select [(ngModel)]=\"selectedCarId\" placeholder=\"select car\">\n          <ng-option *ngFor=\"let car of cars\" [value]=\"car.id\" [disabled]=\"car.disabled\">\n            {{car.name}}</ng-option>\n          <ng-option [value]=\"'custom'\">Custom</ng-option>\n        </ng-select>\n\n        Selected car ID: {{selectedCarId | json}}\n      </div>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"matero-col\">\n    <mat-card>\n      <mat-card-title>Tags</mat-card-title>\n      <div>\n        <label>Default tags</label>\n\n        <ng-select [items]=\"[]\" [addTag]=\"true\" [(ngModel)]=\"selectedCompany\">\n        </ng-select>\n\n        <p>\n          Selected value: {{selectedCompany | json}}\n        </p>\n        <mat-divider class=\"m-y-16\" inset></mat-divider>\n\n        <label>Custom tags</label>\n\n        <ng-select [items]=\"companies\" [addTag]=\"addTag\" [hideSelected]=\"true\" multiple=\"true\"\n                   bindLabel=\"name\"\n                   [(ngModel)]=\"selectedCompanyCustom\">\n        </ng-select>\n\n        <p>\n          Selected value: {{selectedCompanyCustom | json}}\n        </p>\n\n        <mat-divider class=\"m-y-16\" inset></mat-divider>\n        <label>Server side tags</label>\n\n        <ng-select [items]=\"companies\" [addTag]=\"addTagPromise\" multiple=\"true\" bindLabel=\"name\"\n                   [loading]=\"loading\"\n                   [(ngModel)]=\"selectedCompanyCustomPromise\">\n\n          <ng-template ng-tag-tmp let-search=\"searchTerm\">\n            <b>create new</b>: {{search}}\n          </ng-template>\n        </ng-select>\n\n        <mat-divider class=\"m-y-16\" inset></mat-divider>\n\n        <label>Tagging without dropdown. Press enter to add item</label>\n\n        <ng-select [items]=\"[]\" [addTag]=\"true\" [multiple]=\"true\" [selectOnTab]=\"true\"\n                   [isOpen]=\"false\">\n        </ng-select>\n\n      </div>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/routes/forms/data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/forms/data.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getGithubAccounts(term = null) {
        if (term) {
            return this.http
                .get(`https://api.github.com/search/users?q=${term}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(rsp => rsp.items));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
    }
    getAlbums() {
        return this.http.get('https://jsonplaceholder.typicode.com/albums');
    }
    getPhotos() {
        return this.http.get('https://jsonplaceholder.typicode.com/photos');
    }
    getPeople(term = null) {
        let items = getMockPeople();
        if (term) {
            items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500));
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], DataService);

function getMockPeople() {
    return [
        {
            id: '5a15b13c36e7a7f00cf0d7cb',
            index: 2,
            isActive: true,
            picture: 'http://placehold.it/32x32',
            age: 23,
            name: 'Karyn Wright',
            gender: 'female',
            company: 'ZOLAR',
            email: 'karynwright@zolar.com',
            phone: '+1 (851) 583-2547',
        },
        {
            id: '5a15b13c2340978ec3d2c0ea',
            index: 3,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 35,
            name: 'Rochelle Estes',
            disabled: true,
            gender: 'female',
            company: 'EXTRAWEAR',
            email: 'rochelleestes@extrawear.com',
            phone: '+1 (849) 408-2029',
        },
        {
            id: '5a15b13c663ea0af9ad0dae8',
            index: 4,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 25,
            name: 'Mendoza Ruiz',
            gender: 'male',
            company: 'ZYTRAX',
            email: 'mendozaruiz@zytrax.com',
            phone: '+1 (904) 536-2020',
        },
        {
            id: '5a15b13cc9eeb36511d65acf',
            index: 5,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 39,
            name: 'Rosales Russell',
            gender: 'male',
            company: 'ELEMANTRA',
            email: 'rosalesrussell@elemantra.com',
            phone: '+1 (868) 473-3073',
        },
        {
            id: '5a15b13c728cd3f43cc0fe8a',
            index: 6,
            isActive: true,
            picture: 'http://placehold.it/32x32',
            age: 32,
            name: 'Marquez Nolan',
            gender: 'male',
            company: 'MIRACLIS',
            disabled: true,
            email: 'marqueznolan@miraclis.com',
            phone: '+1 (853) 571-3921',
        },
        {
            id: '5a15b13ca51b0aaf8a99c05a',
            index: 7,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 28,
            name: 'Franklin James',
            gender: 'male',
            company: 'CAXT',
            email: 'franklinjames@caxt.com',
            phone: '+1 (868) 539-2984',
        },
        {
            id: '5a15b13cc3b9381ffcb1d6f7',
            index: 8,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 24,
            name: 'Elsa Bradley',
            gender: 'female',
            company: 'MATRIXITY',
            email: 'elsabradley@matrixity.com',
            phone: '+1 (994) 583-3850',
        },
        {
            id: '5a15b13ce58cb6ff62c65164',
            index: 9,
            isActive: true,
            picture: 'http://placehold.it/32x32',
            age: 40,
            name: 'Pearson Thompson',
            gender: 'male',
            company: 'EZENT',
            email: 'pearsonthompson@ezent.com',
            phone: '+1 (917) 537-2178',
        },
        {
            id: '5a15b13c90b95eb68010c86e',
            index: 10,
            isActive: true,
            picture: 'http://placehold.it/32x32',
            age: 32,
            name: 'Ina Pugh',
            gender: 'female',
            company: 'MANTRIX',
            email: 'inapugh@mantrix.com',
            phone: '+1 (917) 450-2372',
        },
        {
            id: '5a15b13c2b1746e12788711f',
            index: 11,
            isActive: true,
            picture: 'http://placehold.it/32x32',
            age: 25,
            name: 'Nguyen Elliott',
            gender: 'male',
            company: 'PORTALINE',
            email: 'nguyenelliott@portaline.com',
            phone: '+1 (905) 491-3377',
        },
        {
            id: '5a15b13c605403381eec5019',
            index: 12,
            isActive: true,
            picture: 'http://placehold.it/32x32',
            age: 31,
            name: 'Mills Barnett',
            gender: 'male',
            company: 'FARMEX',
            email: 'millsbarnett@farmex.com',
            phone: '+1 (882) 462-3986',
        },
        {
            id: '5a15b13c67e2e6d1a3cd6ca5',
            index: 13,
            isActive: true,
            picture: 'http://placehold.it/32x32',
            age: 36,
            name: 'Margaret Reynolds',
            gender: 'female',
            company: 'ROOFORIA',
            email: 'margaretreynolds@rooforia.com',
            phone: '+1 (935) 435-2345',
        },
        {
            id: '5a15b13c947c836d177aa85c',
            index: 14,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 29,
            name: 'Yvette Navarro',
            gender: 'female',
            company: 'KINETICA',
            email: 'yvettenavarro@kinetica.com',
            phone: '+1 (807) 485-3824',
        },
        {
            id: '5a15b13c5dbbe61245c1fb73',
            index: 15,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 20,
            name: 'Elisa Guzman',
            gender: 'female',
            company: 'KAGE',
            email: 'elisaguzman@kage.com',
            phone: '+1 (868) 594-2919',
        },
        {
            id: '5a15b13c38fd49fefea8db80',
            index: 16,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 33,
            name: 'Jodie Bowman',
            gender: 'female',
            company: 'EMTRAC',
            email: 'jodiebowman@emtrac.com',
            phone: '+1 (891) 565-2560',
        },
        {
            id: '5a15b13c9680913c470eb8fd',
            index: 17,
            isActive: false,
            picture: 'http://placehold.it/32x32',
            age: 24,
            name: 'Diann Booker',
            gender: 'female',
            company: 'LYRIA',
            email: 'diannbooker@lyria.com',
            phone: '+1 (830) 555-3209',
        },
    ];
}


/***/ }),

/***/ "./src/app/routes/forms/dynamic/dynamic.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/forms/dynamic/dynamic.component.ts ***!
  \***********************************************************/
/*! exports provided: FormsDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsDynamicComponent", function() { return FormsDynamicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let FormsDynamicComponent = class FormsDynamicComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.model = { email: 'email@gmail.com' };
        this.fields = [
            {
                key: 'text',
                type: 'input',
                templateOptions: {
                    label: 'Text',
                    placeholder: 'Type here to see the other field become enabled...',
                },
            },
            {
                key: 'text2',
                type: 'input',
                templateOptions: {
                    label: 'Hey!',
                    placeholder: 'This one is disabled if there is no text in the other input',
                },
                expressionProperties: {
                    'templateOptions.disabled': '!model.text',
                },
            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    label: 'Email address',
                    placeholder: 'Enter email',
                    required: true,
                },
            },
        ];
    }
    ngOnInit() { }
    submit() {
        this.showToast();
    }
    showToast() {
        this.toastr.success(JSON.stringify(this.model));
    }
};
FormsDynamicComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
FormsDynamicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-dynamic',
        template: __webpack_require__(/*! raw-loader!./dynamic.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/forms/dynamic/dynamic.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], FormsDynamicComponent);



/***/ }),

/***/ "./src/app/routes/forms/elements/elements.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/forms/elements/elements.component.ts ***!
  \*************************************************************/
/*! exports provided: FormsElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsElementsComponent", function() { return FormsElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let FormsElementsComponent = class FormsElementsComponent {
    constructor(fb) {
        this.fb = fb;
        this.q = {
            username: '',
            email: '',
            gender: '',
        };
        this.reactiveForm1 = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tele: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            website: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.reactiveForm2 = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tele: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            website: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() { }
    getErrorMessage(form) {
        return form.get('email').hasError('required')
            ? 'You must enter a value'
            : form.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    }
};
FormsElementsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FormsElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-elements',
        template: __webpack_require__(/*! raw-loader!./elements.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/forms/elements/elements.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], FormsElementsComponent);



/***/ }),

/***/ "./src/app/routes/forms/forms-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/forms/forms-routing.module.ts ***!
  \******************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/elements.component */ "./src/app/routes/forms/elements/elements.component.ts");
/* harmony import */ var _selects_selects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selects/selects.component */ "./src/app/routes/forms/selects/selects.component.ts");
/* harmony import */ var _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic/dynamic.component */ "./src/app/routes/forms/dynamic/dynamic.component.ts");






const routes = [
    { path: 'elements', component: _elements_elements_component__WEBPACK_IMPORTED_MODULE_3__["FormsElementsComponent"], data: { title: 'Form Elements' } },
    { path: 'ng-select', component: _selects_selects_component__WEBPACK_IMPORTED_MODULE_4__["FormsSelectsComponent"], data: { title: 'Ng Select' } },
    { path: 'dynamic', component: _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_5__["FormsDynamicComponent"], data: { title: 'Dynamic Form' } },
];
let FormsRoutingModule = class FormsRoutingModule {
};
FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormsRoutingModule);



/***/ }),

/***/ "./src/app/routes/forms/forms.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/forms/forms.module.ts ***!
  \**********************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/routes/forms/forms-routing.module.ts");
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/elements.component */ "./src/app/routes/forms/elements/elements.component.ts");
/* harmony import */ var _selects_selects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selects/selects.component */ "./src/app/routes/forms/selects/selects.component.ts");
/* harmony import */ var _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic/dynamic.component */ "./src/app/routes/forms/dynamic/dynamic.component.ts");







const COMPONENTS = [_elements_elements_component__WEBPACK_IMPORTED_MODULE_4__["FormsElementsComponent"], _selects_selects_component__WEBPACK_IMPORTED_MODULE_5__["FormsSelectsComponent"], _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_6__["FormsDynamicComponent"]];
const COMPONENTS_DYNAMIC = [];
let FormsModule = class FormsModule {
};
FormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormsRoutingModule"]],
        declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
        entryComponents: COMPONENTS_DYNAMIC,
    })
], FormsModule);



/***/ }),

/***/ "./src/app/routes/forms/selects/selects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/forms/selects/selects.component.ts ***!
  \***********************************************************/
/*! exports provided: FormsSelectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsSelectsComponent", function() { return FormsSelectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/routes/forms/data.service.ts");



let FormsSelectsComponent = class FormsSelectsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.people = [];
        this.selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
        this.selectedPersonId2 = '5a15b13c36e7a7f00cf0d7cb';
        this.selectedSimpleItem = 'Two';
        this.simpleItems = [];
        this.disable = true;
        this.selectedCarId = 3;
        this.cars = [
            { id: 1, name: 'Volvo' },
            { id: 2, name: 'Saab', disabled: true },
            { id: 3, name: 'Opel' },
            { id: 4, name: 'Audi' },
        ];
        // Tags
        this.companies = [];
        this.loading = false;
        this.companiesNames = ['Miškas', 'Žalias', 'Flexigen'];
        this.selectedCompany = '';
        this.selectedCompanyCustom = '';
        this.selectedCompanyCustomPromise = '';
    }
    ngOnInit() {
        this.people$ = this.dataService.getPeople();
        this.dataService.getPeople().subscribe(items => (this.people = items));
        this.simpleItems = [true, 'Two', 3];
        this.companiesNames.forEach((c, i) => {
            this.companies.push({ id: i, name: c });
        });
    }
    toggleDisabled() {
        const car = this.cars[1];
        car.disabled = !car.disabled;
    }
    addTag(name) {
        return { name, tag: true };
    }
    addTagPromise(name) {
        return new Promise(resolve => {
            this.loading = true;
            setTimeout(() => {
                resolve({ id: 5, name, valid: true });
                this.loading = false;
            }, 1000);
        });
    }
};
FormsSelectsComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
FormsSelectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-selects',
        template: __webpack_require__(/*! raw-loader!./selects.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/forms/selects/selects.component.html"),
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], FormsSelectsComponent);



/***/ })

}]);
//# sourceMappingURL=forms-forms-module-es2015.js.map