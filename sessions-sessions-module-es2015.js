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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error403Component = class Error403Component {
    constructor() { }
    ngOnInit() { }
};
Error403Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-403',
        template: `
    <error-code
      code="403"
      [title]="'Permission denied!'"
      [message]="'You do not have permission to access the requested data.'"
    ></error-code>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Error403Component);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() { }
};
Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-404',
        template: `
    <error-code
      code="404"
      [title]="'Page not found!'"
      [message]="'This is not the web page you are looking for.'"
    ></error-code>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Error404Component);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error500Component = class Error500Component {
    constructor() { }
    ngOnInit() { }
};
Error500Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-500',
        template: `
    <error-code
      code="500"
      [title]="'Server went wrong!'"
      [message]="
        'Just kidding, looks like we have an internal issue, please try refreshing.'
      "
    >
    </error-code>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Error500Component);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./403.component */ "./src/app/routes/sessions/403.component.ts");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404.component */ "./src/app/routes/sessions/404.component.ts");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./500.component */ "./src/app/routes/sessions/500.component.ts");






const routes = [
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
let SessionsRoutingModule = class SessionsRoutingModule {
};
SessionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionsRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sessions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessions-routing.module */ "./src/app/routes/sessions/sessions-routing.module.ts");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./403.component */ "./src/app/routes/sessions/403.component.ts");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404.component */ "./src/app/routes/sessions/404.component.ts");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./500.component */ "./src/app/routes/sessions/500.component.ts");







const COMPONENTS = [_404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"], _403_component__WEBPACK_IMPORTED_MODULE_4__["Error403Component"], _500_component__WEBPACK_IMPORTED_MODULE_6__["Error500Component"]];
const COMPONENTS_DYNAMIC = [];
let SessionsModule = class SessionsModule {
};
SessionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _sessions_routing_module__WEBPACK_IMPORTED_MODULE_3__["SessionsRoutingModule"]],
        declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
        entryComponents: COMPONENTS_DYNAMIC,
    })
], SessionsModule);



/***/ })

}]);
//# sourceMappingURL=sessions-sessions-module-es2015.js.map