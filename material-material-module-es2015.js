(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-material-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/autocomplete/autocomplete.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/autocomplete/autocomplete.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Filtering and selection</h2>\n    <p>Select your favorite state</p>\n    <mat-form-field>\n      <mat-label>Search for a state</mat-label>\n      <input matInput\n             [matAutocomplete]=\"autocomplete\"\n             [(ngModel)]=\"value\"\n             (ngModelChange)=\"filteredStates = filter(value)\">\n      <mat-autocomplete #autocomplete=\"matAutocomplete\">\n        <mat-option *ngFor=\"let state of filteredStates\" [value]=\"state.name\">\n          <span>{{ state.name }}</span>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n\n    <p>Selected value: {{ value }}</p>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/badge/badge.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/badge/badge.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <p>\n    <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n  </p>\n\n  <p>\n    Button with a badge on the left\n    <button mat-raised-button color=\"primary\" matBadge=\"8\" matBadgePosition=\"before\"\n            matBadgeColor=\"accent\">\n      Action\n    </button>\n  </p>\n\n  <p>\n    Icon with a badge\n    <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n  </p>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/bottom-sheet/bottom-sheet.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/bottom-sheet/bottom-sheet.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <p>You have received a file called \"cat-picture.jpeg\".</p>\n  <button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/button-toggle/button-toggle.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/button-toggle/button-toggle.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n    <section>\n      <h2>Single button toggle</h2>\n      <mat-button-toggle>Yes</mat-button-toggle>\n    </section>\n\n    <section>\n      <h2>Button toggles with icons</h2>\n      <mat-button-toggle-group name=\"alignment\" aria-label=\"Alignments\">\n        <mat-button-toggle value=\"left\" aria-label=\"Align left\">\n          <mat-icon>format_align_left</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"center\" aria-label=\"Align center\">\n          <mat-icon>format_align_center</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"right\" aria-label=\"Align right\">\n          <mat-icon>format_align_right</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"justify\" aria-label=\"Align justify\">\n          <mat-icon>format_align_justify</mat-icon>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n    </section>\n\n    <section>\n      <h2>Multi-selection button toggle group</h2>\n      <mat-button-toggle-group multiple aria-label=\"Groceries\">\n        <mat-button-toggle>Flour</mat-button-toggle>\n        <mat-button-toggle>Eggs</mat-button-toggle>\n        <mat-button-toggle>Sugar</mat-button-toggle>\n        <mat-button-toggle>Milk</mat-button-toggle>\n      </mat-button-toggle-group>\n    </section>\n\n    <section>\n      <h2>Exclusive selection button toggle group</h2>\n      <mat-button-toggle-group name=\"pies\" [(ngModel)]=\"favoritePie\" aria-label=\"Pies\">\n        <mat-button-toggle *ngFor=\"let pie of pieOptions\" [value]=\"pie\">\n          {{pie}}\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n      <p>Your favorite type of pie is: {{favoritePie}}</p>\n    </section>\n\n    <section>\n      <h2>Disabled button toggle group</h2>\n      <mat-button-toggle-group [disabled]=\"true\" aria-label=\"Groceries\">\n        <mat-button-toggle>Flour</mat-button-toggle>\n        <mat-button-toggle>Eggs</mat-button-toggle>\n        <mat-button-toggle>Sugar</mat-button-toggle>\n        <mat-button-toggle>Milk</mat-button-toggle>\n      </mat-button-toggle-group>\n    </section>\n\n    <section>\n      <h2>Vertical button toggle group</h2>\n      <mat-button-toggle-group multiple [vertical]=\"true\" aria-label=\"Groceries\">\n        <mat-button-toggle>Flour</mat-button-toggle>\n        <mat-button-toggle>Eggs</mat-button-toggle>\n        <mat-button-toggle>Sugar</mat-button-toggle>\n        <mat-button-toggle>Milk</mat-button-toggle>\n      </mat-button-toggle-group>\n    </section>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/button/button.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/button/button.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <div class=\"demo-button\">\n    <section>\n      <h2>Button elements</h2>\n      <p>Click on the buttons to increase the button counter.</p>\n      <p>Current number of clicks: {{counter}}</p>\n      <button mat-button (click)=\"increase()\">Check</button>\n      <button mat-raised-button (click)=\"increase()\">Pitch</button>\n      <button mat-fab (click)=\"increase()\"\n              aria-label=\"Activate floating action style button to increase the button counter\">\n        <mat-icon>plus_one</mat-icon>\n      </button>\n      <button mat-mini-fab (click)=\"increase()\"\n              aria-label=\"Mini floating action button to increase the button counter by 1\">\n        <mat-icon>plus_one</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"increase()\"\n              aria-label=\"Icon button to increase the button counter by 1\">\n        <mat-icon>plus_one</mat-icon>\n      </button>\n    </section>\n\n    <section>\n      <h2>Anchor elements</h2>\n      <a href=\"http://www.google.com\" mat-button color=\"primary\">Google search</a>\n      <a href=\"https://www.youtube.com/\" mat-raised-button>YouTube</a>\n      <a href=\"http://www.google.com\" mat-fab\n         aria-label=\"Activate floating action style google search link\">\n        <mat-icon>search</mat-icon>\n      </a>\n      <a href=\"http://www.google.com\" mat-mini-fab\n         aria-label=\"Activate mini floating action style google search link\">\n        <mat-icon>search</mat-icon>\n      </a>\n      <a href=\"http://www.google.com\" mat-icon-button\n         aria-label=\"Activate icon style google search link\">\n        <mat-icon>search</mat-icon>\n      </a>\n    </section>\n\n    <section>\n      <h2>Buttons in different colors</h2>\n      <button mat-button color=\"primary\"\n              (click)=\"openSnackBar('Color is primary.')\">Primary</button>\n      <button mat-button color=\"accent\" (click)=\"openSnackBar('Color is accent.')\">Accent</button>\n      <button mat-button color=\"warn\" (click)=\"openSnackBar('Color is warn.')\">Warn</button>\n    </section>\n\n    <section>\n      <h2>Disabled button</h2>\n      <p>The following \"cancel\" button is disabled</p>\n      <button mat-button [disabled]=\"true\">Cancel</button>\n    </section>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/card/card.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/card/card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<section>\n  <h2>Dogs group</h2>\n  <p>Showing a card with a group of content.</p>\n  <mat-card class=\"demo-card\" role=\"group\">\n    <mat-card-content>\n      <p>Herding Group</p>\n      <p>Hound Group</p>\n      <p>Non-Sporting Group</p>\n      <p>Sporting Group</p>\n      <p>Terrier Group</p>\n      <p>Toy Group</p>\n      <p>Working Group</p>\n      <p>Foundation Stock Service</p>\n      <p>Miscellaneous Class</p>\n    </mat-card-content>\n  </mat-card>\n</section>\n\n<section>\n  <h2>Husky</h2>\n  <p>Showing a card with title only.</p>\n  <mat-card class=\"demo-card\">\n    Siberian Husky\n  </mat-card>\n</section>\n\n<section>\n  <h2>Malamute</h2>\n  <p>Showing a Card with title and subtitle.</p>\n  <mat-card class=\"demo-card\">\n    <mat-card-title>Alaskan Malamute</mat-card-title>\n    <mat-card-subtitle>Dog breed</mat-card-subtitle>\n  </mat-card>\n</section>\n\n\n<section>\n  <h2>German Shepherd</h2>\n  <p>Showing a card with title, subtitle, and a footer.</p>\n  <mat-card class=\"demo-card\">\n    <mat-card-subtitle>Dog breed</mat-card-subtitle>\n    <mat-card-title>German Shepherd</mat-card-title>\n    <mat-card-content>\n      The German Shepherd is a breed of medium to large-sized working dog that originated in\n      Germany. The breed's officially recognized name is German Shepherd Dog in the English\n      language. The breed is also known as the Alsatian in Britain and Ireland.\n    </mat-card-content>\n    <mat-card-footer>\n      People also search for Rottweiler, Siberian Husky, Labrador Retriever, Doberman Pinscher\n    </mat-card-footer>\n  </mat-card>\n</section>\n\n<section>\n  <h2>Dachshund</h2>\n  <p>Showing a card with title, subtitle, and avatar as header and a card image.</p>\n  <mat-card class=\"demo-card\">\n    <mat-card-header>\n      <img mat-card-avatar src=\"https://material.angularjs.org/material2_assets/ngconf/Porter.png\"\n           aria-label=\"Dachshund avatar\">\n      <mat-card-title>Dachshund</mat-card-title>\n      <mat-card-subtitle>Dog breed</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"https://material.angularjs.org/material2_assets/ngconf/Koby.png\"\n         aria-label=\"Dachshund\">\n    <mat-card-content>\n      The dachshund is a short-legged, long-bodied, hound-type dog breed.\n    </mat-card-content>\n  </mat-card>\n</section>\n\n<section>\n  <h2>Shiba Inu</h2>\n  <p>Showing a card with header, content, image, and two action buttons: \"share\" and \"like\".</p>\n  <mat-card class=\"demo-card\">\n    <mat-card-header>\n      <img mat-card-avatar src=\"https://material.angularjs.org/material2_assets/ngconf/Molly.png\"\n           aria-label=\"Shiba Inu avatar\">\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"https://material.angularjs.org/material2_assets/ngconf/Husi.png\" aria-label=\"Shiba Inu\">\n    <mat-card-content>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n      <button mat-button (click)=\"openSnackbar('Liked Shiba Inu')\">like</button>\n      <button mat-button (click)=\"openSnackbar('Shared Shiba Inu')\">share</button>\n    </mat-card-actions>\n  </mat-card>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/checkbox/checkbox.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/checkbox/checkbox.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Checkbox without label</h2>\n    <mat-checkbox aria-label=\"A single checkbox with no label example\"></mat-checkbox>\n  </section>\n  <section>\n    <h2>Standalone checkbox</h2>\n    <div>\n      <mat-checkbox>Yes, I agree to the terms and conditions</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox [disabled]=\"true\">No, I do not agree to the terms and conditions</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox [indeterminate]=\"true\">A partially done task</mat-checkbox>\n    </div>\n  </section>\n\n  <section>\n    <h2>Nested checklist</h2>\n    <div *ngFor=\"let task of tasks\">\n      <mat-checkbox [(ngModel)]=\"task.completed\"\n                    [checked]=\"allComplete(task)\"\n                    [indeterminate]=\"someComplete(task.subtasks)\"\n                    (change)=\"setAllCompleted(task.subtasks, $event.checked)\">\n        {{task.name}}\n      </mat-checkbox>\n      <div class=\"demo-sub-list\">\n        <div *ngFor=\"let subtask of task.subtasks\">\n          <mat-checkbox [(ngModel)]=\"subtask.completed\">\n            {{subtask.name}}\n          </mat-checkbox>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h2>Colored checkboxes</h2>\n    <mat-checkbox color=\"primary\">Primary</mat-checkbox>\n    <mat-checkbox color=\"accent\">Accent</mat-checkbox>\n    <mat-checkbox color=\"warn\">Warn</mat-checkbox>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/chips/chips.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/chips/chips.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Basic chips</h2>\n    <mat-chip-list>\n      <mat-chip>Carnation</mat-chip>\n      <mat-chip>Irises</mat-chip>\n      <mat-chip>Buttercup</mat-chip>\n    </mat-chip-list>\n  </section>\n\n  <section>\n    <h2>Unstyled chips</h2>\n\n    <mat-chip-list>\n      <mat-basic-chip>Husky </mat-basic-chip>\n      <mat-basic-chip>Golden Retriever </mat-basic-chip>\n      <mat-basic-chip>Border Collie </mat-basic-chip>\n    </mat-chip-list>\n  </section>\n\n  <section>\n    <h2>Removable chips in a form field</h2>\n\n    <mat-form-field>\n      <mat-chip-list matPrefix #chipList>\n        <mat-chip *ngFor=\"let person of people\" [color]=\"color\" (removed)=\"remove(person)\">\n          {{person.name}}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n      <input matInput placeholder=\"New Contributor...\"\n             aria-label=\"New contributor\"\n             [matChipInputFor]=\"chipList\"\n             [matChipInputAddOnBlur]=\"addOnBlur\"\n             (matChipInputTokenEnd)=\"add($event)\" />\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Colored chips</h2>\n    <p>This example is good for contrast-radio checking.</p>\n    <mat-chip-list>\n      <mat-chip color=\"primary\" selected=\"true\">Primary</mat-chip>\n      <mat-chip color=\"accent\" selected=\"true\">Accent</mat-chip>\n      <mat-chip color=\"warn\" selected=\"true\">Warn</mat-chip>\n    </mat-chip-list>\n  </section>\n\n  <section>\n    <h2>Stacked chips</h2>\n    <mat-chip-list class=\"mat-chip-list-stacked\">\n      <mat-chip [selectable]=\"false\">Lemon</mat-chip>\n      <mat-chip [selectable]=\"false\">Lime</mat-chip>\n      <mat-chip [selectable]=\"false\">Grapefruit</mat-chip>\n    </mat-chip-list>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/datepicker/datepicker.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/datepicker/datepicker.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Choose a date (e.g. choose your date of birth)</h2>\n    <mat-form-field>\n      <mat-label>Date of birth</mat-label>\n      <input matInput\n             [matDatepicker]=\"birthdayPicker\"\n             [(ngModel)]=\"birthday\"\n             #birthdayModel=\"ngModel\"\n             [max]=\"maxBirthday\"\n             required>\n      <mat-datepicker-toggle matSuffix [for]=\"birthdayPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #birthdayPicker startView=\"year\"></mat-datepicker>\n      <mat-error *ngIf=\"birthdayModel.hasError('required')\">\n        Please choose a date.\n      </mat-error>\n      <mat-error *ngIf=\"birthdayModel.hasError('matDatepickerMax')\">\n        Please choose an earlier date.\n      </mat-error>\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Choose a date with touch UI (e.g. choose a payment date on mobile)</h2>\n    <p>When would you like to schedule your payment?</p>\n    <mat-form-field>\n      <input matInput\n             [matDatepicker]=\"paymentPicker\"\n             [(ngModel)]=\"paymentDate\"\n             #paymentDateModel=\"ngModel\"\n             [min]=\"minPaymentDate\"\n             required\n             aria-label=\"Payment date\">\n      <mat-datepicker-toggle matSuffix [for]=\"paymentPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #paymentPicker></mat-datepicker>\n      <mat-error *ngIf=\"paymentDateModel.hasError('required')\">\n        Please choose a date.\n      </mat-error>\n      <mat-error *ngIf=\"paymentDateModel.hasError('matDatepickerMin')\">\n        Please choose a later date.\n      </mat-error>\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Choose date with startAt, min and max (e.g. schedule a departing and returning flight)</h2>\n    <mat-form-field>\n      <mat-label>Departure date</mat-label>\n      <input matInput\n             [matDatepicker]=\"departPicker\"\n             [(ngModel)]=\"departDate\"\n             #departDateModel=\"ngModel\"\n             [min]=\"minTripDate\"\n             [max]=\"maxTripDate\"\n             required>\n      <mat-datepicker-toggle matSuffix [for]=\"departPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #departPicker [startAt]=\"startTripDate\"></mat-datepicker>\n      <mat-error *ngIf=\"departDateModel.hasError('required')\">\n        Please choose a date.\n      </mat-error>\n      <mat-error *ngIf=\"departDateModel.hasError('matDatepickerMin')\">\n        Please choose a later date.\n      </mat-error>\n      <mat-error *ngIf=\"departDateModel.hasError('matDatepickerMax')\">\n        Please choose an earlier date.\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Return date</mat-label>\n      <input matInput\n             [matDatepicker]=\"returnPicker\"\n             [(ngModel)]=\"returnDate\"\n             #returnDateModel=\"ngModel\"\n             [min]=\"departDate || minTripDate\"\n             [max]=\"maxTripDate\">\n      <mat-datepicker-toggle matSuffix [for]=\"returnPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #returnPicker [startAt]=\"startTripDate\"></mat-datepicker>\n      <mat-error *ngIf=\"returnDateModel.hasError('matDatepickerMin') && !departDate\">\n        Please choose a later date.\n      </mat-error>\n      <mat-error *ngIf=\"returnDateModel.hasError('matDatepickerMin') && departDate\">\n        Please choose a date after your departure.\n      </mat-error>\n      <mat-error *ngIf=\"returnDateModel.hasError('matDatepickerMax')\">\n        Please choose an earlier date.\n      </mat-error>\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Choose date with date filter (e.g. schedule a doctor's appointment)</h2>\n    <mat-form-field>\n      <mat-label>Appointment date</mat-label>\n      <input matInput\n             [matDatepicker]=\"appointmentPicker\"\n             [(ngModel)]=\"appointmentDate\"\n             #appointmentDateModel=\"ngModel\"\n             [min]=\"minAppointmentDate\"\n             [max]=\"maxAppointmentDate\"\n             [matDatepickerFilter]=\"weekdaysOnly\"\n             required>\n      <mat-datepicker-toggle matSuffix [for]=\"appointmentPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #appointmentPicker></mat-datepicker>\n      <mat-error *ngIf=\"appointmentDateModel.hasError('required')\">\n        Please choose a date.\n      </mat-error>\n      <mat-error *ngIf=\"appointmentDateModel.hasError('matDatepickerMin') ||\n                             appointmentDateModel.hasError('matDatepickerMax') ||\n                             appointmentDateModel.hasError('matDatepickerFilter')\">\n        No appointments available on this date.\n      </mat-error>\n    </mat-form-field>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-address-form.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/dialog/dialog-address-form.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Company</h2>\n\n<mat-dialog-content>\n  <form>\n    <mat-form-field class=\"demo-full-width\">\n      <mat-label>Company (disabled)</mat-label>\n      <input matInput disabled value=\"Google\">\n    </mat-form-field>\n\n    <table class=\"demo-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"demo-full-width\">\n        <mat-label>First name</mat-label>\n        <input matInput>\n      </mat-form-field></td>\n      <td><mat-form-field class=\"demo-full-width\">\n        <mat-label>Long last name that will be truncated</mat-label>\n        <input matInput>\n      </mat-form-field></td>\n    </tr></table>\n\n    <p>\n      <mat-form-field class=\"demo-full-width\">\n        <mat-label>Address</mat-label>\n        <textarea matInput>1600 Amphitheatre Pkwy</textarea>\n      </mat-form-field>\n      <mat-form-field class=\"demo-full-width\">\n        <mat-label>Address 2</mat-label>\n        <textarea matInput></textarea>\n      </mat-form-field>\n    </p>\n\n    <table class=\"demo-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"demo-full-width\">\n        <mat-label>City</mat-label>\n        <input matInput>\n      </mat-form-field></td>\n      <td><mat-form-field class=\"demo-full-width\">\n        <mat-label>State</mat-label>\n        <input matInput>\n      </mat-form-field></td>\n      <td><mat-form-field class=\"demo-full-width\">\n        <mat-label>Postal code</mat-label>\n        <input matInput #postalCode maxlength=\"5\" value=\"94043\">\n        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n      </mat-form-field></td>\n    </tr></table>\n  </form>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Close</button>\n  <button mat-raised-button color=\"primary\" mat-dialog-close cdkFocusInitial>Submit</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-fruit.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/dialog/dialog-fruit.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Fruit</h2>\n<div mat-dialog-content>Which would you like to choose?</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close=\"peach\" aria-label=\"Peach\">Peach</button>\n  <button mat-button mat-dialog-close=\"apple\" aria-label=\"Apple\">Apple</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-neptune-iframe.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/dialog/dialog-neptune-iframe.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Neptune</h2>\n\n<mat-dialog-content>\n  <iframe frameborder=\"0\" src=\"https://en.wikipedia.org/wiki/Neptune\"></iframe>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button color=\"primary\" mat-dialog-close>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-neptune.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/dialog/dialog-neptune.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Neptune</h2>\n\n<mat-dialog-content>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg\"\n       alt=\"Neptune\"/>\n\n  <p>\n    Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the\n    Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet,\n    and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more\n    massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger\n    than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1\n    astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the\n    astronomical symbol ♆, a stylised version of the god Neptune's trident.\n  </p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button color=\"primary\" mat-dialog-close>Close</button>\n\n  <a mat-button color=\"primary\" href=\"https://en.wikipedia.org/wiki/Neptune\" target=\"_blank\">\n    Read more on Wikipedia\n  </a>\n\n  <button mat-button color=\"secondary\" (click)=\"showInStackedDialog()\">\n    Show in dialog</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-welcome.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/dialog/dialog-welcome.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to Angular Material dialog demo page!</h2>\n\n<p>\n  The Web is fundamentally designed to work for all people, whatever their hardware, software,\n  language, culture, location, or physical or mental ability. When the Web meets this goal, it is\n  accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.\n</p>\n<p>\n  The mission of the Web Accessibility Initiative (WAI) is to lead the Web to its full potential to\n  be accessible, enabling people with disabilities to participate equally on the Web.\n</p>\n\n<button mat-button color=\"primary\" mat-dialog-close>Close</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/dialog/dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Welcome message</h2>\n    <p>Activate the button to see a welcome dialog with a simple message and a close button.</p>\n    <button mat-button (click)=\"openWelcomeDialog()\">Welcome</button>\n  </section>\n\n  <section>\n    <h2>Choose a fruit</h2>\n    <p>Active the button to choose apple or peach in a dialog.</p>\n    <button mat-button (click)=\"openFruitDialog()\">Fruit</button>\n    <p *ngIf=\"fruitSelectedOption\">\n      You chose: {{fruitSelectedOption}}\n    </p>\n  </section>\n\n  <section>\n    <h2>Neptune</h2>\n    <p>\n      Active the button to see a dialog showing information of Neptune.\n      A Wikipedia page can be opened either in a new tab or in a stacked dialog.\n    </p>\n    <button mat-button (click)=\"openNeptuneDialog()\">Learn Neptune</button>\n  </section>\n\n  <section>\n    <h2>Address form</h2>\n    <p>\n      Active the button to fill out shipping address information in a dialog.\n    </p>\n    <button mat-button (click)=\"openAddressDialog()\">Add address</button>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/divider/divider.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/divider/divider.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<div fxLayout=\"row wrap\" class=\"matero-row\">\n  <div [fxFlex.gt-sm]=\"50\" [fxFlex]=\"100\" class=\"matero-col\">\n    <mat-card>\n      <mat-list>\n        <mat-list-item>Item 1</mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item>Item 2</mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item>Item 3</mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <div [fxFlex.gt-sm]=\"50\" [fxFlex]=\"100\" class=\"matero-col\">\n    <mat-card>\n      <mat-list>\n        <mat-list-item>Item 1</mat-list-item>\n        <mat-divider [inset]=\"true\"></mat-divider>\n        <mat-list-item>Item 2</mat-list-item>\n        <mat-divider [inset]=\"true\"></mat-divider>\n        <mat-list-item>Item 3</mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <div [fxFlex.gt-sm]=\"50\" [fxFlex]=\"100\" class=\"matero-col\">\n    <mat-card>\n      <mat-list fxLayout=\"row\">\n        <mat-list-item>Item 1</mat-list-item>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n        <mat-list-item>Item 2</mat-list-item>\n        <mat-divider [vertical]=\"true\"></mat-divider>\n        <mat-list-item>Item 3</mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/expansion-panel/expansion-panel.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/expansion-panel/expansion-panel.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<section class=\"demo-expansion\">\n  <h2>Siberian Husky</h2>\n  <p>Single expansion panel</p>\n  <mat-expansion-panel #myPanel>\n    <mat-expansion-panel-header>\n      <mat-panel-description>\n        Dog breed\n      </mat-panel-description>\n      <mat-panel-title>Siberian Husky</mat-panel-title>\n    </mat-expansion-panel-header>\n    The Siberian Husky is a medium size working dog breed that originated\n    in north-eastern Siberia, Russia. The breed belongs to the Spitz genetic family.\n    <mat-action-row>\n      <button mat-button (click)=\"myPanel.expanded = false\">Cancel</button>\n      <a mat-button href=\"https://en.wikipedia.org/wiki/Siberian_Husky\"\n         target=\"_blank\">Wikipedia</a>\n    </mat-action-row>\n  </mat-expansion-panel>\n</section>\n\n<section class=\"demo-expansion\">\n  <h2>Dog breeds</h2>\n  <p>Multiple expansion panel</p>\n  <mat-accordion>\n    <mat-expansion-panel #panel1>\n      <mat-expansion-panel-header>Golden Retriever</mat-expansion-panel-header>\n      <p>\n        The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot\n        waterfowl such as ducks and upland game birds during hunting and shooting parties, and\n        were named 'retriever' because of their ability to retrieve shot game undamaged.\n        Golden Retrievers have an instinctive love of water, and are easy to train to basic\n        or advanced obedience standards.\n      </p>\n    </mat-expansion-panel>\n    <mat-expansion-panel #panel2 [disabled]=\"true\">\n      <mat-expansion-panel-header>Beagle</mat-expansion-panel-header>\n      <p>\n        The Beagle is a breed of small hound, similar in appearance to the much larger foxhound.\n        The beagle is a scent hound, developed primarily for hunting hare.\n      </p>\n    </mat-expansion-panel>\n    <mat-expansion-panel #panel3>\n      <mat-expansion-panel-header>Dachshund</mat-expansion-panel-header>\n      <p>\n        The dachshund is a short-legged, long-bodied, hound-type dog breed. The standard size\n        dachshund was developed to scent, chase, and flush out badgers and other burrow-dwelling\n        animals, while the miniature ...\n      </p>\n      <mat-action-row>\n        <button mat-button (click)=\"panel3.expanded = false\">Close</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  </mat-accordion>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/form-field/form-field.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/form-field/form-field.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Input\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Textarea\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Select\">\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</mat-card>\n\n<mat-card>\n  <div class=\"example-container\">\n    <form class=\"example-container\" [formGroup]=\"options\">\n      <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n      <div>\n        <label>Float label: </label>\n        <mat-radio-group formControlName=\"floatLabel\">\n          <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n          <mat-radio-button value=\"always\">Always</mat-radio-button>\n          <mat-radio-button value=\"never\">Never</mat-radio-button>\n        </mat-radio-group>\n      </div>\n    </form>\n\n    <mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\"\n                    [floatLabel]=\"options.value.floatLabel\">\n      <input matInput placeholder=\"Simple placeholder\" required>\n    </mat-form-field>\n\n    <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n      <mat-label>Both a label and a placeholder</mat-label>\n      <input matInput placeholder=\"Simple placeholder\">\n    </mat-form-field>\n\n    <mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\"\n                    [floatLabel]=\"options.value.floatLabel\">\n      <mat-select required>\n        <mat-option>-- None --</mat-option>\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n      <mat-label>\n        <mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i>\n      </mat-label>\n    </mat-form-field>\n  </div>\n</mat-card>\n\n<mat-card>\n  <p>\n    <mat-form-field appearance=\"legacy\">\n      <mat-label>Legacy form field</mat-label>\n      <input matInput placeholder=\"Placeholder\">\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n      <mat-hint>Hint</mat-hint>\n    </mat-form-field>\n  </p>\n  <p>\n    <mat-form-field appearance=\"standard\">\n      <mat-label>Standard form field</mat-label>\n      <input matInput placeholder=\"Placeholder\">\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n      <mat-hint>Hint</mat-hint>\n    </mat-form-field>\n  </p>\n  <p>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Fill form field</mat-label>\n      <input matInput placeholder=\"Placeholder\">\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n      <mat-hint>Hint</mat-hint>\n    </mat-form-field>\n  </p>\n  <p>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Outline form field</mat-label>\n      <input matInput placeholder=\"Placeholder\">\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n      <mat-hint>Hint</mat-hint>\n    </mat-form-field>\n  </p>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/grid-list/grid-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/grid-list/grid-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Types of coffee (fix-height grid-list)</h2>\n    <mat-grid-list role=\"list\" [cols]=\"fixedCols\" [rowHeight]=\"fixedRowHeight\">\n      <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\n                     [style.background]=\"tile.color\" role=\"listitem\">\n        {{tile.text}}\n      </mat-grid-tile>\n    </mat-grid-list>\n  </section>\n\n  <section>\n    <h2>Types of coffee (ratio-height grid list)</h2>\n    <mat-grid-list role=\"list\" cols=\"2\" [rowHeight]=\"ratio\" gutterSize=\"4px\">\n      <mat-grid-tile *ngFor=\"let tile of tiles\" [style.background]=\"'lightblue'\" role=\"listitem\">\n        {{tile.text}}\n      </mat-grid-tile>\n    </mat-grid-list>\n  </section>\n\n  <section>\n    <h2>Types of coffee (fit-height grid list)</h2>\n    <mat-grid-list role=\"list\" cols=\"2\" rowHeight=\"fit\" [gutterSize]=\"ratioGutter\"\n                   [style.height]=\"fitListHeight\">\n      <mat-grid-tile *ngFor=\"let tile of tiles\" role=\"listitem\" [style.background]=\"'#F1EBBA'\">\n        {{tile.text}}\n      </mat-grid-tile>\n    </mat-grid-list>\n  </section>\n\n  <section>\n    <h2>Angular team dogs (Grid list with header and footer)</h2>\n    <mat-grid-list role=\"list\" cols=\"3\" rowHeight=\"200px\">\n      <mat-grid-tile *ngFor=\"let dog of dogs\" role=\"listitem\">\n        <mat-grid-tile-header>{{dog.name}}</mat-grid-tile-header>\n        <img alt=\"Photo of {{dog.name}}\"\n             src=\"https://material.angularjs.org/material2_assets/ngconf/{{dog.name}}.png\">\n        <mat-grid-tile-footer>\n          <span mat-line>Human: {{dog.human}}</span>\n        </mat-grid-tile-footer>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/icon/icon.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/icon/icon.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Fingerprint status</h2>\n    <p>Showing a status message with a purely decorative icon</p>\n    <mat-icon color=\"primary\">fingerprint</mat-icon>\n    Your fingerprint was recorded!\n  </section>\n\n  <section>\n    <h2>Delete icon button </h2>\n    <p>Showing a button with interactive icon which can perform an action</p>\n    <button mat-icon-button aria-label=\"Delete\" (click)=\"deleteIcon()\">\n      <mat-icon color=\"accent\">delete</mat-icon>\n    </button>\n  </section>\n\n  <section>\n    <h2>Home link </h2>\n    <p>Showing a link with interactive icon</p>\n    <a mat-icon-button aria-label=\"Home\" href=\"http://www.google.com\">\n      <mat-icon color=\"warn\">home</mat-icon>\n    </a>\n  </section>\n\n  <section>\n    <h2>Done status </h2>\n    <p>Showing a status indicator with an indicator icon</p>\n    <mat-icon color=\"primary\">done</mat-icon>\n    <span class=\"cdk-visually-hidden\">Done</span>\n    Tasks\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/input/input.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/input/input.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Basic input box (e.g. name field)</h2>\n    <mat-form-field floatLabel=\"never\">\n      <mat-label>First name</mat-label>\n      <input matInput [(ngModel)]=\"firstName\">\n    </mat-form-field>\n    <mat-form-field floatLabel=\"never\">\n      <mat-label>Last name</mat-label>\n      <input matInput [(ngModel)]=\"lastName\">\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Input with hint (e.g. password field)</h2>\n    <mat-form-field hideRequiredMarker>\n      <mat-label>Password</mat-label>\n      <input matInput [type]=\"passwordType\" [(ngModel)]=\"password\" required\n             #passwordModel=\"ngModel\">\n      <button mat-icon-button matSuffix [attr.aria-label]=\"passwordToggleLabel\"\n              (click)=\"showPassword = !showPassword\">\n        <mat-icon>{{passwordToggleIcon}}</mat-icon>\n      </button>\n      <mat-hint>Hint: favorite color</mat-hint>\n      <mat-error *ngIf=\"passwordModel.hasError('required')\">You must enter your password.\n      </mat-error>\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Input with error message (e.g. email field)</h2>\n    <mat-form-field>\n      <mat-label>Email</mat-label>\n      <input matInput type=\"email\" [(ngModel)]=\"email\" required email #emailModel=\"ngModel\">\n      <mat-error *ngIf=\"emailModel.hasError('required')\">You must enter your email.</mat-error>\n      <mat-error *ngIf=\"emailModel.hasError('email')\">Not a valid email address.</mat-error>\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Input with prefix & suffix (e.g. currency converter)</h2>\n    <mat-form-field floatLabel=\"always\">\n      <mat-label>USD</mat-label>\n      <input matInput type=\"number\" [(ngModel)]=\"usd\">\n      <span matPrefix>$</span>\n    </mat-form-field>\n    =\n    <mat-form-field floatLabel=\"always\">\n      <mat-label>JPY</mat-label>\n      <input matInput type=\"number\" [(ngModel)]=\"jpy\">\n      <span matPrefix>‎¥‎</span>\n    </mat-form-field>\n    (as of 7/31/2017)\n  </section>\n\n  <section>\n    <h2>Textarea input (e.g. comment box)</h2>\n    <mat-form-field>\n      <textarea matInput aria-label=\"Comment\" [(ngModel)]=\"comment\" cdkTextareaAutosize\n                [maxlength]=\"commentMax\" #commentModel=\"ngModel\"></textarea>\n      <mat-hint>Leave us a comment!</mat-hint>\n      <mat-hint align=\"end\">{{commentCount}}/{{commentMax}}</mat-hint>\n    </mat-form-field>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/list/list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/list/list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <div class=\"demo-list\">\n    <section>\n      <h2> Seasoning </h2>\n      <p>Showing a non-interactive list of seasonings.</p>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\" *ngFor=\"let item of items\"> {{item}} </mat-list-item>\n      </mat-list>\n    </section>\n\n\n    <section>\n      <h2>Mailbox navigation</h2>\n      <p>Showing a navigation list with links to google search</p>\n      <mat-nav-list>\n        <a mat-list-item *ngFor=\"let link of links\"\n           href=\"https://www.google.com/search?q={{link.name}}\">\n          {{link.name}}\n        </a>\n      </mat-nav-list>\n    </section>\n\n    <section>\n      <h2>Messages</h2>\n      <p>\n        Showing a list of messages, where each message item has sender's name, sender's avatar,\n        message subject, and content of the message.\n      </p>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\" *ngFor=\"let message of messages\">\n          <img mat-list-avatar [src]=\"message.image\" [alt]=\"message.from\">\n          <h3 mat-line> {{message.from}} </h3>\n          <p mat-line> {{message.subject}} </p>\n          <p mat-line class=\"demo-secondary-text\"> {{message.message}} </p>\n        </mat-list-item>\n      </mat-list>\n\n    </section>\n\n    <section>\n      <h2>Seasoning</h2>\n      <p>Showing a non-interactive list of seasonings with dense style.</p>\n      <mat-list role=\"list\" dense>\n        <mat-list-item role=\"listitem\" *ngFor=\"let item of items\"> {{item}} </mat-list-item>\n      </mat-list>\n    </section>\n\n    <section>\n      <h2>Folders and notes for mailbox </h2>\n      <p>Showing a list with two sections, \"folders\" and \"notes\".</p>\n      <mat-list role=\"list\">\n        <h3 mat-subheader>Folders</h3>\n        <mat-list-item role=\"listitem\" *ngFor=\"let folder of folders\">\n          <mat-icon mat-list-icon>folder</mat-icon>\n          <h4 mat-line>{{folder.name}}</h4>\n          <p mat-line class=\"demo-secondary-text\"> {{folder.updated}} </p>\n        </mat-list-item>\n        <mat-divider></mat-divider>\n        <h3 mat-subheader>Notes</h3>\n        <mat-list-item role=\"listitem\" *ngFor=\"let note of notes\">\n          <mat-icon mat-list-icgon>note</mat-icon>\n          <h4 mat-line>{{note.name}}</h4>\n          <p mat-line class=\"demo-secondary-text\"> {{note.updated}} </p>\n        </mat-list-item>\n      </mat-list>\n    </section>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/menu/menu.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/menu/menu.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <div class=\"demo-menu\">\n\n    <section>\n      <h2>Icon Trigger</h2>\n      <mat-menu #menu1=\"matMenu\">\n        <button mat-menu-item> Settings </button>\n        <button mat-menu-item> Help </button>\n      </mat-menu>\n\n      <button mat-icon-button [matMenuTriggerFor]=\"menu1\" aria-label=\"Open Menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </section>\n\n    <section>\n      <h2>Menu with Icons</h2>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu2\" aria-label=\"Open Menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n\n      <mat-menu #menu2=\"matMenu\">\n        <button mat-menu-item>\n          <mat-icon>dialpad</mat-icon>\n          <span>Redial</span>\n        </button>\n        <button mat-menu-item>\n          <mat-icon>voicemail</mat-icon>\n          <span>Check voicemail</span>\n        </button>\n        <button mat-menu-item>\n          <mat-icon>notifications_off</mat-icon>\n          <span>Disable alerts</span>\n        </button>\n      </mat-menu>\n    </section>\n\n    <section>\n      <h2>Menu with links</h2>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu3\" aria-label=\"Learn more about Angular\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n\n      <mat-menu #menu3=\"matMenu\">\n        <a href=\"http://angular.io\" mat-menu-item>\n          Angular\n        </a>\n        <a href=\"http://material.angular.io\" mat-menu-item>\n          Angular Material\n        </a>\n      </mat-menu>\n    </section>\n\n  </div>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/paginator/paginator.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/paginator/paginator.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <mat-form-field>\n    List length:\n    <input matInput [(ngModel)]=\"length\">\n  </mat-form-field>\n\n  <mat-form-field>\n    Page size:\n    <input matInput [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n  <mat-form-field>\n    Page size options:\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\">\n  </mat-form-field>\n\n  <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\n                 (page)=\"pageEvent = $event\">\n  </mat-paginator>\n\n  <div *ngIf=\"pageEvent\">\n    <h5>Page Change Event Properties</h5>\n    <div>List length: {{pageEvent.length}}</div>\n    <div>Page size: {{pageEvent.pageSize}}</div>\n    <div>Page index: {{pageEvent.pageIndex}}</div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/progress-bar/progress-bar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/progress-bar/progress-bar.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Survey progress (Determinate progress bar)</h2>\n    <mat-progress-bar mode=\"determinate\" [value]=\"surveyProgress\" color=\"primary\"\n                      aria-label=\"Survey progress\">\n    </mat-progress-bar>\n  </section>\n\n  <section>\n    <h2>Video progress (Progress bar with buffer) </h2>\n    <mat-progress-bar [value]=\"videoPlayValue\" [bufferValue]=\"videoBufferValue\" mode=\"buffer\"\n                      color=\"primary\" aria-label=\"Video progress\">\n    </mat-progress-bar>\n  </section>\n\n  <section>\n    <h2>Loading content progress (Indeterminate progress bar)</h2>\n    <mat-progress-bar mode=\"indeterminate\" color=\"warn\" aria-label=\"Loading content\">\n    </mat-progress-bar>\n  </section>\n\n  <section>\n    <h2>Search progress (Query progress bar)</h2>\n    <mat-progress-bar mode=\"query\" color=\"accent\" aria-label=\"Searching\"></mat-progress-bar>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/progress-spinner/progress-spinner.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/progress-spinner/progress-spinner.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Loading indicator (Indeterminate progress spinner)</h2>\n    <mat-spinner color=\"indeterminate\" [strokeWidth]=\"1\" aria-label=\"Loading\"></mat-spinner>\n    <mat-spinner color=\"accent\" aria-label=\"Loading\"></mat-spinner>\n  </section>\n\n  <section>\n    <h2>Portion of pizza eaten (Determinate progress spinner) </h2>\n    <mat-progress-spinner [strokeWidth]=\"1\" color=\"primary\"\n                          [value]=\"portionValue\" aria-label=\"Portion of pizza eaten\">\n    </mat-progress-spinner>\n    <mat-progress-spinner color=\"warn\" [value]=\"portionValue\"\n                          aria-label=\"Portion of pizza eaten\">\n    </mat-progress-spinner>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/radio-button/radio-button.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/radio-button/radio-button.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Radio buttons in group</h2>\n    <mat-radio-group name=\"seasons\" [(ngModel)]=\"favoriteSeason\" aria-label=\"Seasons\">\n      <mat-radio-button *ngFor=\"let season of seasonOptions\" [value]=\"season\">\n        {{season}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </section>\n\n  <section>\n    <h2>Radio buttons with align-end label position</h2>\n    <mat-radio-group name=\"bread\" align=\"end\" aria-label=\"Breads\">\n      <mat-radio-button value=\"toast\">Toast</mat-radio-button>\n      <mat-radio-button value=\"biscuit\">Biscuit</mat-radio-button>\n      <mat-radio-button value=\"bagel\">Bagel</mat-radio-button>\n    </mat-radio-group>\n  </section>\n\n  <section>\n    <h2>Disabled radio buttons</h2>\n    <p>\n      This section contains three radio buttons for \"Yes\", \"No\", and \"Maybe\".\n      The \"Maybe\" radio button is disabled.\n    </p>\n    <mat-radio-button name=\"disable\">Yes</mat-radio-button>\n    <mat-radio-button name=\"disable\">No</mat-radio-button>\n    <mat-radio-button name=\"disable\" [disabled]=\"true\">Maybe</mat-radio-button>\n  </section>\n\n  <section>\n    <h2>Radio buttons with different colors</h2>\n    <mat-radio-button name=\"color\">Default (accent)</mat-radio-button>\n    <mat-radio-button name=\"color\" color=\"primary\">Primary</mat-radio-button>\n    <mat-radio-button name=\"color\" color=\"accent\">Accent</mat-radio-button>\n    <mat-radio-button name=\"color\" color=\"warn\">Warn</mat-radio-button>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/ripple/ripple.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/ripple/ripple.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n  <mat-form-field class=\"example-ripple-form-field\">\n    <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\n  </mat-form-field>\n  <mat-form-field class=\"example-ripple-form-field\">\n    <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\n  </mat-form-field>\n\n\n  <div class=\"example-ripple-container mat-elevation-z4\" matRipple [matRippleCentered]=\"centered\"\n       [matRippleDisabled]=\"disabled\" [matRippleUnbounded]=\"unbounded\" [matRippleRadius]=\"radius\"\n       [matRippleColor]=\"color\">\n    Click me\n  </div>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/select/select.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/select/select.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Single selection</h2>\n    <p>Select your favorite color</p>\n\n    <mat-form-field>\n      <mat-label>Colors</mat-label>\n      <mat-select [(ngModel)]=\"selectedColor\">\n        <mat-option *ngFor=\"let color of colors\" [value]=\"color.value\">\n          {{ color.label }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Multiple selection</h2>\n    <p>Pick toppings for your pizza</p>\n\n    <mat-form-field>\n      <mat-label>Toppings</mat-label>\n      <mat-select [(ngModel)]=\"selectedTopping\" multiple>\n        <mat-option *ngFor=\"let topping of toppings\" [value]=\"topping.value\">\n          {{ topping.label }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Grouped options</h2>\n    <p>Pick your Pokemon</p>\n\n    <mat-form-field>\n      <mat-label>Pokemon</mat-label>\n      <mat-select [(ngModel)]=\"selectedPokemon\">\n        <mat-optgroup *ngFor=\"let group of pokemon\" [label]=\"group.label\">\n          <mat-option *ngFor=\"let creature of group.pokemon\" [value]=\"creature.value\">\n            {{ creature.label }}\n          </mat-option>\n        </mat-optgroup>\n      </mat-select>\n    </mat-form-field>\n  </section>\n\n  <section>\n    <h2>Colors</h2>\n\n    <div class=\"demo-select-a11y-spacer\">\n      <mat-form-field color=\"primary\">\n        <mat-label>ZIP code</mat-label>\n        <mat-select>\n          <mat-option value=\"2000\">2000</mat-option>\n          <mat-option value=\"2100\">2100</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field color=\"accent\">\n        <mat-label>State</mat-label>\n        <mat-select>\n          <mat-option value=\"alaska\">Alaska</mat-option>\n          <mat-option value=\"alabama\">Alabama</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field color=\"warn\">\n        <mat-label>Language</mat-label>\n        <mat-select>\n          <mat-option value=\"english\">English</mat-option>\n          <mat-option value=\"spanish\">Spanish</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"demo-select-a11y-spacer\">\n      <mat-form-field color=\"primary\">\n        <mat-label>Digimon</mat-label>\n        <mat-select multiple>\n          <mat-option value=\"mihiramon\">Mihiramon</mat-option>\n          <mat-option value=\"sandiramon\">Sandiramon</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field color=\"accent\">\n        <mat-label>Drink</mat-label>\n        <mat-select multiple>\n          <mat-option value=\"water\">Water</mat-option>\n          <mat-option value=\"coke\">Coke</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field color=\"warn\">\n        <mat-label>Theme</mat-label>\n        <mat-select multiple>\n          <mat-option value=\"light\">Light</mat-option>\n          <mat-option value=\"dark\">Dark</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/sidenav/basic-sidenav.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/sidenav/basic-sidenav.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" role=\"header\" aria-label=\"Basic sidenav app\">\n  <button mat-icon-button aria-label=\"Navigation menu\" (click)=\"snav.toggle()\">\n    <mat-icon aria-hidden=\"true\">menu</mat-icon>\n  </button>\n  <h1 class=\"demo-sidenav-app-name\">Basic Sidenav App</h1>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"demo-sidenav-container\">\n  <mat-sidenav #snav mode=\"side\" role=\"navigation\">\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"..\">Home</a>\n      <a mat-list-item routerLink=\"../basic\">Basic sidenav example</a>\n      <a mat-list-item routerLink=\"../mobile\">Responsive sidenav example</a>\n      <a mat-list-item routerLink=\"../dual\">Dual sidenavs example</a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content role=\"region\">\n    <button mat-raised-button aria-label=\"Close basic sidenav example\" color=\"primary\"\n            class=\"demo-sidenav-close\" routerLink=\"..\">\n      Close example\n    </button>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/sidenav/dual-sidenav.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/sidenav/dual-sidenav.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" role=\"header\" aria-label=\"Dual sidenav app\">\n  <button mat-icon-button aria-label=\"Navigation menu\" (click)=\"startSnav.toggle()\">\n    <mat-icon aria-hidden=\"true\">menu</mat-icon>\n  </button>\n  <h1 class=\"demo-sidenav-app-name\">Dual Sidenav App</h1>\n  <span class=\"demo-sidenav-spacer\" aria-hidden=\"true\"></span>\n  <button mat-icon-button aria-label=\"Playlist menu\" (click)=\"endSnav.toggle()\">\n    <mat-icon aria-hidden=\"true\">playlist_play</mat-icon>\n  </button>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"demo-sidenav-container\">\n  <mat-sidenav #startSnav mode=\"side\" role=\"navigation\">\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"..\">Home</a>\n      <a mat-list-item routerLink=\"../basic\">Basic sidenav example</a>\n      <a mat-list-item routerLink=\"../mobile\">Responsive sidenav example</a>\n      <a mat-list-item routerLink=\"../dual\">Dual sidenavs example</a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content role=\"region\">\n    <button mat-raised-button aria-label=\"Close dual sidenav example\" color=\"primary\"\n            class=\"demo-sidenav-close\" routerLink=\"..\">\n      Close example\n    </button>\n  </mat-sidenav-content>\n\n  <mat-sidenav #endSnav mode=\"side\" position=\"end\" class=\"demo-sidenav-playlist\" role=\"region\"\n               (open)=\"playlist1.focus()\">\n    <h2 class=\"demo-sidenav-playlist-header\">Playlists</h2>\n    <button #playlist1 mat-button aria-label=\"Thumbs up playlist\" (click)=\"play('Thumbs up')\">\n      Thumbs up\n    </button>\n    <button mat-button aria-label=\"Last added playlist\" (click)=\"play('Last added')\">\n      Last added\n    </button>\n    <button mat-button aria-label=\"Free and purchased playlist\"\n            (click)=\"play('Free and purchased')\">\n      Free and purchased\n    </button>\n  </mat-sidenav>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/sidenav/mobile-sidenav.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/sidenav/mobile-sidenav.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" role=\"header\" aria-label=\"Responsive sidenav app\"\n            [class.demo-sidenav-header-fixed]=\"mobileQuery.matches\">\n  <button mat-icon-button aria-label=\"Navigation menu\" (click)=\"snav.toggle()\">\n    <mat-icon aria-hidden=\"true\">menu</mat-icon>\n  </button>\n  <h1 class=\"demo-sidenav-app-name\">Responsive Sidenav App</h1>\n</mat-toolbar>\n\n<mat-sidenav-container\n    class=\"demo-sidenav-container\"\n    [class.demo-sidenav-container-fixed]=\"mobileQuery.matches\"\n    [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n  <mat-sidenav\n      #snav\n      role=\"navigation\"\n      [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n      [fixedInViewport]=\"mobileQuery.matches\">\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"..\">Home</a>\n      <a mat-list-item routerLink=\"../basic\">Basic sidenav example</a>\n      <a mat-list-item routerLink=\"../mobile\">Responsive sidenav example</a>\n      <a mat-list-item routerLink=\"../dual\">Dual sidenavs example</a>\n    </mat-nav-list>\n    <p class=\"demo-sidenav-filler\" *ngFor=\"let f of filler\">Filler content</p>\n  </mat-sidenav>\n\n  <mat-sidenav-content role=\"region\">\n    <button mat-raised-button aria-label=\"Close responsive sidenav example\" color=\"primary\"\n            class=\"demo-sidenav-close\" routerLink=\"..\">\n      Close example\n    </button>\n    <p class=\"demo-sidenav-filler\" *ngFor=\"let f of filler\">Filler content</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/sidenav/sidenav.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/sidenav/sidenav.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <mat-card-content>\n\n    <section>\n      <h2>Basic sidenav (e.g. desktop app with hamburger menu)</h2>\n      <a mat-raised-button aria-label=\"View basic sidenav example\" color=\"primary\"\n         routerLink=\"basic\">\n        View example\n      </a>\n    </section>\n\n    <section>\n      <h2>Mobile sidenav (e.g. responsive design hamburger menu)</h2>\n      <a mat-raised-button aria-label=\"View mobile sidenav example\" color=\"primary\"\n         routerLink=\"mobile\">\n        View example\n      </a>\n    </section>\n\n    <section>\n      <h2>Dual sidenavs (e.g. music app with hamburger menu and playlist sidenav)</h2>\n      <a mat-raised-button aria-label=\"View dual sidenav example\" color=\"primary\" routerLink=\"dual\">\n        View example\n      </a>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/slide-toggle/slide-toggle.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/slide-toggle/slide-toggle.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Receive email update</h2>\n    <p>Showing a toggle to manage whether receive email update.</p>\n    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"emailToggle\">\n      Receive email update\n    </mat-slide-toggle>\n  </section>\n\n  <section>\n    <h2>Music</h2>\n    <p>Showing a disabled toggle to control music on/off status.</p>\n    <mat-slide-toggle color=\"accent\" [disabled]=\"true\" [(ngModel)]=\"musicToggle\">\n      Music {{musicToggle ? 'on' : 'off'}} (disabled)\n    </mat-slide-toggle>\n  </section>\n\n  <section>\n    <h2>Terms and conditions</h2>\n    <p>Showing a required toggle to accept terms and conditions in a form.</p>\n    <form #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n      <mat-slide-toggle name=\"termsToggle\" required ngModel>\n        I agree to terms and conditions\n      </mat-slide-toggle>\n      <p>\n        <button mat-raised-button type=\"submit\">Submit</button>\n      </p>\n    </form>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/slider/slider.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/slider/slider.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Continuous slider (e.g. color component sliders)</h2>\n    <p>Move the red, green, and blue sliders to choose a color.</p>\n    <div class=\"demo-color-container\">\n      <div class=\"demo-color-sliders\">\n        <div>\n          <label class=\"demo-color-label\" for=\"r-slider\">Red</label>\n          <mat-slider aria-label=\"Red\" id=\"r-slider\" min=\"0\" max=\"255\" [(ngModel)]=\"red\">\n          </mat-slider>\n        </div>\n        <div>\n          <label class=\"demo-color-label\" for=\"g-slider\">Green</label>\n          <mat-slider aria-label=\"Green\" id=\"g-slider\" min=\"0\" max=\"255\" [(ngModel)]=\"green\">\n          </mat-slider>\n        </div>\n        <div>\n          <label class=\"demo-color-label\" for=\"b-slider\">Blue</label>\n          <mat-slider aria-label=\"Blue\" id=\"b-slider\" min=\"0\" max=\"255\" [(ngModel)]=\"blue\">\n          </mat-slider>\n        </div>\n      </div>\n      <div class=\"demo-color-swatch\" [style.background]=\"swatchBackground\"></div>\n    </div>\n  </section>\n\n  <section>\n    <h2>Discrete slider (e.g. rate a product)</h2>\n    <p>Please rate our product on a scale of 1 (not satisfied) to 5 (extremely satisfied).</p>\n    <mat-slider min=\"1\" max=\"5\" tickInterval=\"1\" thumbLabel aria-label=\"Rating\"></mat-slider>\n  </section>\n\n  <section>\n    <h2>Vertical slider (e.g. volume control)</h2>\n    <p>Use the slider to adjust the volume.</p>\n    <div class=\"demo-volume-container\">\n      <label for=\"vol-slider\">\n        <mat-icon aria-hidden>volume_up</mat-icon>\n        <span class=\"cdk-visually-hidden\">Volume</span>\n      </label>\n      <mat-slider aria-label=\"Volume\" id=\"vol-slider\" min=\"0\" max=\"100\" vertical inverted>\n      </mat-slider>\n    </div>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/snack-bar/snack-bar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/snack-bar/snack-bar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Notification</h2>\n    <p>Showing a notification by snack bar without showing actions</p>\n    <button mat-raised-button color=\"primary\" (click)=\"openNotificationSnackBar()\">\n      Support\n    </button>\n  </section>\n\n  <section>\n    <h2>Disco party </h2>\n    <p>Showing a notification by snack bar with a dismiss button</p>\n    <button mat-button (click)=\"openDiscoPartySnackBar()\">Disco</button>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/sort/sort.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/sort/sort.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <table matSort (matSortChange)=\"sortData($event)\">\n    <tr>\n      <th mat-sort-header=\"name\">Dessert (100g)</th>\n      <th mat-sort-header=\"calories\">Calories</th>\n      <th mat-sort-header=\"fat\">Fat (g)</th>\n      <th mat-sort-header=\"carbs\">Carbs (g)</th>\n      <th mat-sort-header=\"protein\">Protein (g)</th>\n    </tr>\n\n    <tr *ngFor=\"let dessert of sortedData\">\n      <td>{{dessert.name}}</td>\n      <td>{{dessert.calories}}</td>\n      <td>{{dessert.fat}}</td>\n      <td>{{dessert.carbs}}</td>\n      <td>{{dessert.protein}}</td>\n    </tr>\n  </table>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/stepper/stepper.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/stepper/stepper.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n  </button>\n  <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Fill out your name</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\"\n                 required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Fill out your address</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      You are now done.\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/tab/tab.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/tab/tab.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Weather</h2>\n    <p>Switch tabs to navigate</p>\n\n    <nav mat-tab-nav-bar aria-label=\"weather navigation links\">\n      <a mat-tab-link\n         *ngFor=\"let tabLink of tabLinks; let i = index\"\n         [routerLink]=\"tabLink.link\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{tabLink.label}}\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  </section>\n\n  <section>\n    <h2>Dog breeds</h2>\n    <p>Dynamic height tabs</p>\n\n    <mat-tab-group dynamicHeight>\n      <mat-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\n        <ng-template mat-tab-label>{{tab.label}}</ng-template>\n        <div>\n          {{tab.content}}\n          <br>\n          <br>\n          <div *ngIf=\"tab.extraContent\">\n            The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador is\n            one of the most popular breeds of dog in the United Kingdom and the United States.\n            <br>\n            <br>\n            A favourite disability assistance breed in many countries, Labradors are frequently\n            trained to aid the blind, those who have autism, to act as a therapy dog and perform\n            screening and detection work for law enforcement and other official agencies. They are\n            prized as sporting and hunting dogs.\n            <br>\n            <br>\n            A few kennels breeding their ancestors, the St. John's water dog, were in England.\n            At the same time, a combination of the sheep protection policy in Newfoundland and\n            rabies\n            quarantine in the United Kingdom, led to the gradual demise of the St. John's water dog\n            in Canada.\n            <br>\n            <br>\n            In the 1830s, the 10th Earl of Home and his nephews the 5th Duke of Buccleuch and Lord\n            John Scott, had imported progenitors of the breed from Newfoundland to Europe for\n            use as gundogs. Another early advocate of these Newfoundland dogs, or Labrador\n            Retrievers\n            as they later became known, was the 2nd Earl of Malmesbury who bred them for their\n            expertise in waterfowling.\n\n            During the 1880s, the 3rd Earl of Malmesbury, the 6th Duke of Buccleuch and the 12th\n            Earl\n            of Home collaborated to develop and establish the modern Labrador breed. The dogs\n            Buccleuch Avon and Buccleuch Ned, given by Malmesbury to Buccleuch, were mated with\n            bitches carrying blood from those originally imported by the 5th Duke and the 10th Earl\n            of Home. The offspring are considered to be the ancestors of modern Labradors.\n            <br>\n            <br>\n          </div>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/table/table.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/table/table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Basic Table</h2>\n    <p>Shows name, color and age data.</p>\n    <mat-table aria-readonly=\"true\"\n               [dataSource]=\"basicDataSource\"\n               aria-label=\"Users favorite colors and age\">\n      <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.name}}</mat-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"color\">\n        <mat-header-cell *cdkHeaderCellDef>Color</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.color}}</mat-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"age\">\n        <mat-header-cell *cdkHeaderCellDef>Age</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.age}}</mat-cell>\n      </ng-container>\n      <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  </section>\n\n  <section>\n    <h2>Sortable Table</h2>\n    <p>Shows name, color and age data. Sorted ascending by age.</p>\n    <mat-table [dataSource]=\"sortDataSource\"\n               aria-label=\"Users favorite colors and age\"\n               aria-readonly=\"true\"\n               matSort matSortActive=\"age\"\n               matSortDirection=\"asc\">\n      <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.name}}</mat-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"color\">\n        <mat-header-cell *cdkHeaderCellDef>Color</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.color}}</mat-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"age\">\n        <mat-header-cell *cdkHeaderCellDef mat-sort-header>Age</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.age}}</mat-cell>\n      </ng-container>\n      <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  </section>\n\n  <section>\n    <h2>Paginated Table</h2>\n    <p>Shows name, color and age data. Shows only first 5 until paginated.</p>\n    <mat-table [dataSource]=\"paginatedDataSource\"\n               aria-readonly=\"true\"\n               aria-label=\"Users favorite colors and age\">\n      <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.name}}</mat-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"color\">\n        <mat-header-cell *cdkHeaderCellDef>Color</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.color}}</mat-cell>\n      </ng-container>\n      <ng-container cdkColumnDef=\"age\">\n        <mat-header-cell *cdkHeaderCellDef>Age</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\">{{row.age}}</mat-cell>\n      </ng-container>\n      <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator\n                   [length]=\"6\"\n                   [pageIndex]=\"0\"\n                   [pageSize]=\"3\"\n                   [pageSizeOptions]=\"[1, 3, 5]\">\n    </mat-paginator>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/toolbar/toolbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/toolbar/toolbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <div class=\"demo-toolbar\">\n    <section>\n      <h2>Basic Toolbar with Text (e.g. Only display app’s name)</h2>\n      <mat-toolbar role=\"heading\">\n        <h1>My App</h1>\n      </mat-toolbar>\n      <p>Hello World!</p>\n    </section>\n\n    <section>\n      <h2>Multiple Lines Toolbar</h2>\n      <mat-toolbar>\n        <h1>Settings</h1>\n      </mat-toolbar>\n      <mat-toolbar>\n        <h1>Profile</h1>\n      </mat-toolbar>\n      <p>My profile</p>\n    </section>\n\n    <section>\n      <h2>Toolbar with favorite icon</h2>\n      <mat-toolbar>\n        <h1>My App</h1>\n        <span class=\"demo-spacer\"></span>\n        <button mat-button>\n          <mat-icon aria-label=\"favorite\">favorite</mat-icon>\n        </button>\n      </mat-toolbar>\n      <p>Hello World!</p>\n    </section>\n\n    <section>\n      <h2>Toolbar colors</h2>\n      <mat-toolbar color=\"primary\">\n        <h1>My App</h1>\n      </mat-toolbar>\n      <p>Hello World!</p>\n    </section>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/tooltip/tooltip.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/tooltip/tooltip.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <section>\n    <h2>Mouse over or tab to trigger a tooltip</h2>\n    <p>Mouse over or focus the button to show and hide the tooltip</p>\n    <button mat-raised-button matTooltip=\"This is an example of a tooltip\">What is this?</button>\n  </section>\n\n\n  <section>\n    <h2>Click to trigger a tooltip</h2>\n    <button mat-raised-button (click)=\"tooltip.toggle(); $event.stopPropagation()\">Toggle the\n      tooltip</button>\n    <button mat-raised-button matTooltip=\"This is a tooltip that shows on click\"\n            #tooltip=\"matTooltip\">I have a\n      tooltip</button>\n  </section>\n\n\n  <section>\n    <h2>Different tooltip positions</h2>\n\n    <button mat-raised-button\n            matTooltip=\"This tooltip appears below the trigger\"\n            matTooltipPosition=\"below\">Below</button>\n\n    <button mat-raised-button\n            matTooltip=\"This tooltip appears above the trigger\"\n            matTooltipPosition=\"above\">Above</button>\n\n    <button mat-raised-button\n            matTooltip=\"This tooltip appears to the left of the trigger\"\n            matTooltipPosition=\"left\">Left</button>\n\n    <button mat-raised-button\n            matTooltip=\"This tooltip appears to the right of the trigger\"\n            matTooltipPosition=\"right\">Right</button>\n  </section>\n\n  <section>\n    <h2>Delayed tooltip</h2>\n    <button mat-raised-button\n            matTooltip=\"This tooltip will show up after a delay\"\n            [matTooltipShowDelay]=\"2000\">What is this?</button>\n  </section>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/material/tree/tree.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/material/tree/tree.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<breadcrumb></breadcrumb>\n\n<mat-card>\n  <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n      <button mat-icon-button disabled></button>\n      {{node.item}}\n    </mat-tree-node>\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n      <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.item}}\n      <mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\"\n                        class=\"example-tree-progress-bar\"></mat-progress-bar>\n    </mat-tree-node>\n  </mat-tree>\n</mat-card>"

/***/ }),

/***/ "./src/app/routes/material/autocomplete/autocomplete.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/material/autocomplete/autocomplete.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir=rtl] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1vcHRpb24taW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbltkaXI9J3J0bCddIC5leGFtcGxlLW9wdGlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4iLCIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtb3B0aW9uLWltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5bZGlyPXJ0bF0gLmV4YW1wbGUtb3B0aW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/autocomplete/autocomplete.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/material/autocomplete/autocomplete.component.ts ***!
  \************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AutocompleteComponent = class AutocompleteComponent {
    constructor() {
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'AK', name: 'Alaska' },
            { code: 'AZ', name: 'Arizona' },
            { code: 'AR', name: 'Arkansas' },
            { code: 'CA', name: 'California' },
            { code: 'CO', name: 'Colorado' },
            { code: 'CT', name: 'Connecticut' },
            { code: 'DE', name: 'Delaware' },
            { code: 'FL', name: 'Florida' },
            { code: 'GA', name: 'Georgia' },
            { code: 'HI', name: 'Hawaii' },
            { code: 'ID', name: 'Idaho' },
            { code: 'IL', name: 'Illinois' },
            { code: 'IN', name: 'Indiana' },
            { code: 'IA', name: 'Iowa' },
            { code: 'KS', name: 'Kansas' },
            { code: 'KY', name: 'Kentucky' },
            { code: 'LA', name: 'Louisiana' },
            { code: 'ME', name: 'Maine' },
            { code: 'MD', name: 'Maryland' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'MI', name: 'Michigan' },
            { code: 'MN', name: 'Minnesota' },
            { code: 'MS', name: 'Mississippi' },
            { code: 'MO', name: 'Missouri' },
            { code: 'MT', name: 'Montana' },
            { code: 'NE', name: 'Nebraska' },
            { code: 'NV', name: 'Nevada' },
            { code: 'NH', name: 'New Hampshire' },
            { code: 'NJ', name: 'New Jersey' },
            { code: 'NM', name: 'New Mexico' },
            { code: 'NY', name: 'New York' },
            { code: 'NC', name: 'North Carolina' },
            { code: 'ND', name: 'North Dakota' },
            { code: 'OH', name: 'Ohio' },
            { code: 'OK', name: 'Oklahoma' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'RI', name: 'Rhode Island' },
            { code: 'SC', name: 'South Carolina' },
            { code: 'SD', name: 'South Dakota' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'TX', name: 'Texas' },
            { code: 'UT', name: 'Utah' },
            { code: 'VT', name: 'Vermont' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WA', name: 'Washington' },
            { code: 'WV', name: 'West Virginia' },
            { code: 'WI', name: 'Wisconsin' },
            { code: 'WY', name: 'Wyoming' },
        ];
        this.filteredStates = this.states;
    }
    filter(value) {
        if (value) {
            return this.states.filter(state => state.name.toLowerCase().startsWith(value.toLowerCase()));
        }
        return this.states;
    }
};
AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-autocomplete',
        template: __webpack_require__(/*! raw-loader!./autocomplete.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/autocomplete/autocomplete.component.html"),
        styles: [__webpack_require__(/*! ./autocomplete.component.scss */ "./src/app/routes/material/autocomplete/autocomplete.component.scss")]
    })
], AutocompleteComponent);



/***/ }),

/***/ "./src/app/routes/material/badge/badge.component.scss":
/*!************************************************************!*\
  !*** ./src/app/routes/material/badge/badge.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/material/badge/badge.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/badge/badge.component.ts ***!
  \**********************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BadgeComponent = class BadgeComponent {
    constructor() { }
    ngOnInit() {
    }
};
BadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-badge',
        template: __webpack_require__(/*! raw-loader!./badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/badge/badge.component.html"),
        styles: [__webpack_require__(/*! ./badge.component.scss */ "./src/app/routes/material/badge/badge.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BadgeComponent);



/***/ }),

/***/ "./src/app/routes/material/bottom-sheet/bottom-sheet.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/material/bottom-sheet/bottom-sheet.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/material/bottom-sheet/bottom-sheet.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/material/bottom-sheet/bottom-sheet.component.ts ***!
  \************************************************************************/
/*! exports provided: BottomSheetOverviewComponent, BottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewComponent", function() { return BottomSheetOverviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");



let BottomSheetOverviewComponent = class BottomSheetOverviewComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    openLink(event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
};
BottomSheetOverviewComponent.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }
];
BottomSheetOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bottom-sheet-overview-example-sheet',
        template: `
    <mat-nav-list>
      <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
        <span mat-line>Google Keep</span>
        <span mat-line>Add to a note</span>
      </a>

      <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
        <span mat-line>Google Docs</span>
        <span mat-line>Embed in a document</span>
      </a>

      <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
        <span mat-line>Google Plus</span>
        <span mat-line>Share with your friends</span>
      </a>

      <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
        <span mat-line>Google Hangouts</span>
        <span mat-line>Show to your coworkers</span>
      </a>
    </mat-nav-list>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"]])
], BottomSheetOverviewComponent);

let BottomSheetComponent = class BottomSheetComponent {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    openBottomSheet() {
        this.bottomSheet.open(BottomSheetOverviewComponent);
    }
    ngOnInit() { }
};
BottomSheetComponent.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] }
];
BottomSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottom-sheet',
        template: __webpack_require__(/*! raw-loader!./bottom-sheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/bottom-sheet/bottom-sheet.component.html"),
        styles: [__webpack_require__(/*! ./bottom-sheet.component.scss */ "./src/app/routes/material/bottom-sheet/bottom-sheet.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]])
], BottomSheetComponent);



/***/ }),

/***/ "./src/app/routes/material/button-toggle/button-toggle.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/routes/material/button-toggle/button-toggle.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/material/button-toggle/button-toggle.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/material/button-toggle/button-toggle.component.ts ***!
  \**************************************************************************/
/*! exports provided: ButtonToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToggleComponent", function() { return ButtonToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonToggleComponent = class ButtonToggleComponent {
    constructor() {
        this.favoritePie = 'Apple';
        this.pieOptions = ['Apple', 'Cherry', 'Pecan', 'Lemon'];
    }
};
ButtonToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-toggle',
        template: __webpack_require__(/*! raw-loader!./button-toggle.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/button-toggle/button-toggle.component.html"),
        styles: [__webpack_require__(/*! ./button-toggle.component.scss */ "./src/app/routes/material/button-toggle/button-toggle.component.scss")]
    })
], ButtonToggleComponent);



/***/ }),

/***/ "./src/app/routes/material/button/button.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/button/button.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-button button,\n.demo-button a {\n  margin: 8px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsV0FBQTtFQUNBLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWJ1dHRvbiB7XG4gIGJ1dHRvbixcbiAgYSB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuIiwiLmRlbW8tYnV0dG9uIGJ1dHRvbixcbi5kZW1vLWJ1dHRvbiBhIHtcbiAgbWFyZ2luOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/routes/material/button/button.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/material/button/button.component.ts ***!
  \************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ButtonComponent = class ButtonComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.counter = 0;
    }
    openSnackBar(message) {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    }
    increase() {
        this.counter++;
        this.openSnackBar(`Click counter is set to ${this.counter}`);
    }
};
ButtonComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button',
        template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/button/button.component.html"),
        styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/routes/material/button/button.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], ButtonComponent);



/***/ }),

/***/ "./src/app/routes/material/card/card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/card/card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-card button {\n  text-transform: uppercase;\n}\n\n.demo-card {\n  max-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tY2FyZCBidXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZGVtby1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbn1cbiIsIi5kZW1vLWNhcmQgYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlbW8tY2FyZCB7XG4gIG1heC13aWR0aDogNDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/routes/material/card/card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/material/card/card.component.ts ***!
  \********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let CardComponent = class CardComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.showProgress = false;
    }
    openSnackbar(message) {
        this.snackBar.open(message, '', { duration: 2000 });
    }
};
CardComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/card/card.component.html"),
        styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/routes/material/card/card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], CardComponent);



/***/ }),

/***/ "./src/app/routes/material/checkbox/checkbox.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/routes/material/checkbox/checkbox.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-sub-list {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1zdWItbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuIiwiLmRlbW8tc3ViLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/checkbox/checkbox.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/material/checkbox/checkbox.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckboxComponent = class CheckboxComponent {
    constructor() {
        this.tasks = [
            {
                name: 'Reminders',
                completed: false,
                subtasks: [
                    { name: 'Cook Dinner', completed: false },
                    { name: 'Read the Material Design Spec', completed: false },
                    { name: 'Upgrade Application to Angular', completed: false },
                ],
            },
            {
                name: 'Groceries',
                completed: false,
                subtasks: [
                    { name: 'Organic Eggs', completed: false },
                    { name: 'Protein Powder', completed: false },
                    { name: 'Almond Meal Flour', completed: false },
                ],
            },
        ];
    }
    allComplete(task) {
        const subtasks = task.subtasks;
        return task.completed || (subtasks != null && subtasks.every(t => t.completed));
    }
    someComplete(tasks) {
        const numComplete = tasks.filter(t => t.completed).length;
        return numComplete > 0 && numComplete < tasks.length;
    }
    setAllCompleted(tasks, completed) {
        tasks.forEach(t => (t.completed = completed));
    }
};
CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkbox',
        template: __webpack_require__(/*! raw-loader!./checkbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/checkbox/checkbox.component.html"),
        styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/routes/material/checkbox/checkbox.component.scss")]
    })
], CheckboxComponent);



/***/ }),

/***/ "./src/app/routes/material/chips/chips.component.scss":
/*!************************************************************!*\
  !*** ./src/app/routes/material/chips/chips.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/material/chips/chips.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/chips/chips.component.ts ***!
  \**********************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ChipsComponent = class ChipsComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.visible = true;
        this.color = '';
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.message = '';
        this.people = [
            { name: 'Kara' },
            { name: 'Jeremy' },
            { name: 'Topher' },
            { name: 'Elad' },
            { name: 'Kristiyan' },
            { name: 'Paul' },
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' },
        ];
    }
    displayMessage(message) {
        this.message = message;
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our person
        if ((value || '').trim()) {
            const name = value.trim();
            this.people.push({ name });
            this.snackBar.open(`${name} added`, '', { duration: 2000 });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(person) {
        const index = this.people.indexOf(person);
        if (index >= 0) {
            this.people.splice(index, 1);
            this.snackBar.open(`${person.name} deleted`, '', { duration: 2000 });
        }
    }
    toggleVisible() {
        this.visible = false;
    }
};
ChipsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ChipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chips',
        template: __webpack_require__(/*! raw-loader!./chips.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/chips/chips.component.html"),
        styles: [__webpack_require__(/*! ./chips.component.scss */ "./src/app/routes/material/chips/chips.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], ChipsComponent);



/***/ }),

/***/ "./src/app/routes/material/datepicker/datepicker.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/routes/material/datepicker/datepicker.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/material/datepicker/datepicker.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/material/datepicker/datepicker.component.ts ***!
  \********************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DatepickerComponent = class DatepickerComponent {
    constructor() {
        this.maxBirthday = new Date();
        this.paymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
        this.minPaymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
        this.minTripDate = new Date();
        this.maxTripDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
        this.startTripDate = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);
        this.minAppointmentDate = new Date();
        this.maxAppointmentDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
        this.weekdaysOnly = (d) => d.getDay() !== 0 && d.getDay() !== 6;
    }
};
DatepickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datepicker',
        template: __webpack_require__(/*! raw-loader!./datepicker.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/datepicker/datepicker.component.html"),
        styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/routes/material/datepicker/datepicker.component.scss")]
    })
], DatepickerComponent);



/***/ }),

/***/ "./src/app/routes/material/dialog/dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/dialog/dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/material/dialog/dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/material/dialog/dialog.component.ts ***!
  \************************************************************/
/*! exports provided: DialogComponent, DialogFruitComponent, DialogWelcomeComponent, DialogNeptuneComponent, DialogNeptuneIFrameComponent, DialogAddressFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFruitComponent", function() { return DialogFruitComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWelcomeComponent", function() { return DialogWelcomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNeptuneComponent", function() { return DialogNeptuneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNeptuneIFrameComponent", function() { return DialogNeptuneIFrameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddressFormComponent", function() { return DialogAddressFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let DialogComponent = class DialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.fruitSelectedOption = '';
    }
    openFruitDialog() {
        const dialogRef = this.dialog.open(DialogFruitComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.fruitSelectedOption = result;
        });
    }
    openWelcomeDialog() {
        this.dialog.open(DialogWelcomeComponent);
    }
    openNeptuneDialog() {
        this.dialog.open(DialogNeptuneComponent);
    }
    openAddressDialog() {
        this.dialog.open(DialogAddressFormComponent);
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog.component.html"),
        styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/routes/material/dialog/dialog.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], DialogComponent);

// Dialog
let DialogFruitComponent = class DialogFruitComponent {
};
DialogFruitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-fruit',
        template: __webpack_require__(/*! raw-loader!./dialog-fruit.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-fruit.html"),
    })
], DialogFruitComponent);

let DialogWelcomeComponent = class DialogWelcomeComponent {
};
DialogWelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-welcome',
        template: __webpack_require__(/*! raw-loader!./dialog-welcome.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-welcome.html"),
    })
], DialogWelcomeComponent);

let DialogNeptuneComponent = class DialogNeptuneComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    showInStackedDialog() {
        this.dialog.open(DialogNeptuneIFrameComponent);
    }
};
DialogNeptuneComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogNeptuneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-neptune-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog-neptune.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-neptune.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], DialogNeptuneComponent);

let DialogNeptuneIFrameComponent = class DialogNeptuneIFrameComponent {
};
DialogNeptuneIFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-neptune-iframe-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog-neptune-iframe.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-neptune-iframe.html"),
        styles: ["\n      iframe {\n        width: 800px;\n      }\n    "]
    })
], DialogNeptuneIFrameComponent);

let DialogAddressFormComponent = class DialogAddressFormComponent {
};
DialogAddressFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-address-form',
        template: __webpack_require__(/*! raw-loader!./dialog-address-form.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/dialog/dialog-address-form.html"),
        styles: ["\n      .demo-full-width {\n        width: 100%;\n      }\n    "]
    })
], DialogAddressFormComponent);



/***/ }),

/***/ "./src/app/routes/material/divider/divider.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/material/divider/divider.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/material/divider/divider.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/divider/divider.component.ts ***!
  \**************************************************************/
/*! exports provided: DividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DividerComponent = class DividerComponent {
    constructor() { }
    ngOnInit() {
    }
};
DividerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-divider',
        template: __webpack_require__(/*! raw-loader!./divider.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/divider/divider.component.html"),
        styles: [__webpack_require__(/*! ./divider.component.scss */ "./src/app/routes/material/divider/divider.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DividerComponent);



/***/ }),

/***/ "./src/app/routes/material/expansion-panel/expansion-panel.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/routes/material/expansion-panel/expansion-panel.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-expansion button,\n.demo-expansion a {\n  margin: 8px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsV0FBQTtFQUNBLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWV4cGFuc2lvbiB7XG4gIGJ1dHRvbixcbiAgYSB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuIiwiLmRlbW8tZXhwYW5zaW9uIGJ1dHRvbixcbi5kZW1vLWV4cGFuc2lvbiBhIHtcbiAgbWFyZ2luOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/routes/material/expansion-panel/expansion-panel.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/material/expansion-panel/expansion-panel.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpansionPanelComponent = class ExpansionPanelComponent {
    constructor() {
        this.panelOpenState = false;
    }
};
ExpansionPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expansion-panel',
        template: __webpack_require__(/*! raw-loader!./expansion-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/expansion-panel/expansion-panel.component.html"),
        styles: [__webpack_require__(/*! ./expansion-panel.component.scss */ "./src/app/routes/material/expansion-panel/expansion-panel.component.scss")]
    })
], ExpansionPanelComponent);



/***/ }),

/***/ "./src/app/routes/material/form-field/form-field.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/routes/material/form-field/form-field.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIGZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgZm9ybSA+ICoge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDAgNXB4O1xufVxuIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciBmb3JtID4gKiB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/routes/material/form-field/form-field.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/material/form-field/form-field.component.ts ***!
  \********************************************************************/
/*! exports provided: FormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function() { return FormFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let FormFieldComponent = class FormFieldComponent {
    constructor(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    ngOnInit() { }
};
FormFieldComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FormFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-field',
        template: __webpack_require__(/*! raw-loader!./form-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/form-field/form-field.component.html"),
        styles: [__webpack_require__(/*! ./form-field.component.scss */ "./src/app/routes/material/form-field/form-field.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], FormFieldComponent);



/***/ }),

/***/ "./src/app/routes/material/grid-list/grid-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routes/material/grid-list/grid-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufVxuIiwibWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/grid-list/grid-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/material/grid-list/grid-list.component.ts ***!
  \******************************************************************/
/*! exports provided: GridListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridListComponent", function() { return GridListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GridListComponent = class GridListComponent {
    constructor() {
        this.dogs = [
            { name: 'Porter', human: 'Kara' },
            { name: 'Mal', human: 'Jeremy' },
            { name: 'Koby', human: 'Igor' },
            { name: 'Razzle', human: 'Ward' },
            { name: 'Molly', human: 'Rob' },
            { name: 'Husi', human: 'Matias' },
        ];
        this.tiles = [
            { text: 'Cappuccino', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Mocha', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Latte', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Iced coffee', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.fixedCols = 4;
        this.fixedRowHeight = 100;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
};
GridListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid-list',
        template: __webpack_require__(/*! raw-loader!./grid-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/grid-list/grid-list.component.html"),
        styles: [__webpack_require__(/*! ./grid-list.component.scss */ "./src/app/routes/material/grid-list/grid-list.component.scss")]
    })
], GridListComponent);



/***/ }),

/***/ "./src/app/routes/material/icon/icon.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/icon/icon.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9pY29uL2ljb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/material/icon/icon.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/material/icon/icon.component.ts ***!
  \********************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let IconComponent = class IconComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    deleteIcon() {
        this.snackBar.open('Item deleted', '', { duration: 2000 });
    }
};
IconComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-icon',
        template: __webpack_require__(/*! raw-loader!./icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/icon/icon.component.html"),
        styles: [__webpack_require__(/*! ./icon.component.scss */ "./src/app/routes/material/icon/icon.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], IconComponent);



/***/ }),

/***/ "./src/app/routes/material/input/input.component.scss":
/*!************************************************************!*\
  !*** ./src/app/routes/material/input/input.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/routes/material/input/input.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/input/input.component.ts ***!
  \**********************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const USD_TO_JPY = 110.29;
let InputComponent = class InputComponent {
    constructor() {
        this.showPassword = false;
        this.commentMax = 200;
    }
    get passwordType() {
        return this.showPassword ? 'text' : 'password';
    }
    get passwordToggleLabel() {
        return this.showPassword ? 'Hide password' : 'Reveal password';
    }
    get passwordToggleIcon() {
        return this.showPassword ? 'visibility_off' : 'visibility';
    }
    get jpy() {
        return this.usd ? this.usd * USD_TO_JPY : this.usd;
    }
    set jpy(value) {
        this.usd = value ? value / USD_TO_JPY : value;
    }
    get commentCount() {
        return this.comment ? this.comment.length : 0;
    }
};
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/input/input.component.html"),
        styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/routes/material/input/input.component.scss")]
    })
], InputComponent);



/***/ }),

/***/ "./src/app/routes/material/list/list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/list/list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-list .mat-list,\n.demo-list .mat-nav-list {\n  max-width: 350px;\n  margin: 20px 20px 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.demo-list .demo-secondary-text {\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtBQ0FKO0FER0U7RUFDRSwwQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL21hdGVyaWFsL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWxpc3Qge1xuICAubWF0LWxpc3QsXG4gIC5tYXQtbmF2LWxpc3Qge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgfVxuXG4gIC5kZW1vLXNlY29uZGFyeS10ZXh0IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xuICB9XG59XG4iLCIuZGVtby1saXN0IC5tYXQtbGlzdCxcbi5kZW1vLWxpc3QgLm1hdC1uYXYtbGlzdCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMjBweCAyMHB4IDAgMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kZW1vLWxpc3QgLmRlbW8tc2Vjb25kYXJ5LXRleHQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/list/list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/material/list/list.component.ts ***!
  \********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() {
        this.items = ['Pepper', 'Salt', 'Paprika'];
        this.messages = [
            {
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: 'https://angular.io/generated/images/bios/julie-ralph.jpg',
            },
            {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: 'https://angular.io/generated/images/bios/juleskremer.jpg',
            },
            {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: 'https://angular.io/generated/images/bios/jelbourn.jpg',
            },
        ];
        this.links = [{ name: 'Inbox' }, { name: 'Outbox' }, { name: 'Spam' }, { name: 'Trash' }];
        this.folders = [
            { name: 'Imported', updated: 'Miles' },
            { name: 'Important', updated: 'Tina' },
            { name: 'Unread', updated: 'Jeremy' },
        ];
        this.notes = [
            { name: 'Update screenshots', updated: 'Kara' },
            { name: 'Install new application', updated: 'Andrew' },
        ];
    }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/list/list.component.html"),
        styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/routes/material/list/list.component.scss")]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/routes/material/material-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/material/material-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutingModule", function() { return MaterialRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "./src/app/routes/material/card/card.component.ts");
/* harmony import */ var _divider_divider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./divider/divider.component */ "./src/app/routes/material/divider/divider.component.ts");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "./src/app/routes/material/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-list/grid-list.component */ "./src/app/routes/material/grid-list/grid-list.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/routes/material/list/list.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/routes/material/stepper/stepper.component.ts");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/routes/material/tab/tab.component.ts");
/* harmony import */ var _tab_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tab/routes */ "./src/app/routes/material/tab/routes.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/routes/material/tree/tree.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/routes/material/menu/menu.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/routes/material/sidenav/sidenav.component.ts");
/* harmony import */ var _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidenav/basic-sidenav */ "./src/app/routes/material/sidenav/basic-sidenav.ts");
/* harmony import */ var _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidenav/dual-sidenav */ "./src/app/routes/material/sidenav/dual-sidenav.ts");
/* harmony import */ var _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidenav/mobile-sidenav */ "./src/app/routes/material/sidenav/mobile-sidenav.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/routes/material/toolbar/toolbar.component.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/routes/material/autocomplete/autocomplete.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/routes/material/checkbox/checkbox.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/routes/material/datepicker/datepicker.component.ts");
/* harmony import */ var _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form-field/form-field.component */ "./src/app/routes/material/form-field/form-field.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./input/input.component */ "./src/app/routes/material/input/input.component.ts");
/* harmony import */ var _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./radio-button/radio-button.component */ "./src/app/routes/material/radio-button/radio-button.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./select/select.component */ "./src/app/routes/material/select/select.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/routes/material/slider/slider.component.ts");
/* harmony import */ var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./slide-toggle/slide-toggle.component */ "./src/app/routes/material/slide-toggle/slide-toggle.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./button/button.component */ "./src/app/routes/material/button/button.component.ts");
/* harmony import */ var _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./button-toggle/button-toggle.component */ "./src/app/routes/material/button-toggle/button-toggle.component.ts");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./badge/badge.component */ "./src/app/routes/material/badge/badge.component.ts");
/* harmony import */ var _chips_chips_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./chips/chips.component */ "./src/app/routes/material/chips/chips.component.ts");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./icon/icon.component */ "./src/app/routes/material/icon/icon.component.ts");
/* harmony import */ var _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./progress-spinner/progress-spinner.component */ "./src/app/routes/material/progress-spinner/progress-spinner.component.ts");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "./src/app/routes/material/progress-bar/progress-bar.component.ts");
/* harmony import */ var _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ripple/ripple.component */ "./src/app/routes/material/ripple/ripple.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet.component */ "./src/app/routes/material/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/routes/material/dialog/dialog.component.ts");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./src/app/routes/material/snack-bar/snack-bar.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/routes/material/tooltip/tooltip.component.ts");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./paginator/paginator.component */ "./src/app/routes/material/paginator/paginator.component.ts");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/routes/material/sort/sort.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./table/table.component */ "./src/app/routes/material/table/table.component.ts");










































const routes = [
    { path: 'autocomplete', component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_18__["AutocompleteComponent"], data: { title: 'Autocomplete' } },
    { path: 'checkbox', component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["CheckboxComponent"], data: { title: 'Checkbox' } },
    { path: 'datepicker', component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_20__["DatepickerComponent"], data: { title: 'Datepicker' } },
    { path: 'form-field', component: _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_21__["FormFieldComponent"], data: { title: 'Form Field' } },
    { path: 'input', component: _input_input_component__WEBPACK_IMPORTED_MODULE_22__["InputComponent"], data: { title: 'Input' } },
    { path: 'radio', component: _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_23__["RadioButtonComponent"], data: { title: 'Radio' } },
    { path: 'select', component: _select_select_component__WEBPACK_IMPORTED_MODULE_24__["SelectComponent"], data: { title: 'Select' } },
    { path: 'slider', component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_25__["SliderComponent"], data: { title: 'Slider' } },
    { path: 'slide-toggle', component: _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_26__["SlideToggleComponent"], data: { title: 'Slide Toggle' } },
    // layout
    { path: 'card', component: _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], data: { title: 'Card' } },
    { path: 'divider', component: _divider_divider_component__WEBPACK_IMPORTED_MODULE_4__["DividerComponent"], data: { title: 'Divider' } },
    { path: 'expansion', component: _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_5__["ExpansionPanelComponent"], data: { title: 'Expansion Panel' } },
    { path: 'grid-list', component: _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_6__["GridListComponent"], data: { title: 'Grid' } },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], data: { title: 'List' } },
    { path: 'stepper', component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__["StepperComponent"], data: { title: 'Stepper' } },
    { path: 'tab', component: _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__["TabComponent"], children: _tab_routes__WEBPACK_IMPORTED_MODULE_10__["TABS_DEMO_ROUTES"], data: { title: 'Tab' } },
    { path: 'tree', component: _tree_tree_component__WEBPACK_IMPORTED_MODULE_11__["TreeComponent"], data: { title: 'Tree' } },
    // navigation
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"], data: { title: 'Menu' } },
    { path: 'sidenav', component: _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["SidenavComponent"], data: { title: 'Sidenav' } },
    { path: 'sidenav/basic', component: _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_14__["SidenavBasicComponent"], data: { fullscreen: true } },
    { path: 'sidenav/dual', component: _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_15__["SidenavDualComponent"], data: { fullscreen: true } },
    { path: 'sidenav/mobile', component: _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_16__["SidenavMobileComponent"], data: { fullscreen: true } },
    { path: 'toolbar', component: _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["ToolbarComponent"], data: { title: 'Toolbar' } },
    // buttons-indicators
    { path: 'button', component: _button_button_component__WEBPACK_IMPORTED_MODULE_27__["ButtonComponent"], data: { title: 'Button' } },
    { path: 'button-toggle', component: _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_28__["ButtonToggleComponent"], data: { title: 'Button Toggle' } },
    { path: 'badge', component: _badge_badge_component__WEBPACK_IMPORTED_MODULE_29__["BadgeComponent"], data: { title: 'Badge' } },
    { path: 'chips', component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_30__["ChipsComponent"], data: { title: 'Chips' } },
    { path: 'icon', component: _icon_icon_component__WEBPACK_IMPORTED_MODULE_31__["IconComponent"], data: { title: 'Icon' } },
    {
        path: 'progress-spinner',
        component: _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_32__["ProgressSpinnerComponent"],
        data: { title: 'Progress Spinner' },
    },
    { path: 'progress-bar', component: _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_33__["ProgressBarComponent"], data: { title: 'Progress Bar' } },
    { path: 'ripple', component: _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_34__["RippleComponent"], data: { title: 'Ripple' } },
    // popups-modals
    { path: 'bottom-sheet', component: _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_35__["BottomSheetComponent"], data: { title: 'Button Sheet' } },
    { path: 'dialog', component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DialogComponent"], data: { title: 'Dialog' } },
    { path: 'snack-bar', component: _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_37__["SnackBarComponent"], data: { title: 'Snack Bar' } },
    { path: 'tooltip', component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__["TooltipComponent"], data: { title: 'Tooltip' } },
    // Data table
    { path: 'data-table/paginator', component: _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_39__["PaginatorComponent"], data: { title: 'Paginator' } },
    { path: 'data-table/sort', component: _sort_sort_component__WEBPACK_IMPORTED_MODULE_40__["SortComponent"], data: { title: 'Sort' } },
    { path: 'data-table/table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_41__["TableComponent"], data: { title: 'Table' } },
];
let MaterialRoutingModule = class MaterialRoutingModule {
};
MaterialRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MaterialRoutingModule);



/***/ }),

/***/ "./src/app/routes/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-routing.module */ "./src/app/routes/material/material-routing.module.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ "./src/app/routes/material/card/card.component.ts");
/* harmony import */ var _divider_divider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./divider/divider.component */ "./src/app/routes/material/divider/divider.component.ts");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "./src/app/routes/material/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid-list/grid-list.component */ "./src/app/routes/material/grid-list/grid-list.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/routes/material/list/list.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/routes/material/stepper/stepper.component.ts");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/routes/material/tab/tab.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/routes/material/tree/tree.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/routes/material/menu/menu.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/routes/material/sidenav/sidenav.component.ts");
/* harmony import */ var _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidenav/basic-sidenav */ "./src/app/routes/material/sidenav/basic-sidenav.ts");
/* harmony import */ var _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidenav/dual-sidenav */ "./src/app/routes/material/sidenav/dual-sidenav.ts");
/* harmony import */ var _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidenav/mobile-sidenav */ "./src/app/routes/material/sidenav/mobile-sidenav.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/routes/material/toolbar/toolbar.component.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/routes/material/autocomplete/autocomplete.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/routes/material/checkbox/checkbox.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/routes/material/datepicker/datepicker.component.ts");
/* harmony import */ var _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form-field/form-field.component */ "./src/app/routes/material/form-field/form-field.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./input/input.component */ "./src/app/routes/material/input/input.component.ts");
/* harmony import */ var _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./radio-button/radio-button.component */ "./src/app/routes/material/radio-button/radio-button.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./select/select.component */ "./src/app/routes/material/select/select.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/routes/material/slider/slider.component.ts");
/* harmony import */ var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./slide-toggle/slide-toggle.component */ "./src/app/routes/material/slide-toggle/slide-toggle.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./button/button.component */ "./src/app/routes/material/button/button.component.ts");
/* harmony import */ var _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./button-toggle/button-toggle.component */ "./src/app/routes/material/button-toggle/button-toggle.component.ts");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./badge/badge.component */ "./src/app/routes/material/badge/badge.component.ts");
/* harmony import */ var _chips_chips_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./chips/chips.component */ "./src/app/routes/material/chips/chips.component.ts");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./icon/icon.component */ "./src/app/routes/material/icon/icon.component.ts");
/* harmony import */ var _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./progress-spinner/progress-spinner.component */ "./src/app/routes/material/progress-spinner/progress-spinner.component.ts");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "./src/app/routes/material/progress-bar/progress-bar.component.ts");
/* harmony import */ var _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ripple/ripple.component */ "./src/app/routes/material/ripple/ripple.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet.component */ "./src/app/routes/material/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/routes/material/dialog/dialog.component.ts");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./src/app/routes/material/snack-bar/snack-bar.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/routes/material/tooltip/tooltip.component.ts");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./paginator/paginator.component */ "./src/app/routes/material/paginator/paginator.component.ts");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/routes/material/sort/sort.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./table/table.component */ "./src/app/routes/material/table/table.component.ts");











































const COMPONENTS = [
    _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
    _divider_divider_component__WEBPACK_IMPORTED_MODULE_5__["DividerComponent"],
    _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_6__["ExpansionPanelComponent"],
    _grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_7__["GridListComponent"],
    _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
    _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_9__["StepperComponent"],
    _tab_tab_component__WEBPACK_IMPORTED_MODULE_10__["TabComponent"],
    _tab_tab_component__WEBPACK_IMPORTED_MODULE_10__["FoggyTabContentComponent"],
    _tab_tab_component__WEBPACK_IMPORTED_MODULE_10__["RainyTabContentComponent"],
    _tab_tab_component__WEBPACK_IMPORTED_MODULE_10__["SunnyTabContentComponent"],
    _tree_tree_component__WEBPACK_IMPORTED_MODULE_11__["TreeComponent"],
    _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["SidenavComponent"],
    _sidenav_basic_sidenav__WEBPACK_IMPORTED_MODULE_14__["SidenavBasicComponent"],
    _sidenav_dual_sidenav__WEBPACK_IMPORTED_MODULE_15__["SidenavDualComponent"],
    _sidenav_mobile_sidenav__WEBPACK_IMPORTED_MODULE_16__["SidenavMobileComponent"],
    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["ToolbarComponent"],
    _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_18__["AutocompleteComponent"],
    _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["CheckboxComponent"],
    _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_20__["DatepickerComponent"],
    _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_21__["FormFieldComponent"],
    _input_input_component__WEBPACK_IMPORTED_MODULE_22__["InputComponent"],
    _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_23__["RadioButtonComponent"],
    _select_select_component__WEBPACK_IMPORTED_MODULE_24__["SelectComponent"],
    _slider_slider_component__WEBPACK_IMPORTED_MODULE_25__["SliderComponent"],
    _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_26__["SlideToggleComponent"],
    _button_button_component__WEBPACK_IMPORTED_MODULE_27__["ButtonComponent"],
    _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_28__["ButtonToggleComponent"],
    _badge_badge_component__WEBPACK_IMPORTED_MODULE_29__["BadgeComponent"],
    _chips_chips_component__WEBPACK_IMPORTED_MODULE_30__["ChipsComponent"],
    _icon_icon_component__WEBPACK_IMPORTED_MODULE_31__["IconComponent"],
    _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_32__["ProgressSpinnerComponent"],
    _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_33__["ProgressBarComponent"],
    _ripple_ripple_component__WEBPACK_IMPORTED_MODULE_34__["RippleComponent"],
    _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_35__["BottomSheetComponent"],
    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DialogComponent"],
    _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_37__["SnackBarComponent"],
    _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_38__["TooltipComponent"],
    _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_39__["PaginatorComponent"],
    _sort_sort_component__WEBPACK_IMPORTED_MODULE_40__["SortComponent"],
    _table_table_component__WEBPACK_IMPORTED_MODULE_41__["TableComponent"],
];
const COMPONENTS_DYNAMIC = [
    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DialogAddressFormComponent"],
    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DialogFruitComponent"],
    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DialogNeptuneComponent"],
    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DialogNeptuneIFrameComponent"],
    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DialogWelcomeComponent"],
    _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_35__["BottomSheetOverviewComponent"],
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _material_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaterialRoutingModule"]],
        declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
        entryComponents: COMPONENTS_DYNAMIC,
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/routes/material/menu/menu.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/menu/menu.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-menu section {\n  display: flex;\n  align-items: center;\n  margin: 8px;\n}\n.demo-menu p {\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0U7RUFDRSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL21hdGVyaWFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLW1lbnUge1xuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICBwIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgfVxufVxuIiwiLmRlbW8tbWVudSBzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG59XG4uZGVtby1tZW51IHAge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/menu/menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/material/menu/menu.component.ts ***!
  \********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/routes/material/menu/menu.component.scss")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/routes/material/paginator/paginator.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routes/material/paginator/paginator.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/material/paginator/paginator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/material/paginator/paginator.component.ts ***!
  \******************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginatorComponent = class PaginatorComponent {
    constructor() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
};
PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginator',
        template: __webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/paginator/paginator.component.html"),
        styles: [__webpack_require__(/*! ./paginator.component.scss */ "./src/app/routes/material/paginator/paginator.component.scss")]
    })
], PaginatorComponent);



/***/ }),

/***/ "./src/app/routes/material/progress-bar/progress-bar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/material/progress-bar/progress-bar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4iLCIuZXhhbXBsZS1oMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/progress-bar/progress-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/material/progress-bar/progress-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressBarComponent = class ProgressBarComponent {
    constructor() {
        this.surveyProgress = 30;
        this.videoPlayValue = 20;
        this.videoBufferValue = 60;
    }
};
ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-bar',
        template: __webpack_require__(/*! raw-loader!./progress-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/progress-bar/progress-bar.component.html"),
        styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/routes/material/progress-bar/progress-bar.component.scss")]
    })
], ProgressBarComponent);



/***/ }),

/***/ "./src/app/routes/material/progress-spinner/progress-spinner.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/material/progress-spinner/progress-spinner.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4iLCIuZXhhbXBsZS1oMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/progress-spinner/progress-spinner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/routes/material/progress-spinner/progress-spinner.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProgressSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerComponent", function() { return ProgressSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressSpinnerComponent = class ProgressSpinnerComponent {
    constructor() {
        this.portionValue = 60;
    }
};
ProgressSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-spinner',
        template: __webpack_require__(/*! raw-loader!./progress-spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/progress-spinner/progress-spinner.component.html"),
        styles: [__webpack_require__(/*! ./progress-spinner.component.scss */ "./src/app/routes/material/progress-spinner/progress-spinner.component.scss")]
    })
], ProgressSpinnerComponent);



/***/ }),

/***/ "./src/app/routes/material/radio-button/radio-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/material/radio-button/radio-button.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZXhhbXBsZS1zZWxlY3RlZC12YWx1ZSB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuIiwiLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5leGFtcGxlLXNlbGVjdGVkLXZhbHVlIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/routes/material/radio-button/radio-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/material/radio-button/radio-button.component.ts ***!
  \************************************************************************/
/*! exports provided: RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RadioButtonComponent = class RadioButtonComponent {
    constructor() {
        this.favoriteSeason = 'Autumn';
        this.seasonOptions = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
};
RadioButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-radio-button',
        template: __webpack_require__(/*! raw-loader!./radio-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/radio-button/radio-button.component.html"),
        styles: [__webpack_require__(/*! ./radio-button.component.scss */ "./src/app/routes/material/radio-button/radio-button.component.scss")]
    })
], RadioButtonComponent);



/***/ }),

/***/ "./src/app/routes/material/ripple/ripple.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/ripple/ripple.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvcmlwcGxlL3JpcHBsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3JpcHBsZS9yaXBwbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FDQ0Y7O0FERUEsMENBQUE7O0FBQ0E7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9yaXBwbGUvcmlwcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKiBTdHlsZXMgdG8gbWFrZSB0aGUgZGVtbyBsb29rIGJldHRlci4gKi9cbi5leGFtcGxlLXJpcHBsZS1jaGVja2JveCB7XG4gIG1hcmdpbjogNnB4IDEycHggNnB4IDA7XG59XG5cbi5leGFtcGxlLXJpcHBsZS1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xufVxuIiwiLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKiBTdHlsZXMgdG8gbWFrZSB0aGUgZGVtbyBsb29rIGJldHRlci4gKi9cbi5leGFtcGxlLXJpcHBsZS1jaGVja2JveCB7XG4gIG1hcmdpbjogNnB4IDEycHggNnB4IDA7XG59XG5cbi5leGFtcGxlLXJpcHBsZS1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/routes/material/ripple/ripple.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/material/ripple/ripple.component.ts ***!
  \************************************************************/
/*! exports provided: RippleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleComponent", function() { return RippleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RippleComponent = class RippleComponent {
    constructor() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
};
RippleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ripple',
        template: __webpack_require__(/*! raw-loader!./ripple.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/ripple/ripple.component.html"),
        styles: [__webpack_require__(/*! ./ripple.component.scss */ "./src/app/routes/material/ripple/ripple.component.scss")]
    })
], RippleComponent);



/***/ }),

/***/ "./src/app/routes/material/select/select.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/select/select.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-select-a11y-spacer {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1zZWxlY3QtYTExeS1zcGFjZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIiwiLmRlbW8tc2VsZWN0LWExMXktc3BhY2VyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/select/select.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/material/select/select.component.ts ***!
  \************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectComponent = class SelectComponent {
    constructor() {
        this.colors = [
            { value: 'red', label: 'Red' },
            { value: 'green', label: 'Green' },
            { value: 'blue', label: 'Blue' },
            { value: 'cyan', label: 'Cyan' },
            { value: 'magenta', label: 'Magenta' },
            { value: 'yellow', label: 'Yellow' },
            { value: 'black', label: 'Black' },
        ];
        this.toppings = [
            { value: 'pepperoni', label: 'Pepperoni' },
            { value: 'mushrooms', label: 'Mushrooms' },
            { value: 'onions', label: 'Onions' },
            { value: 'sausage', label: 'Sausage' },
            { value: 'bacon', label: 'Bacon' },
            { value: 'cheese', label: 'Cheese' },
            { value: 'olives', label: 'Olives' },
            { value: 'peppers', label: 'Peppers' },
            { value: 'pineapple', label: 'Pineapple' },
            { value: 'spinach', label: 'Spinach' },
        ];
        this.pokemon = [
            {
                label: 'Grass',
                pokemon: [
                    { value: 'bulbasaur', label: 'Bulbasaur' },
                    { value: 'oddish', label: 'Oddish' },
                    { value: 'bellsprout', label: 'Bellsprout' },
                ],
            },
            {
                label: 'Water',
                pokemon: [
                    { value: 'squirtle', label: 'Squirtle' },
                    { value: 'psyduck', label: 'Psyduck' },
                    { value: 'horsea', label: 'Horsea' },
                ],
            },
            {
                label: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander', label: 'Charmander' },
                    { value: 'vulpix', label: 'Vulpix' },
                    { value: 'flareon', label: 'Flareon' },
                ],
            },
            {
                label: 'Psychic',
                pokemon: [{ value: 'mew', label: 'Mew' }, { value: 'mewtwo', label: 'Mewtwo' }],
            },
        ];
    }
};
SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select',
        template: __webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/select/select.component.html"),
        styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/routes/material/select/select.component.scss")]
    })
], SelectComponent);



/***/ }),

/***/ "./src/app/routes/material/sidenav/basic-sidenav.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/sidenav/basic-sidenav.ts ***!
  \**********************************************************/
/*! exports provided: SidenavBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavBasicComponent", function() { return SidenavBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let SidenavBasicComponent = class SidenavBasicComponent {
};
SidenavBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'basic-sidenav',
        template: __webpack_require__(/*! raw-loader!./basic-sidenav.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/sidenav/basic-sidenav.html"),
        host: { class: 'demo-sidenav-app' },
        styles: [__webpack_require__(/*! ./shared.scss */ "./src/app/routes/material/sidenav/shared.scss")]
    })
], SidenavBasicComponent);



/***/ }),

/***/ "./src/app/routes/material/sidenav/dual-sidenav.scss":
/*!***********************************************************!*\
  !*** ./src/app/routes/material/sidenav/dual-sidenav.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-sidenav-spacer {\n  flex: 1;\n}\n\nmat-sidenav.demo-sidenav-playlist {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n}\n\n.demo-sidenav-playlist-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvc2lkZW5hdi9kdWFsLXNpZGVuYXYuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3NpZGVuYXYvZHVhbC1zaWRlbmF2LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3NpZGVuYXYvZHVhbC1zaWRlbmF2LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1zaWRlbmF2LXNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbm1hdC1zaWRlbmF2LmRlbW8tc2lkZW5hdi1wbGF5bGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmRlbW8tc2lkZW5hdi1wbGF5bGlzdC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIuZGVtby1zaWRlbmF2LXNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbm1hdC1zaWRlbmF2LmRlbW8tc2lkZW5hdi1wbGF5bGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmRlbW8tc2lkZW5hdi1wbGF5bGlzdC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/routes/material/sidenav/dual-sidenav.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/material/sidenav/dual-sidenav.ts ***!
  \*********************************************************/
/*! exports provided: SidenavDualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavDualComponent", function() { return SidenavDualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



let SidenavDualComponent = class SidenavDualComponent {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    play(list) {
        this.snackbar.open(`Playing "${list}"`, '', { duration: 1000 });
    }
};
SidenavDualComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SidenavDualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dual-sidenav',
        template: __webpack_require__(/*! raw-loader!./dual-sidenav.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/sidenav/dual-sidenav.html"),
        host: { class: 'demo-sidenav-app' },
        styles: [__webpack_require__(/*! ./shared.scss */ "./src/app/routes/material/sidenav/shared.scss"), __webpack_require__(/*! ./dual-sidenav.scss */ "./src/app/routes/material/sidenav/dual-sidenav.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], SidenavDualComponent);



/***/ }),

/***/ "./src/app/routes/material/sidenav/mobile-sidenav.scss":
/*!*************************************************************!*\
  !*** ./src/app/routes/material/sidenav/mobile-sidenav.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-sidenav-header-fixed {\n  position: fixed;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvc2lkZW5hdi9tb2JpbGUtc2lkZW5hdi5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvc2lkZW5hdi9tb2JpbGUtc2lkZW5hdi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9zaWRlbmF2L21vYmlsZS1zaWRlbmF2LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1zaWRlbmF2LWhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbn1cbiIsIi5kZW1vLXNpZGVuYXYtaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/routes/material/sidenav/mobile-sidenav.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/material/sidenav/mobile-sidenav.ts ***!
  \***********************************************************/
/*! exports provided: SidenavMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMobileComponent", function() { return SidenavMobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



let SidenavMobileComponent = class SidenavMobileComponent {
    constructor(changeDetectorRef, media) {
        this.filler = Array(20).fill(0);
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this.mobileQueryListener);
    }
    ngOnDestroy() {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
};
SidenavMobileComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }
];
SidenavMobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'mobile-sidenav',
        template: __webpack_require__(/*! raw-loader!./mobile-sidenav.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/sidenav/mobile-sidenav.html"),
        host: { class: 'demo-sidenav-app' },
        styles: [__webpack_require__(/*! ./shared.scss */ "./src/app/routes/material/sidenav/shared.scss"), __webpack_require__(/*! ./mobile-sidenav.scss */ "./src/app/routes/material/sidenav/mobile-sidenav.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
], SidenavMobileComponent);



/***/ }),

/***/ "./src/app/routes/material/sidenav/shared.scss":
/*!*****************************************************!*\
  !*** ./src/app/routes/material/sidenav/shared.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-sidenav-app {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.demo-sidenav-container {\n  flex: 1;\n}\n\n.demo-sidenav-container-fixed {\n  flex: none;\n}\n\nh1.demo-sidenav-app-name {\n  margin-left: 8px;\n}\n\nbutton.demo-sidenav-close {\n  margin: 20px;\n}\n\n.demo-sidenav-filler {\n  margin: 100px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaGFyZWQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3NpZGVuYXYvc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3NpZGVuYXYvc2hhcmVkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1zaWRlbmF2LWFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZGVtby1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG59XG5cbi5kZW1vLXNpZGVuYXYtY29udGFpbmVyLWZpeGVkIHtcbiAgZmxleDogbm9uZTtcbn1cblxuaDEuZGVtby1zaWRlbmF2LWFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuYnV0dG9uLmRlbW8tc2lkZW5hdi1jbG9zZSB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmRlbW8tc2lkZW5hdi1maWxsZXIge1xuICBtYXJnaW46IDEwMHB4IDIwcHg7XG59XG4iLCIuZGVtby1zaWRlbmF2LWFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZGVtby1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG59XG5cbi5kZW1vLXNpZGVuYXYtY29udGFpbmVyLWZpeGVkIHtcbiAgZmxleDogbm9uZTtcbn1cblxuaDEuZGVtby1zaWRlbmF2LWFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuYnV0dG9uLmRlbW8tc2lkZW5hdi1jbG9zZSB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmRlbW8tc2lkZW5hdi1maWxsZXIge1xuICBtYXJnaW46IDEwMHB4IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/routes/material/sidenav/sidenav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/sidenav/sidenav.component.ts ***!
  \**************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavComponent = class SidenavComponent {
};
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/sidenav/sidenav.component.html"),
    })
], SidenavComponent);



/***/ }),

/***/ "./src/app/routes/material/slide-toggle/slide-toggle.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/material/slide-toggle/slide-toggle.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuIiwiLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/routes/material/slide-toggle/slide-toggle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/material/slide-toggle/slide-toggle.component.ts ***!
  \************************************************************************/
/*! exports provided: SlideToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleComponent", function() { return SlideToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let SlideToggleComponent = class SlideToggleComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.emailToggle = true;
        this.termsToggle = false;
        this.musicToggle = false;
    }
    onFormSubmit() {
        this.snackBar.open('Terms and condistions accepted!', '', { duration: 2000 });
    }
};
SlideToggleComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SlideToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-toggle',
        template: __webpack_require__(/*! raw-loader!./slide-toggle.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/slide-toggle/slide-toggle.component.html"),
        styles: [__webpack_require__(/*! ./slide-toggle.component.scss */ "./src/app/routes/material/slide-toggle/slide-toggle.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], SlideToggleComponent);



/***/ }),

/***/ "./src/app/routes/material/slider/slider.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/slider/slider.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-color-container {\n  display: flex;\n  align-items: center;\n}\n\n.demo-color-label {\n  display: inline-block;\n  width: 50px;\n}\n\n.demo-color-swatch {\n  width: 60px;\n  height: 60px;\n  margin-left: 60px;\n}\n\n.demo-volume-container {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWNvbG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZW1vLWNvbG9yLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbn1cblxuLmRlbW8tY29sb3Itc3dhdGNoIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbi5kZW1vLXZvbHVtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIi5kZW1vLWNvbG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZW1vLWNvbG9yLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbn1cblxuLmRlbW8tY29sb3Itc3dhdGNoIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbi5kZW1vLXZvbHVtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/slider/slider.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/material/slider/slider.component.ts ***!
  \************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() {
        this.red = 0;
        this.green = 0;
        this.blue = 0;
    }
    get swatchBackground() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/slider/slider.component.html"),
        styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/routes/material/slider/slider.component.scss")]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/routes/material/snack-bar/snack-bar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/routes/material/snack-bar/snack-bar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/material/snack-bar/snack-bar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/material/snack-bar/snack-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let SnackBarComponent = class SnackBarComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openDiscoPartySnackBar() {
        this.snackBar.open('Disco party!', 'Dismiss', { duration: 5000 });
    }
    openNotificationSnackBar() {
        this.snackBar.open('Thank you for your support!', '', { duration: 2000 });
    }
};
SnackBarComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-snack-bar',
        template: __webpack_require__(/*! raw-loader!./snack-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/snack-bar/snack-bar.component.html"),
        styles: [__webpack_require__(/*! ./snack-bar.component.scss */ "./src/app/routes/material/snack-bar/snack-bar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], SnackBarComponent);



/***/ }),

/***/ "./src/app/routes/material/sort/sort.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/sort/sort.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9zb3J0L3NvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/material/sort/sort.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/material/sort/sort.component.ts ***!
  \********************************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
let SortComponent = class SortComponent {
    constructor() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9,
                carbs: 37,
                protein: 4,
            },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name':
                    return compare(a.name, b.name, isAsc);
                case 'calories':
                    return compare(a.calories, b.calories, isAsc);
                case 'fat':
                    return compare(a.fat, b.fat, isAsc);
                case 'carbs':
                    return compare(a.carbs, b.carbs, isAsc);
                case 'protein':
                    return compare(a.protein, b.protein, isAsc);
                default:
                    return 0;
            }
        });
    }
};
SortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sort',
        template: __webpack_require__(/*! raw-loader!./sort.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/sort/sort.component.html"),
        styles: [__webpack_require__(/*! ./sort.component.scss */ "./src/app/routes/material/sort/sort.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SortComponent);



/***/ }),

/***/ "./src/app/routes/material/stepper/stepper.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/material/stepper/stepper.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/material/stepper/stepper.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/stepper/stepper.component.ts ***!
  \**************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let StepperComponent = class StepperComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
};
StepperComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
StepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stepper',
        template: __webpack_require__(/*! raw-loader!./stepper.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/stepper/stepper.component.html"),
        styles: [__webpack_require__(/*! ./stepper.component.scss */ "./src/app/routes/material/stepper/stepper.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], StepperComponent);



/***/ }),

/***/ "./src/app/routes/material/tab/routes.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/material/tab/routes.ts ***!
  \***********************************************/
/*! exports provided: TABS_DEMO_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function() { return TABS_DEMO_ROUTES; });
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component */ "./src/app/routes/material/tab/tab.component.ts");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const TABS_DEMO_ROUTES = [
    { path: '', redirectTo: 'sunny-tab', pathMatch: 'full' },
    { path: 'sunny-tab', component: _tab_component__WEBPACK_IMPORTED_MODULE_0__["SunnyTabContentComponent"] },
    { path: 'rainy-tab', component: _tab_component__WEBPACK_IMPORTED_MODULE_0__["RainyTabContentComponent"] },
    { path: 'foggy-tab', component: _tab_component__WEBPACK_IMPORTED_MODULE_0__["FoggyTabContentComponent"] },
];


/***/ }),

/***/ "./src/app/routes/material/tab/tab.component.scss":
/*!********************************************************!*\
  !*** ./src/app/routes/material/tab/tab.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvdGFiL3RhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL21hdGVyaWFsL3RhYi90YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC90YWIvdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaW5wdXQtbGFiZWwsXG4uZXhhbXBsZS1hZGQtdGFiLWJ1dHRvbixcbi5leGFtcGxlLWRlbGV0ZS10YWItYnV0dG9uIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4iLCIuZXhhbXBsZS1pbnB1dC1sYWJlbCxcbi5leGFtcGxlLWFkZC10YWItYnV0dG9uLFxuLmV4YW1wbGUtZGVsZXRlLXRhYi1idXR0b24ge1xuICBtYXJnaW46IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/tab/tab.component.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/material/tab/tab.component.ts ***!
  \******************************************************/
/*! exports provided: TabComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunnyTabContentComponent", function() { return SunnyTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainyTabContentComponent", function() { return RainyTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoggyTabContentComponent", function() { return FoggyTabContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabComponent = class TabComponent {
    constructor() {
        // Nav bar demo
        this.tabLinks = [
            { label: 'Sun', link: 'sunny-tab' },
            { label: 'Rain', link: 'rainy-tab' },
            { label: 'Fog', link: 'foggy-tab' },
        ];
        // Standard tabs demo
        this.tabs = [
            {
                label: 'German Shepherd',
                content: `The German Shepherd is a breed of medium to large-sized working dog that originated
          in Germany. The breed's officially recognized name is German Shepherd Dog in the
          English language. The breed is also known as the Alsatian in Britain and Ireland.`,
            },
            {
                label: 'Labrador Retriever',
                extraContent: true,
                content: `The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador
          is one of the most popular breeds of dog in the United Kingdom and the United States.`,
            },
            {
                label: 'Rottweiler',
                disabled: true,
                content: `The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large.
          The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs,
          because their main use was to ...`,
            },
            {
                label: 'Beagle',
                content: `The Beagle is a breed of small hound, similar in appearance to the much larger
          foxhound. The beagle is a scent hound, developed primarily for hunting hare.`,
            },
        ];
    }
};
TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab',
        template: __webpack_require__(/*! raw-loader!./tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/tab/tab.component.html"),
        styles: [__webpack_require__(/*! ./tab.component.scss */ "./src/app/routes/material/tab/tab.component.scss")]
    })
], TabComponent);

let SunnyTabContentComponent = class SunnyTabContentComponent {
};
SunnyTabContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sunny-routed-content',
        template: 'Having a lot of light from the sun.',
    })
], SunnyTabContentComponent);

let RainyTabContentComponent = class RainyTabContentComponent {
};
RainyTabContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'rainy-routed-content',
        template: 'A rainy period of time is one when it rains a lot',
    })
], RainyTabContentComponent);

let FoggyTabContentComponent = class FoggyTabContentComponent {
};
FoggyTabContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'foggy-routed-content',
        template: 'If the weather is foggy, there is fog',
    })
], FoggyTabContentComponent);



/***/ }),

/***/ "./src/app/routes/material/table/table.component.scss":
/*!************************************************************!*\
  !*** ./src/app/routes/material/table/table.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/material/table/table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/table/table.component.ts ***!
  \**********************************************************/
/*! exports provided: TableComponent, BasicDataSource, SortDataSource, PaginatedDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDataSource", function() { return BasicDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDataSource", function() { return SortDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedDataSource", function() { return PaginatedDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const exampleData = [
    { name: 'Austin', color: 'blue', age: 30 },
    { name: 'Jeremy', color: 'green', age: 33 },
    { name: 'Kara', color: 'purple', age: 29 },
    { name: 'Tina', color: 'yellow', age: 35 },
    { name: 'Brad', color: 'pink', age: 40 },
    { name: 'Jules', color: 'red', age: 21 },
];
let TableComponent = class TableComponent {
    constructor() {
        this.displayedColumns = ['name', 'color', 'age'];
    }
    ngOnInit() {
        this.basicDataSource = new BasicDataSource();
        this.sortDataSource = new SortDataSource(this.sort);
        this.paginatedDataSource = new PaginatedDataSource(this.pager);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], TableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], TableComponent.prototype, "pager", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/routes/material/table/table.component.scss")]
    })
], TableComponent);

class BasicDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"] {
    constructor() {
        super();
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.dataChange.next(exampleData);
    }
    connect() {
        return this.dataChange;
    }
    disconnect() { }
}
class SortDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"] {
    constructor(sort) {
        super();
        this.sort = sort;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.dataChange.next(exampleData);
    }
    connect() {
        const displayDataChanges = [this.dataChange, this.sort.sortChange];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => this.getSortedData()));
    }
    disconnect() { }
    getSortedData() {
        const data = [...exampleData];
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            return (a.age < b.age ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
        });
    }
}
SortDataSource.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"] }
];
class PaginatedDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"] {
    constructor(paginator) {
        super();
        this.paginator = paginator;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.dataChange.next(exampleData);
    }
    connect() {
        const displayDataChanges = [this.dataChange, this.paginator.page];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const data = [...exampleData];
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        }));
    }
    disconnect() { }
}
PaginatedDataSource.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"] }
];


/***/ }),

/***/ "./src/app/routes/material/toolbar/toolbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/material/toolbar/toolbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-button button,\n.demo-button a {\n  margin: 8px;\n  text-transform: uppercase;\n}\n.demo-button section {\n  display: flex;\n  align-items: center;\n  margin: 8px;\n}\n.demo-button p {\n  padding: 5px 15px;\n}\n.demo-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLFdBQUE7RUFDQSx5QkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDREo7QURJRTtFQUNFLGlCQUFBO0FDRko7QURNQTtFQUNFLGNBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1idXR0b24ge1xuICBidXR0b24sXG4gIGEge1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICBwIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgfVxufVxuXG4uZGVtby1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiIsIi5kZW1vLWJ1dHRvbiBidXR0b24sXG4uZGVtby1idXR0b24gYSB7XG4gIG1hcmdpbjogOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRlbW8tYnV0dG9uIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDhweDtcbn1cbi5kZW1vLWJ1dHRvbiBwIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi5kZW1vLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/routes/material/toolbar/toolbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/toolbar/toolbar.component.ts ***!
  \**************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarComponent = class ToolbarComponent {
};
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/toolbar/toolbar.component.html"),
        styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/routes/material/toolbar/toolbar.component.scss")]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/routes/material/tooltip/tooltip.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/routes/material/tooltip/tooltip.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/material/tooltip/tooltip.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/material/tooltip/tooltip.component.ts ***!
  \**************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TooltipComponent = class TooltipComponent {
};
TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tooltip',
        template: __webpack_require__(/*! raw-loader!./tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/tooltip/tooltip.component.html"),
        styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/routes/material/tooltip/tooltip.component.scss")]
    })
], TooltipComponent);



/***/ }),

/***/ "./src/app/routes/material/tree/tree.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/routes/material/tree/tree.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-progress-bar {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkZGllL0Rlc2t0b3AvQW5ndWxhcnByb2plY3RzL0FuZ3VhbHJfcmVzcG9uc2l2ZV9kYXNoYm9hcmQvQWRtaW5fZGFzaC9hZG1pbkRhc2gvc3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbWF0ZXJpYWwvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9tYXRlcmlhbC90cmVlL3RyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhciB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuIiwiLmV4YW1wbGUtdHJlZS1wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/material/tree/tree.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/material/tree/tree.component.ts ***!
  \********************************************************/
/*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource, TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function() { return DynamicFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function() { return DynamicDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function() { return DynamicDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





/** Flat node with expandable and level information */
class DynamicFlatNode {
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
DynamicFlatNode.ctorParameters = () => [
    { type: String },
    null,
    null,
    null
];
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']],
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    initialData() {
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    getChildren(node) {
        return this.dataMap.get(node);
    }
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
let DynamicDataSource = class DynamicDataSource {
    constructor(treeControl, database) {
        this.treeControl = treeControl;
        this.database = database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    get data() {
        return this.dataChange.value;
    }
    set data(value) {
        this.treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    connect(collectionViewer) {
        // tslint:disable-next-line: deprecation
        this.treeControl.expansionModel.onChange.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this.data));
    }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const children = this.database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) {
            // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
};
DynamicDataSource.ctorParameters = () => [
    { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"] },
    { type: DynamicDatabase }
];
DynamicDataSource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"],
        DynamicDatabase])
], DynamicDataSource);

/**
 * @title Tree with dynamic data
 */
let TreeComponent = class TreeComponent {
    constructor(database) {
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, nodeData) => nodeData.expandable;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
};
TreeComponent.ctorParameters = () => [
    { type: DynamicDatabase }
];
TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tree',
        template: __webpack_require__(/*! raw-loader!./tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/material/tree/tree.component.html"),
        providers: [DynamicDatabase],
        styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/routes/material/tree/tree.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DynamicDatabase])
], TreeComponent);



/***/ })

}]);
//# sourceMappingURL=material-material-module-es2015.js.map