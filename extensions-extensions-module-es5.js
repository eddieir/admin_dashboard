(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extensions-extensions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/extensions/alert/alert.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/extensions/alert/alert.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"'alert'\" class=\"bg-amber-600 text-dark\"></page-header>\n\n<h3>Normal</h3>\n<mtx-alert type=\"info\">\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n</mtx-alert>\n<mtx-alert type=\"success\">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</mtx-alert>\n<mtx-alert type=\"warning\">\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\n</mtx-alert>\n<mtx-alert type=\"danger\">\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</mtx-alert>\n\n<h3>Dismissible</h3>\n<mtx-alert type=\"info\" [dismissible]=\"true\">\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n</mtx-alert>\n<mtx-alert type=\"success\" [dismissible]=\"true\">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</mtx-alert>\n\n<h3>Elevation</h3>\n<mtx-alert type=\"danger\" elevation=\"3\">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</mtx-alert>\n<mtx-alert type=\"warning\" elevation=\"3\">\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\n</mtx-alert>\n<mtx-alert type=\"default\" elevation=\"3\">\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n</mtx-alert>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/extensions/dialog/dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/extensions/dialog/dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"'dialog'\" class=\"bg-amber-600 text-dark\"></page-header>\n\n<p>\n  THe Ng-Matero dialog is a wrapper of Angular Material dialog.\n</p>\n<p>\n  <button mat-raised-button color=\"warn\" (click)=\"alert()\">Alert</button>\n  <button class=\"m-x-8\" mat-raised-button color=\"accent\" (click)=\"confirm()\">Confirm</button>\n  <button mat-raised-button color=\"primary\" (click)=\"open()\">Open Dialog</button>\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/extensions/progress/progress.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/extensions/progress/progress.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"'progress'\"></page-header>\n\n<h3>Normal</h3>\n<mtx-progress [value]=\"30\" type=\"info\">30%</mtx-progress>\n<mtx-progress [value]=\"60\" type=\"success\">60%</mtx-progress>\n<mtx-progress [value]=\"50\" type=\"warning\">50%</mtx-progress>\n<mtx-progress [value]=\"80\" type=\"danger\">80%</mtx-progress>\n\n<h3>Striped</h3>\n<mtx-progress [value]=\"45\" [striped]=\"true\">45%</mtx-progress>\n<mtx-progress [value]=\"35\" type=\"success\" [striped]=\"true\">35%</mtx-progress>\n\n<h3>Animated</h3>\n<mtx-progress [value]=\"75\" type=\"warning\" [striped]=\"true\" [animate]=\"true\">75%</mtx-progress>\n<mtx-progress [value]=\"90\" type=\"success\" [striped]=\"true\" [animate]=\"true\">90%</mtx-progress>\n\n<h3>Custom color</h3>\n<mtx-progress [value]=\"55\" foreground=\"#3949AB\">55%</mtx-progress>\n<mtx-progress [value]=\"70\" [striped]=\"true\" foreground=\"#6D4C41\">70%</mtx-progress>\n\n<h3>Custom height</h3>\n<mtx-progress [value]=\"35\" type=\"info\" height=\"2px\"></mtx-progress>\n<mtx-progress [value]=\"55\" type=\"success\" height=\"2px\"></mtx-progress>\n<mtx-progress [value]=\"75\" type=\"warning\" height=\"2px\"></mtx-progress>\n<mtx-progress [value]=\"95\" type=\"danger\" height=\"2px\"></mtx-progress>\n"

/***/ }),

/***/ "./src/app/routes/extensions/alert/alert.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/extensions/alert/alert.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9leHRlbnNpb25zL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/extensions/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/extensions/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: ExtensionsAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionsAlertComponent", function() { return ExtensionsAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExtensionsAlertComponent = /** @class */ (function () {
    function ExtensionsAlertComponent() {
    }
    ExtensionsAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extensions-alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/extensions/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/routes/extensions/alert/alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExtensionsAlertComponent);
    return ExtensionsAlertComponent;
}());



/***/ }),

/***/ "./src/app/routes/extensions/dialog/dialog.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/extensions/dialog/dialog.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9leHRlbnNpb25zL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/extensions/dialog/dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/extensions/dialog/dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: ExtensionsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionsDialogComponent", function() { return ExtensionsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-matero/extensions/dialog */ "./node_modules/@ng-matero/extensions/fesm5/mtxDialog.js");



var ExtensionsDialogComponent = /** @class */ (function () {
    function ExtensionsDialogComponent(dialog) {
        this.dialog = dialog;
    }
    ExtensionsDialogComponent.prototype.alert = function () {
        var _this = this;
        this.dialog.alert("My name is Zongbin!", function () {
            _this.dialog.alert("Glad to meet you!");
        });
    };
    ExtensionsDialogComponent.prototype.confirm = function () {
        var _this = this;
        this.dialog.confirm("What's your name?", function () {
            _this.dialog.alert("Hi, Zongbin!");
        }, function () {
            _this.dialog.alert("I don't know.");
        });
    };
    ExtensionsDialogComponent.prototype.open = function () {
        var _this = this;
        this.dialog.open({
            title: 'This is the title',
            description: 'You can write some messages here.',
            buttons: [
                {
                    type: '',
                    text: 'Close',
                    onClick: function () {
                        _this.dialog.alert("You click Close button.");
                    },
                },
                {
                    type: 'primary',
                    text: 'View',
                    onClick: function () {
                        _this.dialog.alert("You click View button.");
                    },
                },
                {
                    type: 'warn',
                    text: 'Ok',
                    onClick: function () {
                        _this.dialog.alert("You click Ok button.");
                    },
                },
            ],
        });
    };
    ExtensionsDialogComponent.ctorParameters = function () { return [
        { type: _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_2__["MtxDialog"] }
    ]; };
    ExtensionsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extensions-dialog',
            template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/extensions/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/routes/extensions/dialog/dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_2__["MtxDialog"]])
    ], ExtensionsDialogComponent);
    return ExtensionsDialogComponent;
}());



/***/ }),

/***/ "./src/app/routes/extensions/extensions-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/extensions/extensions-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ExtensionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionsRoutingModule", function() { return ExtensionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/routes/extensions/alert/alert.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/routes/extensions/dialog/dialog.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/routes/extensions/progress/progress.component.ts");






var routes = [
    { path: 'alert', component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["ExtensionsAlertComponent"] },
    { path: 'dialog', component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ExtensionsDialogComponent"] },
    { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_5__["ExtensionsProgressComponent"] },
];
var ExtensionsRoutingModule = /** @class */ (function () {
    function ExtensionsRoutingModule() {
    }
    ExtensionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExtensionsRoutingModule);
    return ExtensionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/extensions/extensions.module.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/extensions/extensions.module.ts ***!
  \********************************************************/
/*! exports provided: ExtensionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionsModule", function() { return ExtensionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _extensions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions-routing.module */ "./src/app/routes/extensions/extensions-routing.module.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/routes/extensions/alert/alert.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/routes/extensions/dialog/dialog.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/routes/extensions/progress/progress.component.ts");







var COMPONENTS = [
    _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["ExtensionsAlertComponent"],
    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ExtensionsDialogComponent"],
    _progress_progress_component__WEBPACK_IMPORTED_MODULE_6__["ExtensionsProgressComponent"],
];
var COMPONENTS_DYNAMIC = [];
var ExtensionsModule = /** @class */ (function () {
    function ExtensionsModule() {
    }
    ExtensionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _extensions_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExtensionsRoutingModule"]],
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](COMPONENTS, COMPONENTS_DYNAMIC),
            entryComponents: COMPONENTS_DYNAMIC,
        })
    ], ExtensionsModule);
    return ExtensionsModule;
}());



/***/ }),

/***/ "./src/app/routes/extensions/progress/progress.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routes/extensions/progress/progress.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9leHRlbnNpb25zL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/extensions/progress/progress.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/extensions/progress/progress.component.ts ***!
  \******************************************************************/
/*! exports provided: ExtensionsProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionsProgressComponent", function() { return ExtensionsProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExtensionsProgressComponent = /** @class */ (function () {
    function ExtensionsProgressComponent() {
    }
    ExtensionsProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extensions-progress',
            template: __webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/extensions/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/routes/extensions/progress/progress.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExtensionsProgressComponent);
    return ExtensionsProgressComponent;
}());



/***/ })

}]);
//# sourceMappingURL=extensions-extensions-module-es5.js.map