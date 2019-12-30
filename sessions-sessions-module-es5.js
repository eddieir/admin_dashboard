(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sessions-sessions-module"],{

/***/ "./src/app/routes/sessions/403.component.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/403.component.ts ***!
  \**************************************************/
/*! exports provided: Error403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error403Component", function() { return Error403Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error403Component = /** @class */ (function () {
    function Error403Component() {
    }
    Error403Component.prototype.ngOnInit = function () { };
    Error403Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-403',
            template: "\n    <error-code\n      code=\"403\"\n      [title]=\"'Permission denied!'\"\n      [message]=\"'You do not have permission to access the requested data.'\"\n    ></error-code>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error403Component);
    return Error403Component;
}());



/***/ }),

/***/ "./src/app/routes/sessions/404.component.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/404.component.ts ***!
  \**************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () { };
    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-404',
            template: "\n    <error-code\n      code=\"404\"\n      [title]=\"'Page not found!'\"\n      [message]=\"'This is not the web page you are looking for.'\"\n    ></error-code>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/routes/sessions/500.component.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/500.component.ts ***!
  \**************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error500Component = /** @class */ (function () {
    function Error500Component() {
    }
    Error500Component.prototype.ngOnInit = function () { };
    Error500Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-500',
            template: "\n    <error-code\n      code=\"500\"\n      [title]=\"'Server went wrong!'\"\n      [message]=\"\n        'Just kidding, looks like we have an internal issue, please try refreshing.'\n      \"\n    >\n    </error-code>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error500Component);
    return Error500Component;
}());



/***/ }),

/***/ "./src/app/routes/sessions/sessions-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/sessions/sessions-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SessionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsRoutingModule", function() { return SessionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./403.component */ "./src/app/routes/sessions/403.component.ts");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404.component */ "./src/app/routes/sessions/404.component.ts");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./500.component */ "./src/app/routes/sessions/500.component.ts");






var routes = [
    {
        path: '403',
        component: _403_component__WEBPACK_IMPORTED_MODULE_3__["Error403Component"],
        data: { title: '403 Forbidden', titleI18n: '403 Forbidden' },
    },
    {
        path: '404',
        component: _404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"],
        data: { title: '404 Not Found', titleI18n: '404 Not Found' },
    },
    {
        path: '500',
        component: _500_component__WEBPACK_IMPORTED_MODULE_5__["Error500Component"],
        data: { title: '500 Error', titleI18n: '500 Error' },
    },
];
var SessionsRoutingModule = /** @class */ (function () {
    function SessionsRoutingModule() {
    }
    SessionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SessionsRoutingModule);
    return SessionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/sessions/sessions.module.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/sessions/sessions.module.ts ***!
  \****************************************************/
/*! exports provided: SessionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsModule", function() { return SessionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sessions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessions-routing.module */ "./src/app/routes/sessions/sessions-routing.module.ts");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./403.component */ "./src/app/routes/sessions/403.component.ts");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404.component */ "./src/app/routes/sessions/404.component.ts");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./500.component */ "./src/app/routes/sessions/500.component.ts");







var COMPONENTS = [_404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"], _403_component__WEBPACK_IMPORTED_MODULE_4__["Error403Component"], _500_component__WEBPACK_IMPORTED_MODULE_6__["Error500Component"]];
var COMPONENTS_DYNAMIC = [];
var SessionsModule = /** @class */ (function () {
    function SessionsModule() {
    }
    SessionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _sessions_routing_module__WEBPACK_IMPORTED_MODULE_3__["SessionsRoutingModule"]],
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](COMPONENTS, COMPONENTS_DYNAMIC),
            entryComponents: COMPONENTS_DYNAMIC,
        })
    ], SessionsModule);
    return SessionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=sessions-sessions-module-es5.js.map