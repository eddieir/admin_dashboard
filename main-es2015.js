(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/dashboard/dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/dashboard/dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<div class=\"matero-row\" fxLayout=\"row wrap\">\n\n  <!-- Statistics -->\n  <div class=\"matero-col\" fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\"\n       *ngFor=\"let stat of stats\">\n    <mat-card [ngClass]=\"['text-white', stat.color]\">\n      <mat-card-title class=\"f-s-12 f-w-100\">{{stat.title}}</mat-card-title>\n      <mat-card-content>\n        <h2>{{stat.amount}}</h2>\n        <mtx-progress [value]=\"stat.progress.value\"\n                      height=\"2px\"\n                      foreground=\"rgba(255,255,255,1)\"\n                      background='rgba(0,0,0,.5)'>\n        </mtx-progress>\n        <small class=\"text-muted\">Monthly</small>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Charts -->\n  <div class=\"matero-col\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\n    <mat-card>\n      <mat-card-subtitle>Traffic</mat-card-subtitle>\n      <div id=\"chart1\"></div>\n    </mat-card>\n  </div>\n  <div class=\"matero-col\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\n    <mat-card>\n      <mat-card-subtitle>Weekly Revenue</mat-card-subtitle>\n      <div id=\"chart2\"></div>\n    </mat-card>\n  </div>\n\n  <!-- Others -->\n  <div class=\"matero-col\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-tab-group class=\"m--16\">\n        <mat-tab label=\"First\">\n          <div class=\"m-16\">\n            <img class=\"d-block w-full\" src=\"assets/images/pixabay/2.jpg\" alt=\"\">\n            <h3>Aenean viverra arcu nec pellentesque ultrices. In erat purus, adipiscing nec lacinia\n              at, ornare ac eros.\n            </h3>\n            <p>\n              Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit\n              eros. Praesent\n              ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat\n              convallis est, id luctus\n              mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus\n              bibendum id. Proin non\n              ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque\n              accumsan mi, non\n              pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.</p>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Second\">\n          <div class=\"m-16\">\n            <img class=\"d-block w-full\" src=\"assets/images/pixabay/8.jpg\" alt=\"\">\n            <h3>Vestibulum vitae diam nec odio dapibus placerat. Ut ut lorem justo.</h3>\n            <p>\n              Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem\n              quis nulla malesuada\n              volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam\n              adipiscing hendrerit\n              vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis\n              aliquet. Quisque sit\n              amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien\n              lacinia. Duis sit\n              amet elit bibendum sapien dignissim bibendum.</p>\n\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Third\">\n          <div class=\"m-16\">\n            <img class=\"d-block w-full\" src=\"assets/images/pixabay/16.jpg\" alt=\"\">\n            <h3>Maecenas eget turpis luctus, scelerisque arcu id, iaculis urna. Interdum et\n              malesuada fames ac ante\n              ipsum primis in faucibus.</h3>\n            <p>\n              Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam\n              accumsan. Maecenas\n              volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh\n              ultrices tristique.\n              Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at\n              scelerisque. Nam augue nulla,\n              accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet\n              fringilla.</p>\n\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n    <mat-card>\n      <mat-card-subtitle>Album</mat-card-subtitle>\n      <mat-card-content>\n        <mat-grid-list cols=\"2\">\n          <mat-grid-tile class=\"bg-red-50\">1</mat-grid-tile>\n          <mat-grid-tile class=\"bg-purple-50\">2</mat-grid-tile>\n          <mat-grid-tile class=\"bg-orange-50\">3</mat-grid-tile>\n          <mat-grid-tile class=\"bg-cyan-50\">4</mat-grid-tile>\n        </mat-grid-list>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div class=\"matero-col\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n    <mat-card>\n      <mat-card-subtitle>Avatar List</mat-card-subtitle>\n      <mat-list>\n        <mat-list-item *ngFor=\"let message of messages\">\n          <img matListAvatar [src]=\"message.img\" alt=\"\">\n          <h3 matLine> {{message.subject}} </h3>\n          <p matLine>\n            <span>{{message.content}} </span>\n          </p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-subtitle>Revenue Table</mat-card-subtitle>\n      <mat-card-content>\n        <table class=\"w-full\" mat-table [dataSource]=\"dataSource\">\n          <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef> No. </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"weight\">\n            <th mat-header-cell *matHeaderCellDef> Weight </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"symbol\">\n            <th mat-header-cell *matHeaderCellDef> Symbol </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n      <mat-card-subtitle>Chips & Buttons</mat-card-subtitle>\n      <mat-card-content>\n        <mat-chip-list>\n          <mat-chip>One fish</mat-chip>\n          <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n          <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n          <mat-chip color=\"warn\" selected>Two fish</mat-chip>\n          <mat-chip class=\"bg-orange-500\" selected>Orange fish</mat-chip>\n          <mat-chip class=\"bg-teal-500\" selected>Teal fish</mat-chip>\n          <mat-chip class=\"bg-cyan-500\" selected>Cyan fish</mat-chip>\n          <mat-chip class=\"bg-purple-500\" selected>Purple fish</mat-chip>\n          <mat-chip class=\"bg-green-500\" selected>Green fish</mat-chip>\n        </mat-chip-list>\n\n        <div>\n          <button mat-raised-button>Basic</button>\n          <button mat-raised-button color=\"primary\">Primary</button>\n          <button mat-raised-button color=\"accent\">Accent</button>\n          <button mat-raised-button color=\"warn\">Warn</button>\n          <button mat-raised-button disabled>Disabled</button>\n          <a mat-raised-button routerLink=\".\">Link</a>\n          <button mat-raised-button class=\"bg-orange-500 text-white\">Orange</button>\n          <button mat-raised-button class=\"bg-teal-500 text-white\">Teal</button>\n          <button mat-raised-button class=\"bg-cyan-500 text-white\">Cyan</button>\n          <button mat-raised-button class=\"bg-purple-500 text-white\">Purple</button>\n          <button mat-raised-button class=\"bg-green-500 text-white\">Green</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/sessions/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/sessions/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full h-full\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"mat-elevation-z4 m-b-0\" style=\"max-width: 380px;\">\n    <mat-card-title class=\"text-center m-b-24\">Welcome Back!</mat-card-title>\n    <mat-card-content>\n      <form class=\"matero-form-horizontal\" [formGroup]=\"reactiveForm\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" formControlName=\"username\" required>\n          <mat-error *ngIf=\"reactiveForm.get('username').invalid\">Please enter username</mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput placeholder=\"Simple placeholder\" type=\"password\"\n                 formControlName=\"password\" required>\n          <mat-error *ngIf=\"reactiveForm.get('password').invalid\">Please enter password</mat-error>\n        </mat-form-field>\n\n        <div class=\"m-y-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <mat-checkbox>Remember Me</mat-checkbox>\n          <a href=\"\">Forgot Password?</a>\n        </div>\n\n        <button class=\"w-full\" mat-raised-button color=\"primary\" (click)=\"login()\"\n                [disabled]=\"reactiveForm.invalid\">Save</button>\n\n        <div class=\"m-t-16\">Don't have an account? <a routerLink=\"/auth/register\">Click here to\n            create one</a></div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/sessions/register/register.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/sessions/register/register.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full h-full\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"mat-elevation-z4 m-b-0\" style=\"max-width: 380px;\">\n    <mat-card-title class=\"m-b-24\">\n      <div>Welcome, </div>It only takes a few seconds to create your account\n    </mat-card-title>\n    <mat-card-content>\n      <form class=\"matero-form-horizontal\" [formGroup]=\"reactiveForm\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n          <mat-error *ngIf=\"reactiveForm.get('username').invalid\">Please enter username</mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\"\n                 required>\n          <mat-error *ngIf=\"reactiveForm.get('password').invalid\">Please enter password</mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Confirm Password</mat-label>\n          <input matInput placeholder=\"Confirm Password\" type=\"password\"\n                 formControlName=\"confirmPassword\" required>\n          <mat-error *ngIf=\"reactiveForm.get('confirmPassword').hasError('required')\">Please confirm\n            your password!\n          </mat-error>\n          <mat-error *ngIf=\"reactiveForm.get('confirmPassword').hasError('confirm')\">Password is\n            inconsistent!\n          </mat-error>\n        </mat-form-field>\n\n        <div class=\"m-y-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <mat-checkbox>I have read and agree to the terms of service.</mat-checkbox>\n        </div>\n\n        <button class=\"w-full\" mat-raised-button color=\"primary\">Save</button>\n\n        <div class=\"m-t-16\">Already have an account? <a routerLink=\"/auth/login\">Sign in</a></div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"matero-breadcrumb\">\n    <li class=\"matero-breadcrumb-item\"\n        *ngFor=\"let navlink of nav; trackBy: trackByNavlink; first as isFirst;\">\n      <a href=\"#\" class=\"link\" *ngIf=\"isFirst\">{{navlink}}</a>\n      <ng-container *ngIf=\"!isFirst\">\n        <mat-icon class=\"chevron\">chevron_right</mat-icon>\n        <span class=\"link\">{{navlink}}</span>\n      </ng-container>\n    </li>\n  </ol>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/error-code/error-code.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/error-code/error-code.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"w-full\">\n  <div class=\"text-center\">\n    <div class=\"matero-error-code\">{{code}}</div>\n    <div class=\"matero-error-title mat-h2 f-s-32\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"matero-error-message mat-h3\" *ngIf=\"message\">{{message}}</div>\n    <div><a mat-raised-button color=\"primary\" routerLink=\"/\">Back to Home</a></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-header/page-header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/page-header/page-header.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"matero-page-header-inner\">\n  <h1 class=\"matero-page-title\">{{title}} <small>{{subtitle}}</small></h1>\n  <breadcrumb *ngIf=\"showBreadCrumb\" [nav]=\"nav\"></breadcrumb>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/admin-layout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/admin-layout/admin-layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"matero-container-wrap\" [dir]=\"options.dir\"\n     [ngClass]=\"{\n  'matero-sidenav-collapsed': options.sidenavCollapsed && options.navPos!=='top',\n  'matero-navbar-top': options.navPos==='top',\n  'matero-header-above': options.headerPos==='above',\n  'matero-header-fixed': options.headerPos==='fixed',\n  'matero-header-white': options.theme==='light'}\">\n  <ng-progress></ng-progress>\n\n  <!-- Header Above -->\n  <app-header #header class=\"matero-header\"\n              *ngIf=\"options.showHeader && options.headerPos==='above'\"\n              (toggleSidenav)=\"sidenav.toggle()\"\n              (toggleSidenavNotice)=\"sidenavNotice.toggle()\"\n              [showBranding]=\"true\">\n  </app-header>\n\n  <mat-sidenav-container class=\"matero-container\" autosize autoFocus>\n    <mat-sidenav #sidenav class=\"matero-sidenav\"\n                 [mode]=\"isOver ? 'over' : 'side'\"\n                 [opened]=\"options.navPos==='side' && options.sidenavOpened && !isOver\"\n                 (openedChange)=\"sidenavOpenedChange($event)\"\n                 (closedStart)=\"sidenavCloseStart()\">\n      <app-sidebar (toggleCollapsed)=\"toggleCollapsed()\"\n                   [toggleChecked]=\"options.sidenavCollapsed\"\n                   [showToggle]=\"!isOver\"\n                   [showUser]=\"options.showUserPanel\"\n                   [showHeader]=\"options.headerPos!=='above'\">\n      </app-sidebar>\n    </mat-sidenav>\n\n    <mat-sidenav #sidenavNotice position=\"end\" mode=\"over\" opened=\"false\">\n      <app-sidebar-notice></app-sidebar-notice>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"matero-content-wrap\" #content>\n      <app-header #header class=\"matero-header\"\n                  *ngIf=\"options.showHeader && options.headerPos!=='above'\"\n                  (toggleSidenav)=\"sidenav.toggle()\"\n                  (toggleSidenavNotice)=\"sidenavNotice.toggle()\"\n                  [showToggle]=\"!options.sidenavCollapsed && options.navPos!=='top'\"\n                  [showBranding]=\"options.navPos==='top'\">\n      </app-header>\n\n      <app-topmenu class=\"matero-topmenu\" *ngIf=\"options.navPos==='top'\"></app-topmenu>\n\n      <div class=\"matero-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/admin-layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"matero-toolbar\">\n  <button mat-button class=\"matero-hamburger\" (click)=\"toggleSidenav.emit()\" *ngIf=\"showToggle\">\n    <mat-icon>menu</mat-icon>\n  </button>\n\n  <app-branding *ngIf=\"showBranding\"></app-branding>\n  <span fxFlex></span>\n\n  <!---<app-github-button></app-github-button>--->\n\n  <button mat-icon-button>\n    <mat-icon>search</mat-icon>\n  </button>\n\n  <button mat-icon-button (click)=\"toggleFullscreen()\" fxHide.lt-sm>\n    <mat-icon>fullscreen</mat-icon>\n  </button>\n\n  <app-notification fxHide.lt-sm></app-notification>\n\n  <app-user></app-user>\n\n  <button mat-button class=\"matero-hamburger\" (click)=\"toggleSidenavNotice.emit()\" fxHide.lt-sm>\n    <mat-icon>list</mat-icon>\n  </button>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/sidebar-notice/sidebar-notice.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/admin-layout/sidebar-notice/sidebar-notice.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Today\"> Content 1 </mat-tab>\n  <mat-tab label=\"Notifications\"> Content 2 </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/sidebar/sidebar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/admin-layout/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"matero-sidebar-header b-b-1\" *ngIf=\"showHeader\">\n  <app-branding></app-branding>\n  <span fxFlex></span>\n  <mat-slide-toggle (change)=\"toggleCollapsed.emit()\" [checked]=\"toggleChecked\" *ngIf=\"showToggle\">\n  </mat-slide-toggle>\n</div>\n\n<div class=\"matero-sidebar-inner\">\n  <app-user-panel *ngIf=\"showUser\"></app-user-panel>\n  <app-sidemenu [ripple]=\"showToggle\"></app-sidemenu>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/sidemenu/sidemenu.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/admin-layout/sidemenu/sidemenu.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul navAccordion class=\"matero-sidemenu level-0\">\n  <li navAccordionLink class=\"matero-sidemenu-item\" routerLinkActive=\"active\"\n      *ngFor=\"let menuItem of menus\"\n      [group]=\"menuItem.state\">\n    <a class=\"matero-sidemenu-link\" [routerLink]=\"['/', menuItem.state]\"\n       *ngIf=\"menuItem.type === 'link'\"\n       matRipple [matRippleDisabled]=\"!ripple\">\n      <mat-icon class=\"menu-icon\">{{ menuItem.icon }}</mat-icon>\n      <span class=\"menu-name\">{{ menuItem.name }}</span>\n      <span class=\"menu-label bg-{{ menuItem.label.color }}\" *ngIf=\"menuItem.label\">\n        {{ menuItem.label.value }}\n      </span>\n      <span fxFlex></span>\n      <span class=\"menu-badge bg-{{ menuItem.badge.color }}\" *ngIf=\"menuItem.badge\">\n        {{ menuItem.badge.value }}\n      </span>\n    </a>\n    <a class=\"matero-sidemenu-link\" [href]=\"menuItem.state\" *ngIf=\"menuItem.type === 'extLink'\"\n       matRipple [matRippleDisabled]=\"!ripple\">\n      <mat-icon class=\"menu-icon\">{{ menuItem.icon }}</mat-icon>\n      <span class=\"menu-name\">{{ menuItem.name }}</span>\n      <span class=\"menu-label bg-{{ menuItem.label.color }}\" *ngIf=\"menuItem.label\">\n        {{ menuItem.label.value }}\n      </span>\n      <span fxFlex></span>\n      <span class=\"menu-badge bg-{{ menuItem.badge.color }}\" *ngIf=\"menuItem.badge\">\n        {{ menuItem.badge.value }}\n      </span>\n    </a>\n    <a class=\"matero-sidemenu-link\" [href]=\"menuItem.state\" target=\"_blank\"\n       *ngIf=\"menuItem.type === 'extTabLink'\"\n       matRipple [matRippleDisabled]=\"!ripple\">\n      <mat-icon class=\"menu-icon\">{{ menuItem.icon }}</mat-icon>\n      <span class=\"menu-name\">{{ menuItem.name }}</span>\n      <span class=\"menu-label bg-{{ menuItem.label.color }}\" *ngIf=\"menuItem.label\">\n        {{ menuItem.label.value }}\n      </span>\n      <span fxFlex></span>\n      <span class=\"menu-badge bg-{{ menuItem.badge.color }}\" *ngIf=\"menuItem.badge\">\n        {{ menuItem.badge.value }}\n      </span>\n    </a>\n    <!-- level 1 -->\n    <a navAccordionToggle class=\"matero-sidemenu-toggle\" href=\"javascript:void(0);\"\n       *ngIf=\"menuItem.type === 'sub'\"\n       matRipple [matRippleDisabled]=\"!ripple\">\n      <mat-icon class=\"menu-icon\">{{ menuItem.icon }}</mat-icon>\n      <span class=\"menu-name\">{{ menuItem.name }}</span>\n      <span class=\"menu-label bg-{{ menuItem.label.color }}\" *ngIf=\"menuItem.label\">\n        {{ menuItem.label.value }}\n      </span>\n      <span fxFlex></span>\n      <span class=\"menu-badge bg-{{ menuItem.badge.color }}\" *ngIf=\"menuItem.badge\">\n        {{ menuItem.badge.value }}\n      </span>\n      <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\n    </a>\n    <ul navAccordion class=\"matero-sidemenu submenu level-1\" *ngIf=\"menuItem.type === 'sub'\">\n      <li navAccordionLink class=\"matero-sidemenu-item\" routerLinkActive=\"active\"\n          *ngFor=\"let childLvl1 of menuItem.children\"\n          [group]=\"childLvl1.state\">\n        <a class=\"matero-sidemenu-link\" [routerLink]=\"['/', menuItem.state, childLvl1.state]\"\n           *ngIf=\"childLvl1.type === 'link'\"\n           matRipple [matRippleDisabled]=\"!ripple\">\n          <span class=\"menu-name\">{{ childLvl1.name }}</span>\n        </a>\n        <a class=\"matero-sidemenu-link\" [href]=\"childLvl1.state\"\n           *ngIf=\"childLvl1.type === 'extLink'\"\n           matRipple [matRippleDisabled]=\"!ripple\">\n          <span class=\"menu-name\">{{ childLvl1.name }}</span>\n        </a>\n        <a class=\"matero-sidemenu-link\" [href]=\"childLvl1.state\" target=\"_blank\"\n           *ngIf=\"childLvl1.type === 'extTabLink'\"\n           matRipple [matRippleDisabled]=\"!ripple\">\n          <span class=\"menu-name\">{{ childLvl1.name }}</span>\n        </a>\n        <!-- level 2 -->\n        <a navAccordionToggle class=\"matero-sidemenu-toggle\" href=\"javascript:void(0);\"\n           *ngIf=\"childLvl1.type === 'sub'\"\n           matRipple [matRippleDisabled]=\"!ripple\">\n          <span class=\"menu-name\">{{ childLvl1.name }}</span>\n          <span fxFlex></span>\n          <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\n        </a>\n        <ul class=\"matero-sidemenu submenu level-2\" *ngIf=\"childLvl1.type === 'sub'\">\n          <li class=\"matero-sidemenu-item\" routerLinkActive=\"active\"\n              *ngFor=\"let childLvl2 of childLvl1.children\">\n            <a class=\"matero-sidemenu-link\"\n               [routerLink]=\"filterStates(['/', menuItem.state, childLvl1.state, childLvl2.state])\"\n               *ngIf=\"childLvl2.type === 'link'\"\n               matRipple [matRippleDisabled]=\"!ripple\">\n              <span class=\"menu-name\">{{ childLvl2.name }}</span>\n            </a>\n            <a class=\"matero-sidemenu-link\" [href]=\"childLvl2.state\"\n               *ngIf=\"childLvl2.type === 'extLink'\"\n               matRipple [matRippleDisabled]=\"!ripple\">\n              <span class=\"menu-name\">{{ childLvl2.name }}</span>\n            </a>\n            <a class=\"matero-sidemenu-link\" [href]=\"childLvl2.state\" target=\"_blank\"\n               *ngIf=\"childLvl2.type === 'extTabLink'\"\n               matRipple [matRippleDisabled]=\"!ripple\">\n              <span class=\"menu-name\">{{ childLvl2.name }}</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/topmenu/topmenu.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/admin-layout/topmenu/topmenu.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"matero-topmenu-inner\">\n  <ng-container *ngFor=\"let menuItem of menus\">\n\n    <a mat-button [routerLink]=\"['/', menuItem.state]\" *ngIf=\"menuItem.type === 'link'\">\n      <span class=\"menu-name\">{{menuItem.name}}</span>\n      <span *ngIf=\"menuItem.label\"\n            class=\"badge menu-label bg-{{ menuItem.label.color }}\">{{ menuItem.label.value }}</span>\n      <span *ngIf=\"menuItem.badge\"\n            class=\"badge menu-badge bg-{{ menuItem.badge.color }}\">{{ menuItem.badge.value }}</span>\n    </a>\n    <a mat-button [href]=\"menuItem.state\" *ngIf=\"menuItem.type === 'extLink'\">\n      <span class=\"menu-name\">{{menuItem.name}}</span>\n      <span *ngIf=\"menuItem.label\"\n            class=\"badge menu-label bg-{{ menuItem.label.color }}\">{{ menuItem.label.value }}</span>\n      <span *ngIf=\"menuItem.badge\"\n            class=\"badge menu-badge bg-{{ menuItem.badge.color }}\">{{ menuItem.badge.value }}</span>\n    </a>\n    <a mat-button [href]=\"menuItem.state\" target=\"_blank\" *ngIf=\"menuItem.type === 'extTabLink'\">\n      <span class=\"menu-name\">{{menuItem.name}}</span>\n      <span *ngIf=\"menuItem.label\"\n            class=\"badge menu-label bg-{{ menuItem.label.color }}\">{{ menuItem.label.value }}</span>\n      <span *ngIf=\"menuItem.badge\"\n            class=\"badge menu-badge bg-{{ menuItem.badge.color }}\">{{ menuItem.badge.value }}</span>\n    </a>\n    <!-- level 1 -->\n    <button mat-button *ngIf=\"menuItem.type === 'sub'\" [matMenuTriggerFor]=\"menulevel1\">\n      <span class=\"menu-name\">{{menuItem.name}}</span>\n      <span *ngIf=\"menuItem.label\"\n            class=\"badge menu-label bg-{{ menuItem.label.color }}\">{{ menuItem.label.value }}</span>\n      <span *ngIf=\"menuItem.badge\"\n            class=\"badge menu-badge bg-{{ menuItem.badge.color }}\">{{ menuItem.badge.value }}</span>\n      <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\n    </button>\n    <mat-menu #menulevel1=\"matMenu\">\n      <ng-container *ngFor=\"let childLvl1 of menuItem.children\">\n\n        <a mat-menu-item [routerLink]=\"['/', menuItem.state, childLvl1.state]\"\n           *ngIf=\"childLvl1.type === 'link'\">{{childLvl1.name}}</a>\n        <a mat-menu-item [href]=\"childLvl1.state\"\n           *ngIf=\"childLvl1.type === 'extLink'\">{{childLvl1.name}}</a>\n        <a mat-menu-item [href]=\"childLvl1.state\" target=\"_blank\"\n           *ngIf=\"childLvl1.type === 'extTabLink'\">{{childLvl1.name}}</a>\n        <!-- level 2 -->\n        <button mat-menu-item *ngIf=\"childLvl1.type === 'sub'\"\n                [matMenuTriggerFor]=\"menulevel2\">{{ childLvl1.name }}</button>\n        <mat-menu #menulevel2=\"matMenu\">\n          <ng-container *ngFor=\"let childLvl2 of childLvl1.children\">\n\n            <a mat-menu-item\n               [routerLink]=\"filterStates(['/', menuItem.state, childLvl1.state, childLvl2.state])\"\n               *ngIf=\"childLvl2.type === 'link'\">{{childLvl2.name}}</a>\n            <a mat-menu-item [href]=\"childLvl2.state\"\n               *ngIf=\"childLvl2.type === 'extLink'\">{{childLvl2.name}}</a>\n            <a mat-menu-item [href]=\"childLvl2.state\" target=\"_blank\"\n               *ngIf=\"childLvl2.type === 'extTabLink'\">{{childLvl1.name}}</a>\n\n          </ng-container>\n        </mat-menu>\n      </ng-container>\n    </mat-menu>\n\n  </ng-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/auth-layout/auth-layout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/auth-layout/auth-layout.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"matero-auth-container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");



let AppComponent = class AppComponent {
    constructor(preloader) {
        this.preloader = preloader;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.preloader.hide();
    }
};
AppComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["PreloaderService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["PreloaderService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: StartupServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return StartupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");












function StartupServiceFactory(startupService) {
    return () => startupService.load();
}


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"],
            _routes_routes_module__WEBPACK_IMPORTED_MODULE_8__["RoutesModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_11__["FormlyModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core__WEBPACK_IMPORTED_MODULE_10__["DefaultInterceptor"], multi: true },
            _core__WEBPACK_IMPORTED_MODULE_10__["StartupService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: StartupServiceFactory,
                deps: [_core__WEBPACK_IMPORTED_MODULE_10__["StartupService"]],
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");




let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_3__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: DefaultInterceptor, HttpService, MenuService, SettingsService, StartupService, PreloaderService, defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interceptors_default_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/default.interceptor */ "./src/app/core/interceptors/default.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return _interceptors_default_interceptor__WEBPACK_IMPORTED_MODULE_0__["DefaultInterceptor"]; });

/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/http.service */ "./src/app/core/services/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]; });

/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/menu.service */ "./src/app/core/services/menu.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return _services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]; });

/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/core/services/settings.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]; });

/* harmony import */ var _services_startup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/startup.service */ "./src/app/core/services/startup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return _services_startup_service__WEBPACK_IMPORTED_MODULE_4__["StartupService"]; });

/* harmony import */ var _services_preloader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/preloader.service */ "./src/app/core/services/preloader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreloaderService", function() { return _services_preloader_service__WEBPACK_IMPORTED_MODULE_5__["PreloaderService"]; });

/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ "./src/app/core/settings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _settings__WEBPACK_IMPORTED_MODULE_6__["defaults"]; });










/***/ }),

/***/ "./src/app/core/interceptors/default.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/default.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return DefaultInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




/** Pass untouched request through to the next request handler. */
let DefaultInterceptor = class DefaultInterceptor {
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((event) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
        }));
    }
};
DefaultInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DefaultInterceptor);



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/core/services/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HttpService = class HttpService {
};
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], HttpService);



/***/ }),

/***/ "./src/app/core/services/menu.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/menu.service.ts ***!
  \***********************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuService = class MenuService {
    constructor() {
        this.menu = [];
    }
    getAll() {
        return this.menu;
    }
    set(menu) {
        this.menu = this.menu.concat(menu);
        return this.menu;
    }
    add(menu) {
        this.menu.push(menu);
    }
    getMenuItemName(stateArr) {
        return this.getMenuLevel(stateArr)[stateArr.length - 1];
    }
    // TODO:
    getMenuLevel(stateArr) {
        const tmpArr = [];
        this.menu.map(item => {
            if (item.state === stateArr[0]) {
                tmpArr.push(item.name);
                // Level1
                if (item.children && item.children.length) {
                    item.children.forEach(itemlvl1 => {
                        if (stateArr[1] && itemlvl1.state === stateArr[1]) {
                            tmpArr.push(itemlvl1.name);
                            // Level2
                            if (itemlvl1.children && itemlvl1.children.length) {
                                itemlvl1.children.forEach(itemlvl2 => {
                                    if (stateArr[2] && itemlvl2.state === stateArr[2]) {
                                        tmpArr.push(itemlvl2.name);
                                    }
                                });
                            }
                        }
                        else if (stateArr[1]) {
                            // Level2
                            if (itemlvl1.children && itemlvl1.children.length) {
                                itemlvl1.children.forEach(itemlvl2 => {
                                    if (itemlvl2.state === stateArr[1]) {
                                        tmpArr.push(itemlvl1.name, itemlvl2.name);
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
        return tmpArr;
    }
};
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MenuService);



/***/ }),

/***/ "./src/app/core/services/preloader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/preloader.service.ts ***!
  \****************************************************/
/*! exports provided: PreloaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderService", function() { return PreloaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreloaderService = class PreloaderService {
    constructor() {
        this.selector = 'globalLoader';
    }
    getElement() {
        return document.getElementById(this.selector);
    }
    hide() {
        const el = this.getElement();
        if (el) {
            el.addEventListener('transitionend', () => {
                el.className = 'global-loader-hidden';
            });
            if (!el.className.includes('global-loader-hidden')) {
                el.className += ' global-loader-fade-in';
            }
        }
    }
};
PreloaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PreloaderService);



/***/ }),

/***/ "./src/app/core/services/settings.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/settings.service.ts ***!
  \***************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings */ "./src/app/core/settings.ts");




let SettingsService = class SettingsService {
    constructor() {
        this.notice$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.options = _settings__WEBPACK_IMPORTED_MODULE_3__["defaults"];
    }
    get notice() {
        return this.notice$.asObservable();
    }
    setLayout(options) {
        this.options = Object.assign(_settings__WEBPACK_IMPORTED_MODULE_3__["defaults"], options);
        return this.options;
    }
    setNavState(type, value) {
        this.notice$.next({ type, value });
    }
    getOptions() {
        return this.options;
    }
};
SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SettingsService);



/***/ }),

/***/ "./src/app/core/services/startup.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/startup.service.ts ***!
  \**************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.service */ "./src/app/core/services/menu.service.ts");





let StartupService = class StartupService {
    constructor(menuService, http) {
        this.menuService = menuService;
        this.http = http;
    }
    load() {
        return new Promise((resolve, reject) => {
            this.http
                .get('assets/data/menu.json?_t=' + Date.now())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(res => {
                resolve();
                return res;
            }))
                .subscribe((res) => {
                this.menuService.set(res.menu);
            }, () => { }, () => {
                resolve();
            });
        });
    }
};
StartupService.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StartupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StartupService);



/***/ }),

/***/ "./src/app/core/settings.ts":
/*!**********************************!*\
  !*** ./src/app/core/settings.ts ***!
  \**********************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
const defaults = {
    navPos: 'side',
    theme: 'light',
    dir: 'ltr',
    showHeader: true,
    headerPos: 'fixed',
    showUserPanel: true,
    sidenavOpened: true,
    sidenavCollapsed: false,
};


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        ],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/routes/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboard_srevice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.srevice */ "./src/app/routes/dashboard/dashboard.srevice.ts");



let DashboardComponent = class DashboardComponent {
    constructor(dashboardSrv, ngZone, cdr) {
        this.dashboardSrv = dashboardSrv;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = this.dashboardSrv.getData();
        this.messages = this.dashboardSrv.getMessages();
        this.charts = this.dashboardSrv.getCharts();
        this.chart1 = null;
        this.chart2 = null;
        this.stats = this.dashboardSrv.getStats();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => this.initChart());
    }
    ngOnDestroy() {
        if (this.chart1) {
            this.chart1.destroy();
        }
        if (this.chart2) {
            this.chart2.destroy();
        }
    }
    initChart() {
        this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
        this.chart1.render();
        this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
        this.chart2.render();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _dashboard_srevice__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/dashboard/dashboard.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        providers: [_dashboard_srevice__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]],
        styles: ["\n      .mat-raised-button {\n        margin-right: 8px;\n        margin-top: 8px;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_srevice__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/routes/dashboard/dashboard.srevice.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.srevice.ts ***!
  \*******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
const MESSAGES = [
    {
        img: 'assets/images/avatars/avatar-1.jpg',
        subject: 'Hydrogen',
        content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
    },
    {
        img: 'assets/images/avatars/avatar-2.jpg',
        subject: 'Helium',
        content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
    },
    {
        img: 'assets/images/avatars/avatar-3.jpg',
        subject: 'Lithium',
        content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
    },
    {
        img: 'assets/images/avatars/avatar-4.jpg',
        subject: 'Beryllium',
        content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
    },
    {
        img: 'assets/images/avatars/avatar-6.jpg',
        subject: 'Boron',
        content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
    },
];
let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
        this.stats = [
            {
                title: 'Total Sales',
                amount: '180,200',
                progress: {
                    value: 50,
                },
                color: 'bg-indigo-500',
            },
            {
                title: 'Revenue',
                amount: '70,205',
                progress: {
                    value: 70,
                },
                color: 'bg-blue-500',
            },
            {
                title: 'Traffic',
                amount: '1,291,922',
                progress: {
                    value: 80,
                },
                color: 'bg-green-500',
            },
            {
                title: 'New User',
                amount: '1,922',
                progress: {
                    value: 40,
                },
                color: 'bg-teal-500',
            },
        ];
        this.charts = [
            {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: false,
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                },
                series: [
                    {
                        name: 'UV',
                        data: [31, 40, 28, 51, 42, 109, 100],
                    },
                    {
                        name: 'Download',
                        data: [11, 32, 45, 32, 34, 52, 41],
                    },
                ],
                xaxis: {
                    type: 'datetime',
                    categories: [
                        '2019-11-24T00:00:00',
                        '2019-11-24T01:30:00',
                        '2019-11-24T02:30:00',
                        '2019-11-24T03:30:00',
                        '2019-11-24T04:30:00',
                        '2019-11-24T05:30:00',
                        '2019-11-24T06:30:00',
                    ],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm',
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                },
            },
            {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                series: [
                    {
                        name: 'Weekly Revenue',
                        data: [20, 100, 40, 30, 50, 80, 33],
                    },
                ],
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                plotOptions: {
                    radar: {
                        size: 140,
                        polygons: {
                            strokeColor: '#e9e9e9',
                            fill: {
                                colors: ['#f8f8f8', '#fff'],
                            },
                        },
                    },
                },
                colors: ['#FF4560'],
                markers: {
                    size: 4,
                    colors: ['#fff'],
                    strokeColor: '#FF4560',
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: (val) => {
                            return val;
                        },
                    },
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: (val, i) => {
                            if (i % 2 === 0) {
                                return val;
                            }
                            else {
                                return '';
                            }
                        },
                    },
                },
            },
        ];
    }
    getData() {
        return ELEMENT_DATA;
    }
    getMessages() {
        return MESSAGES;
    }
    getCharts() {
        return this.charts;
    }
    getStats() {
        return this.stats;
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DashboardService);



/***/ }),

/***/ "./src/app/routes/routes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RoutesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesRoutingModule", function() { return RoutesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _theme_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/admin-layout/admin-layout.component */ "./src/app/theme/admin-layout/admin-layout.component.ts");
/* harmony import */ var _theme_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/auth-layout/auth-layout.component */ "./src/app/theme/auth-layout/auth-layout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/routes/dashboard/dashboard.component.ts");
/* harmony import */ var _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sessions/login/login.component */ "./src/app/routes/sessions/login/login.component.ts");
/* harmony import */ var _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sessions/register/register.component */ "./src/app/routes/sessions/register/register.component.ts");









const routes = [
    {
        path: '',
        component: _theme_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                data: { title: 'Dashboard', titleI18n: 'dashboard' },
            },
            {
                path: 'design',
                loadChildren: () => Promise.all(/*! import() | design-design-module */[__webpack_require__.e("default~design-design-module~extensions-extensions-module~helpers-helpers-module~media-media-module~~108f0a1f"), __webpack_require__.e("design-design-module")]).then(__webpack_require__.bind(null, /*! ./design/design.module */ "./src/app/routes/design/design.module.ts")).then(m => m.DesignModule),
                data: { title: 'Design', titleI18n: 'design' },
            },
            {
                path: 'material',
                loadChildren: () => __webpack_require__.e(/*! import() | material-material-module */ "material-material-module").then(__webpack_require__.bind(null, /*! ./material/material.module */ "./src/app/routes/material/material.module.ts")).then(m => m.MaterialModule),
                data: { title: 'Material', titleI18n: 'material' },
            },
            {
                path: 'media',
                loadChildren: () => Promise.all(/*! import() | media-media-module */[__webpack_require__.e("default~design-design-module~extensions-extensions-module~helpers-helpers-module~media-media-module~~108f0a1f"), __webpack_require__.e("media-media-module")]).then(__webpack_require__.bind(null, /*! ./media/media.module */ "./src/app/routes/media/media.module.ts")).then(m => m.MediaModule),
                data: { title: 'Media', titleI18n: 'media' },
            },
            {
                path: 'forms',
                loadChildren: () => __webpack_require__.e(/*! import() | forms-forms-module */ "forms-forms-module").then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "./src/app/routes/forms/forms.module.ts")).then(m => m.FormsModule),
                data: { title: 'Forms', titleI18n: 'forms' },
            },
            {
                path: 'tables',
                loadChildren: () => Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~design-design-module~extensions-extensions-module~helpers-helpers-module~media-media-module~~108f0a1f"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "./src/app/routes/tables/tables.module.ts")).then(m => m.TablesModule),
                data: { title: 'Tables', titleI18n: 'tables' },
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/routes/profile/profile.module.ts")).then(m => m.ProfileModule),
                data: { title: 'Profile', titleI18n: 'profile' },
            },
            {
                path: 'sessions',
                loadChildren: () => __webpack_require__.e(/*! import() | sessions-sessions-module */ "sessions-sessions-module").then(__webpack_require__.bind(null, /*! ./sessions/sessions.module */ "./src/app/routes/sessions/sessions.module.ts")).then(m => m.SessionsModule),
                data: { title: 'Sessions', titleI18n: 'sessions' },
            },
            {
                path: 'helpers',
                loadChildren: () => Promise.all(/*! import() | helpers-helpers-module */[__webpack_require__.e("default~design-design-module~extensions-extensions-module~helpers-helpers-module~media-media-module~~108f0a1f"), __webpack_require__.e("helpers-helpers-module")]).then(__webpack_require__.bind(null, /*! ./helpers/helpers.module */ "./src/app/routes/helpers/helpers.module.ts")).then(m => m.HelpersModule),
            },
            {
                path: 'extensions',
                loadChildren: () => Promise.all(/*! import() | extensions-extensions-module */[__webpack_require__.e("default~design-design-module~extensions-extensions-module~helpers-helpers-module~media-media-module~~108f0a1f"), __webpack_require__.e("extensions-extensions-module")]).then(__webpack_require__.bind(null, /*! ./extensions/extensions.module */ "./src/app/routes/extensions/extensions.module.ts")).then(m => m.ExtensionsModule),
            },
        ],
    },
    {
        path: 'auth',
        component: _theme_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            { path: 'login', component: _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], data: { title: 'Login', titleI18n: 'login' } },
            {
                path: 'register',
                component: _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                data: { title: 'Register', titleI18n: 'register' },
            },
        ],
    },
    { path: '**', redirectTo: 'dashboard' },
];
let RoutesRoutingModule = class RoutesRoutingModule {
};
RoutesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                useHash: _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useHash,
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoutesRoutingModule);



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes-routing.module */ "./src/app/routes/routes-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/routes/dashboard/dashboard.component.ts");
/* harmony import */ var _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions/login/login.component */ "./src/app/routes/sessions/login/login.component.ts");
/* harmony import */ var _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessions/register/register.component */ "./src/app/routes/sessions/register/register.component.ts");







const COMPONENTS = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _sessions_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _sessions_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]];
const COMPONENTS_DYNAMIC = [];
let RoutesModule = class RoutesModule {
};
RoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutesRoutingModule"]],
        declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
        entryComponents: COMPONENTS_DYNAMIC,
    })
], RoutesModule);



/***/ }),

/***/ "./src/app/routes/sessions/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/sessions/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.reactiveForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() { }
    login() {
        this.router.navigateByUrl('/');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/sessions/login/login.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/routes/sessions/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/sessions/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RegisterComponent = class RegisterComponent {
    constructor(fb) {
        this.fb = fb;
        this.confirmValidator = (control) => {
            if (!control.value) {
                return { error: true, required: true };
            }
            else if (control.value !== this.reactiveForm.controls.password.value) {
                return { error: true, confirm: true };
            }
            return {};
        };
        this.reactiveForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: ['', [this.confirmValidator]],
        });
    }
    ngOnInit() { }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/sessions/register/register.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matero-breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-bottom: 1rem;\n  list-style: none;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n}\n\n.matero-breadcrumb-item {\n  line-height: 18px;\n  text-transform: capitalize;\n}\n\n.matero-breadcrumb-item > a {\n  color: currentColor;\n}\n\n.matero-breadcrumb-item > a:hover {\n  text-decoration: underline;\n}\n\n.matero-breadcrumb-item > .chevron {\n  height: 18px;\n  width: 18px;\n  font-size: 18px;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBRENJO0VBQ0UsMEJBQUE7QUNDTjs7QURHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcm8tYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBmb250LXNpemU6IC44NzVyZW07XG59XG5cbi5tYXRlcm8tYnJlYWRjcnVtYi1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gID4gYSB7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG5cbiAgPiAuY2hldnJvbiB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG59XG4iLCIubWF0ZXJvLWJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5tYXRlcm8tYnJlYWRjcnVtYi1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1hdGVyby1icmVhZGNydW1iLWl0ZW0gPiBhIHtcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cbi5tYXRlcm8tYnJlYWRjcnVtYi1pdGVtID4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLm1hdGVyby1icmVhZGNydW1iLWl0ZW0gPiAuY2hldnJvbiB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");




let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(router, menuService) {
        this.router = router;
        this.menuService = menuService;
        this.nav = [];
    }
    ngOnInit() {
        this.nav = Array.isArray(this.nav) ? this.nav : [];
        if (this.nav.length === 0) {
            this.genBreadcrumb();
        }
    }
    trackByNavlink(index, navlink) {
        return navlink;
    }
    genBreadcrumb() {
        const states = this.router.url.slice(1).split('/');
        this.nav = this.menuService.getMenuLevel(states);
        this.nav.unshift('home');
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BreadcrumbComponent.prototype, "nav", void 0);
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'breadcrumb',
        template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/shared/components/error-code/error-code.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/error-code/error-code.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matero-error-code {\n  padding: 20px 0;\n  font-size: 150px;\n  color: #212121;\n  text-shadow: 2.1213203436px 2.1213203436px 0 rgba(0, 0, 0, 0.028575), 4.2426406871px 4.2426406871px 0 rgba(0, 0, 0, 0.02715), 6.3639610307px 6.3639610307px 0 rgba(0, 0, 0, 0.025725), 8.4852813742px 8.4852813742px 0 rgba(0, 0, 0, 0.0243), 10.6066017178px 10.6066017178px 0 rgba(0, 0, 0, 0.022875), 12.7279220614px 12.7279220614px 0 rgba(0, 0, 0, 0.02145), 14.8492424049px 14.8492424049px 0 rgba(0, 0, 0, 0.020025), 16.9705627485px 16.9705627485px 0 rgba(0, 0, 0, 0.0186), 19.091883092px 19.091883092px 0 rgba(0, 0, 0, 0.017175), 21.2132034356px 21.2132034356px 0 rgba(0, 0, 0, 0.01575), 23.3345237792px 23.3345237792px 0 rgba(0, 0, 0, 0.014325), 25.4558441227px 25.4558441227px 0 rgba(0, 0, 0, 0.0129), 27.5771644663px 27.5771644663px 0 rgba(0, 0, 0, 0.011475), 29.6984848098px 29.6984848098px 0 rgba(0, 0, 0, 0.01005), 31.8198051534px 31.8198051534px 0 rgba(0, 0, 0, 0.008625), 33.941125497px 33.941125497px 0 rgba(0, 0, 0, 0.0072), 36.0624458405px 36.0624458405px 0 rgba(0, 0, 0, 0.005775), 38.1837661841px 38.1837661841px 0 rgba(0, 0, 0, 0.00435), 40.3050865276px 40.3050865276px 0 rgba(0, 0, 0, 0.002925), 42.4264068712px 42.4264068712px 0 rgba(0, 0, 0, 0.0015);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci1jb2RlL2Vycm9yLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yLWNvZGUvZXJyb3ItY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0b0NBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yLWNvZGUvZXJyb3ItY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9mdW5jdGlvbnMnO1xuXG4ubWF0ZXJvLWVycm9yLWNvZGUge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICB0ZXh0LXNoYWRvdzogbG9uZy1zaGFkb3coXG4gICAgJGRpcmVjdGlvbjogNDVkZWcsXG4gICAgJGxlbmd0aDogNjBweCxcbiAgICAkY29sb3I6IHJnYmEoMCwgMCwgMCwgLjAzKSxcbiAgICAkZmFkZTogcmdiYSgwLCAwLCAwLCAuMDAxNSksXG4gICAgJHNoYWRvdy1jb3VudDogMjBcbiAgKTtcbn1cbiIsIi5tYXRlcm8tZXJyb3ItY29kZSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIHRleHQtc2hhZG93OiAyLjEyMTMyMDM0MzZweCAyLjEyMTMyMDM0MzZweCAwIHJnYmEoMCwgMCwgMCwgMC4wMjg1NzUpLCA0LjI0MjY0MDY4NzFweCA0LjI0MjY0MDY4NzFweCAwIHJnYmEoMCwgMCwgMCwgMC4wMjcxNSksIDYuMzYzOTYxMDMwN3B4IDYuMzYzOTYxMDMwN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjAyNTcyNSksIDguNDg1MjgxMzc0MnB4IDguNDg1MjgxMzc0MnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAyNDMpLCAxMC42MDY2MDE3MTc4cHggMTAuNjA2NjAxNzE3OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjAyMjg3NSksIDEyLjcyNzkyMjA2MTRweCAxMi43Mjc5MjIwNjE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDIxNDUpLCAxNC44NDkyNDI0MDQ5cHggMTQuODQ5MjQyNDA0OXB4IDAgcmdiYSgwLCAwLCAwLCAwLjAyMDAyNSksIDE2Ljk3MDU2Mjc0ODVweCAxNi45NzA1NjI3NDg1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDE4NiksIDE5LjA5MTg4MzA5MnB4IDE5LjA5MTg4MzA5MnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAxNzE3NSksIDIxLjIxMzIwMzQzNTZweCAyMS4yMTMyMDM0MzU2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDE1NzUpLCAyMy4zMzQ1MjM3NzkycHggMjMuMzM0NTIzNzc5MnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAxNDMyNSksIDI1LjQ1NTg0NDEyMjdweCAyNS40NTU4NDQxMjI3cHggMCByZ2JhKDAsIDAsIDAsIDAuMDEyOSksIDI3LjU3NzE2NDQ2NjNweCAyNy41NzcxNjQ0NjYzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDExNDc1KSwgMjkuNjk4NDg0ODA5OHB4IDI5LjY5ODQ4NDgwOThweCAwIHJnYmEoMCwgMCwgMCwgMC4wMTAwNSksIDMxLjgxOTgwNTE1MzRweCAzMS44MTk4MDUxNTM0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDA4NjI1KSwgMzMuOTQxMTI1NDk3cHggMzMuOTQxMTI1NDk3cHggMCByZ2JhKDAsIDAsIDAsIDAuMDA3MiksIDM2LjA2MjQ0NTg0MDVweCAzNi4wNjI0NDU4NDA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDA1Nzc1KSwgMzguMTgzNzY2MTg0MXB4IDM4LjE4Mzc2NjE4NDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wMDQzNSksIDQwLjMwNTA4NjUyNzZweCA0MC4zMDUwODY1Mjc2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDAyOTI1KSwgNDIuNDI2NDA2ODcxMnB4IDQyLjQyNjQwNjg3MTJweCAwIHJnYmEoMCwgMCwgMCwgMC4wMDE1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/error-code/error-code.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/error-code/error-code.component.ts ***!
  \**********************************************************************/
/*! exports provided: ErrorCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCodeComponent", function() { return ErrorCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorCodeComponent = class ErrorCodeComponent {
    constructor() {
        this.code = '';
        this.title = '';
        this.message = '';
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ErrorCodeComponent.prototype, "code", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ErrorCodeComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ErrorCodeComponent.prototype, "message", void 0);
ErrorCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error-code',
        template: __webpack_require__(/*! raw-loader!./error-code.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/error-code/error-code.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./error-code.component.scss */ "./src/app/shared/components/error-code/error-code.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorCodeComponent);



/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matero-page-header {\n  display: block;\n  padding: 16px;\n  margin: -16px -16px 16px;\n  background-color: #3f51b5;\n  color: #fff;\n}\n.matero-page-header .matero-breadcrumb {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n.matero-page-title {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FER0E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcm8tcGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZjtcblxuICAubWF0ZXJvLWJyZWFkY3J1bWIge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi5tYXRlcm8tcGFnZS10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiLm1hdGVyby1wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1hdGVyby1wYWdlLWhlYWRlciAubWF0ZXJvLWJyZWFkY3J1bWIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYXRlcm8tcGFnZS10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PageHeaderComponent = class PageHeaderComponent {
    constructor(router, menuService) {
        this.router = router;
        this.menuService = menuService;
        this.title = '';
        this.subtitle = '';
        this.nav = [];
        this.showBreadCrumb = true;
    }
    ngOnInit() {
        this.nav = Array.isArray(this.nav) ? this.nav : [];
        if (this.nav.length === 0) {
            this.genBreadcrumb();
        }
        this.title = this.nav[this.nav.length - 1];
    }
    genBreadcrumb() {
        const states = this.router.url.slice(1).split('/');
        this.nav = this.menuService.getMenuLevel(states);
        this.nav.unshift('home');
    }
};
PageHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PageHeaderComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PageHeaderComponent.prototype, "subtitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], PageHeaderComponent.prototype, "nav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PageHeaderComponent.prototype, "showBreadCrumb", void 0);
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-header',
        host: {
            class: 'matero-page-header',
        },
        template: __webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-header/page-header.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/components/page-header/page-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm2015/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-progressbar/router */ "./node_modules/@ngx-progressbar/router/fesm2015/ngx-progressbar-router.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-formly/material */ "./node_modules/@ngx-formly/material/fesm2015/ngx-formly-material.js");
/* harmony import */ var _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-matero/extensions */ "./node_modules/@ng-matero/extensions/fesm2015/extensions.js");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/error-code/error-code.component */ "./src/app/shared/components/error-code/error-code.component.ts");
















const THIRD_MODULES = [
    _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
    _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_7__["NgProgressModule"],
    _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_8__["NgProgressRouterModule"],
    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
    _ngx_formly_core__WEBPACK_IMPORTED_MODULE_10__["FormlyModule"],
    _ngx_formly_material__WEBPACK_IMPORTED_MODULE_11__["FormlyMaterialModule"],
    _ng_matero_extensions__WEBPACK_IMPORTED_MODULE_12__["MaterialExtensionsModule"],
];
const COMPONENTS = [_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_14__["PageHeaderComponent"], _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_15__["ErrorCodeComponent"]];
const COMPONENTS_DYNAMIC = [];
const DIRECTIVES = [];
const PIPES = [];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ...THIRD_MODULES],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ...THIRD_MODULES,
            ...COMPONENTS,
            ...DIRECTIVES,
            ...PIPES,
        ],
        entryComponents: COMPONENTS_DYNAMIC,
    })
], SharedModule);



/***/ }),

/***/ "./src/app/theme/admin-layout/admin-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/admin-layout/admin-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");







const MOBILE_MEDIAQUERY = 'screen and (max-width: 599px)';
const TABLET_MEDIAQUERY = 'screen and (min-width: 600px) and (max-width: 959px)';
const MONITOR_MEDIAQUERY = 'screen and (min-width: 960px)';
let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(router, breakpointObserver, overlay, settings) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.overlay = overlay;
        this.settings = settings;
        this.options = this.settings.getOptions();
        this.isMobileScreen = false;
        this.contentWidthFix = true;
        this.collapsedWidthFix = true;
        // Set dir attr on body
        document.body.dir = this.options.dir;
        this.layoutChanges = this.breakpointObserver
            .observe([MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY, MONITOR_MEDIAQUERY])
            .subscribe(state => {
            // SidenavOpened must be reset true when layout changes
            this.options.sidenavOpened = true;
            this.isMobileScreen = state.breakpoints[MOBILE_MEDIAQUERY];
            this.options.sidenavCollapsed = state.breakpoints[TABLET_MEDIAQUERY];
            this.contentWidthFix = state.breakpoints[MONITOR_MEDIAQUERY];
        });
        // TODO: Scroll top to container
        this.router.events.subscribe(evt => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.content.scrollTo({ top: 0 });
            }
        });
    }
    get isOver() {
        return this.isMobileScreen;
    }
    get isContentWidthFix() {
        return (this.contentWidthFix &&
            this.options.navPos === 'side' &&
            this.options.sidenavOpened &&
            !this.isOver);
    }
    get isCollapsedWidthFix() {
        return (this.collapsedWidthFix &&
            (this.options.navPos === 'top' || (this.options.sidenavOpened && this.isOver)));
    }
    // Demo purposes only
    get themeDark() {
        return this.options.theme === 'dark';
    }
    ngOnInit() {
        setTimeout(() => (this.contentWidthFix = this.collapsedWidthFix = false));
    }
    ngOnDestroy() {
        this.layoutChanges.unsubscribe();
    }
    toggleCollapsed() {
        this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
        this.resetCollapsedState();
    }
    resetCollapsedState(timer = 400) {
        // TODO: Trigger when transition end
        setTimeout(() => {
            this.settings.setNavState('collapsed', this.options.sidenavCollapsed);
        }, timer);
    }
    sidenavCloseStart() {
        this.contentWidthFix = false;
    }
    sidenavOpenedChange(isOpened) {
        this.options.sidenavOpened = isOpened;
        this.settings.setNavState('opened', isOpened);
        this.collapsedWidthFix = !this.isOver;
        this.resetCollapsedState();
    }
    // Demo purposes only
    receiveOptions(options) {
        this.options = options;
        this.setTheme(options);
        this.setBodyDir(options);
    }
    setTheme(options) {
        if (options.theme === 'dark') {
            this.overlay.getContainerElement().classList.add('theme-dark');
        }
        else {
            this.overlay.getContainerElement().classList.remove('theme-dark');
        }
    }
    setBodyDir(options) {
        if (options.dir === 'rtl') {
            document.body.dir = 'rtl';
        }
        else {
            document.body.dir = 'ltr';
        }
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"])
], AdminLayoutComponent.prototype, "sidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"])
], AdminLayoutComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.matero-content-width-fix'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminLayoutComponent.prototype, "isContentWidthFix", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.matero-sidenav-collapsed-fix'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminLayoutComponent.prototype, "isCollapsedWidthFix", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.theme-dark'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminLayoutComponent.prototype, "themeDark", null);
AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-layout',
        template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/admin-layout.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"],
        _core__WEBPACK_IMPORTED_MODULE_6__["SettingsService"]])
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/header/branding.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/admin-layout/header/branding.component.ts ***!
  \*****************************************************************/
/*! exports provided: BrandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandingComponent", function() { return BrandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BrandingComponent = class BrandingComponent {
};
BrandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-branding',
        template: `
    <a class="matero-branding" href="#/">
      <img src="./assets/images/9cd1db3b-07e8-40a0-a172-6247c320f8b6_200x200.png" class="matero-branding-logo-expanded" alt="" />
      <span class="matero-branding-name">PEDI</span>
    </a>
  `,
    })
], BrandingComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/admin-layout/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let HeaderComponent = class HeaderComponent {
    constructor() {
        this.showToggle = true;
        this.showBranding = false;
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleSidenavNotice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get screenfull() {
        return screenfull__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() { }
    // TODO:
    toggleFullscreen() {
        if (this.screenfull.enabled) {
            this.screenfull.toggle();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "showToggle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "showBranding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "toggleSidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "toggleSidenavNotice", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/header/header.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/header/notification.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/admin-layout/header/notification.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationComponent = class NotificationComponent {
    constructor() {
        this.messages = ['Server Error Reports', 'Server Error Reports', 'Server Error Reports'];
    }
};
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: `
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>notifications</mat-icon>
      <span class="badge bg-red-500">5</span>
    </button>

    <mat-menu #menu="matMenu">
      <mat-nav-list>
        <mat-list-item *ngFor="let message of messages">
          <a matLine href="#">{{ message }}</a>
          <button mat-icon-button>
            <mat-icon>info</mat-icon>
          </button>
        </mat-list-item>
      </mat-nav-list>
    </mat-menu>
  `,
    })
], NotificationComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/header/user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/admin-layout/header/user.component.ts ***!
  \*************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: `
    <a mat-button href="javascript:void(0)" [matMenuTriggerFor]="menu">
      <img
        class="matero-user-avatar r-full align-middle"
        src="assets/images/23243761.jpg"
        width="24"
        alt="avatar"
      />
      <span class="align-middle">Peyman</span>
    </a>

    <mat-menu #menu="matMenu">
      <a routerLink="/profile/overview" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>Profile</span>
      </a>
      <a routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </a>
      <a routerLink="/auth/login" mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>Logout</span>
      </a>
    </mat-menu>
  `,
    })
], UserComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/sidebar-notice/sidebar-notice.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/admin-layout/sidebar-notice/sidebar-notice.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SidebarNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNoticeComponent", function() { return SidebarNoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarNoticeComponent = class SidebarNoticeComponent {
};
SidebarNoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar-notice',
        template: __webpack_require__(/*! raw-loader!./sidebar-notice.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/sidebar-notice/sidebar-notice.component.html"),
    })
], SidebarNoticeComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/sidebar/sidebar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/admin-layout/sidebar/sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() {
        this.showToggle = true;
        this.showUser = true;
        this.showHeader = true;
        this.toggleChecked = false;
        this.toggleCollapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarComponent.prototype, "showToggle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarComponent.prototype, "showUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarComponent.prototype, "showHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarComponent.prototype, "toggleChecked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidebarComponent.prototype, "toggleCollapsed", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/sidebar/sidebar.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SidebarComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/sidebar/user-panel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/admin-layout/sidebar/user-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserPanelComponent = class UserPanelComponent {
};
UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-panel',
        template: `
    <div
      class="matero-user-panel p-y-16 b-b-1"
      fxLayout="column"
      fxLayoutAlign="center center"
    >
      <img
        class="matero-user-panel-avatar m-b-8 r-full"
        src="assets/images/23243761.jpg"
        alt="avatar"
        width="64"
      />
      <h4 class="matero-user-panel-name m-t-0 m-b-8 f-w-400">Peyman</h4>
      <h5 class="matero-user-panel-email m-t-0 m-b-8 f-w-400">peyman.iravani@gmail.com</h5>
      <div class="matero-user-panel-icons text-nowrap">
        <a routerLink="/profile/overview" mat-icon-button>
          <mat-icon class="icon-18">account_circle</mat-icon>
        </a>
        <a routerLink="/profile/settings" mat-icon-button>
          <mat-icon class="icon-18">settings</mat-icon>
        </a>
        <a routerLink="/auth/login" mat-icon-button>
          <mat-icon class="icon-18">exit_to_app</mat-icon>
        </a>
      </div>
    </div>
  `,
    })
], UserPanelComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/sidemenu/accordion.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/admin-layout/sidemenu/accordion.directive.ts ***!
  \********************************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AccordionDirective = class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        // Fix: `ERROR Error: ExpressionChangedAfterItHasBeenCheckedError:
        // Expression has changed after it was checked`.
        setTimeout(() => this.checkOpenLinks());
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe(e => this.checkOpenLinks());
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    closeOtherLinks(openLink) {
        this.navlinks.forEach((link) => {
            if (link !== openLink) {
                link.open = false;
            }
        });
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
};
AccordionDirective.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AccordionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[navAccordion]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AccordionDirective);



/***/ }),

/***/ "./src/app/theme/admin-layout/sidemenu/accordionanchor.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/admin-layout/sidemenu/accordionanchor.directive.ts ***!
  \**************************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/theme/admin-layout/sidemenu/accordionlink.directive.ts");



let AccordionAnchorDirective = class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick() {
        this.navlink.toggle();
    }
};
AccordionAnchorDirective.ctorParameters = () => [
    { type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[navAccordionToggle]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]])
], AccordionAnchorDirective);



/***/ }),

/***/ "./src/app/theme/admin-layout/sidemenu/accordionlink.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/admin-layout/sidemenu/accordionlink.directive.ts ***!
  \************************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/theme/admin-layout/sidemenu/accordion.directive.ts");



let AccordionLinkDirective = class AccordionLinkDirective {
    constructor(nav) {
        this.OPEN = false;
        this.nav = nav;
    }
    get open() {
        return this.OPEN;
    }
    set open(value) {
        this.OPEN = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.open = !this.open;
    }
};
AccordionLinkDirective.ctorParameters = () => [
    { type: _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "open", null);
AccordionLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[navAccordionLink]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]])
], AccordionLinkDirective);



/***/ }),

/***/ "./src/app/theme/admin-layout/sidemenu/sidemenu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/admin-layout/sidemenu/sidemenu.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");



let SidemenuComponent = class SidemenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
        // NOTE: Ripple effect make page flashing on mobile
        this.ripple = false;
        this.menus = this.menuService.getAll();
    }
    // Delete empty value in array
    filterStates(states) {
        return states.filter(item => item && item.trim());
    }
};
SidemenuComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SidemenuComponent.prototype, "ripple", void 0);
SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidemenu',
        template: __webpack_require__(/*! raw-loader!./sidemenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/sidemenu/sidemenu.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
], SidemenuComponent);



/***/ }),

/***/ "./src/app/theme/admin-layout/topmenu/topmenu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/admin-layout/topmenu/topmenu.component.ts ***!
  \*****************************************************************/
/*! exports provided: TopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopmenuComponent", function() { return TopmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");



let TopmenuComponent = class TopmenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.menus = this.menuService.getAll();
    }
    ngOnInit() { }
    // Delete empty value in array
    filterStates(states) {
        return states.filter(item => item && item.trim());
    }
};
TopmenuComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
];
TopmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topmenu',
        template: __webpack_require__(/*! raw-loader!./topmenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/admin-layout/topmenu/topmenu.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
], TopmenuComponent);



/***/ }),

/***/ "./src/app/theme/auth-layout/auth-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/auth-layout/auth-layout.component.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthLayoutComponent = class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/auth-layout/auth-layout.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/theme/theme.module.ts":
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ "./src/app/theme/admin-layout/admin-layout.component.ts");
/* harmony import */ var _admin_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout/sidebar/sidebar.component */ "./src/app/theme/admin-layout/sidebar/sidebar.component.ts");
/* harmony import */ var _admin_layout_sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout/sidebar/user-panel.component */ "./src/app/theme/admin-layout/sidebar/user-panel.component.ts");
/* harmony import */ var _admin_layout_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-layout/sidemenu/sidemenu.component */ "./src/app/theme/admin-layout/sidemenu/sidemenu.component.ts");
/* harmony import */ var _admin_layout_sidemenu_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-layout/sidemenu/accordionanchor.directive */ "./src/app/theme/admin-layout/sidemenu/accordionanchor.directive.ts");
/* harmony import */ var _admin_layout_sidemenu_accordion_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-layout/sidemenu/accordion.directive */ "./src/app/theme/admin-layout/sidemenu/accordion.directive.ts");
/* harmony import */ var _admin_layout_sidemenu_accordionlink_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-layout/sidemenu/accordionlink.directive */ "./src/app/theme/admin-layout/sidemenu/accordionlink.directive.ts");
/* harmony import */ var _admin_layout_sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-layout/sidebar-notice/sidebar-notice.component */ "./src/app/theme/admin-layout/sidebar-notice/sidebar-notice.component.ts");
/* harmony import */ var _admin_layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-layout/header/header.component */ "./src/app/theme/admin-layout/header/header.component.ts");
/* harmony import */ var _admin_layout_header_branding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-layout/header/branding.component */ "./src/app/theme/admin-layout/header/branding.component.ts");
/* harmony import */ var _admin_layout_header_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-layout/header/notification.component */ "./src/app/theme/admin-layout/header/notification.component.ts");
/* harmony import */ var _admin_layout_header_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-layout/header/user.component */ "./src/app/theme/admin-layout/header/user.component.ts");
/* harmony import */ var _admin_layout_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-layout/topmenu/topmenu.component */ "./src/app/theme/admin-layout/topmenu/topmenu.component.ts");
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/theme/auth-layout/auth-layout.component.ts");

















let ThemeModule = class ThemeModule {
};
ThemeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
            _admin_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
            _admin_layout_sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_5__["UserPanelComponent"],
            _admin_layout_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_6__["SidemenuComponent"],
            _admin_layout_sidemenu_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_7__["AccordionAnchorDirective"],
            _admin_layout_sidemenu_accordion_directive__WEBPACK_IMPORTED_MODULE_8__["AccordionDirective"],
            _admin_layout_sidemenu_accordionlink_directive__WEBPACK_IMPORTED_MODULE_9__["AccordionLinkDirective"],
            _admin_layout_sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_10__["SidebarNoticeComponent"],
            _admin_layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _admin_layout_header_branding_component__WEBPACK_IMPORTED_MODULE_12__["BrandingComponent"],
            _admin_layout_header_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
            _admin_layout_header_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
            _admin_layout_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_15__["TopmenuComponent"],
            _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_16__["AuthLayoutComponent"],
        ],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
    })
], ThemeModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    SERVER_URL: '',
    production: false,
    useHash: true,
    hmr: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


const hmrBootstrap = (module, bootstrap) => {
    let ngModule;
    module.hot.accept();
    bootstrap().then(mod => (ngModule = mod));
    module.hot.dispose(() => {
        const appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
const bootstrap = () => Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().catch(err => console.log(err));
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eddie/Desktop/Angularprojects/Angualr_responsive_dashboard/Admin_dash/adminDash/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map