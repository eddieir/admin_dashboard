(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-media-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/media/gallery/gallery.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/media/gallery/gallery.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header class=\"bg-pink-A100\" [title]=\"'Media'\"></page-header>\n\n<p>The media picture is powered by <a href=\"https://github.com/nzbin/photoviewer\"\n     target=\"_blaknk\">PhotoViewer</a>, you\n  can click the picture to enlarge it.</p>\n<mat-grid-list cols=\"4\" rowHeight=\"1:1\">\n  <mat-grid-tile *ngFor=\"let image of images; let i = index\">\n    <mat-grid-tile-header>\n      <span matLine>Gallery Image: {{ i }}</span>\n    </mat-grid-tile-header>\n\n    <img class=\"fit-cover cursor-pointer\" src=\"{{image.src}}\" alt=\"Gallery Image\"\n         (click)=\"preview(i)\" />\n\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/routes/media/gallery/gallery.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/media/gallery/gallery.component.ts ***!
  \***********************************************************/
/*! exports provided: MediaGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaGalleryComponent", function() { return MediaGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var photoviewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! photoviewer */ "./node_modules/photoviewer/dist/photoviewer.js");
/* harmony import */ var photoviewer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(photoviewer__WEBPACK_IMPORTED_MODULE_2__);



var MediaGalleryComponent = /** @class */ (function () {
    function MediaGalleryComponent() {
        this.dir = 'assets/images/pixabay/';
        this.images = [];
        for (var i = 1; i <= 20; i++) {
            this.images.push({
                title: i,
                src: this.dir + i + '.jpg',
            });
        }
    }
    // Preview images
    MediaGalleryComponent.prototype.preview = function (index) {
        var options = {
            index: index,
        };
        var viewer = new photoviewer__WEBPACK_IMPORTED_MODULE_2___default.a(this.images, options);
    };
    MediaGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/media/gallery/gallery.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MediaGalleryComponent);
    return MediaGalleryComponent;
}());



/***/ }),

/***/ "./src/app/routes/media/media-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/media/media-routing.module.ts ***!
  \******************************************************/
/*! exports provided: MediaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaRoutingModule", function() { return MediaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/routes/media/gallery/gallery.component.ts");




var routes = [{ path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["MediaGalleryComponent"] }];
var MediaRoutingModule = /** @class */ (function () {
    function MediaRoutingModule() {
    }
    MediaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MediaRoutingModule);
    return MediaRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/media/media.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/media/media.module.ts ***!
  \**********************************************/
/*! exports provided: MediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _media_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-routing.module */ "./src/app/routes/media/media-routing.module.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/routes/media/gallery/gallery.component.ts");





var COMPONENTS = [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["MediaGalleryComponent"]];
var COMPONENTS_DYNAMIC = [];
var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _media_routing_module__WEBPACK_IMPORTED_MODULE_3__["MediaRoutingModule"]
            ],
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](COMPONENTS, COMPONENTS_DYNAMIC),
            entryComponents: COMPONENTS_DYNAMIC
        })
    ], MediaModule);
    return MediaModule;
}());



/***/ })

}]);
//# sourceMappingURL=media-media-module-es5.js.map