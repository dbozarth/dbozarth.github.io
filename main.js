(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_main_details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/main/details/details.component */ "./src/app/company/main/details/details.component.ts");
/* harmony import */ var _company_main_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company/main/edit/edit.component */ "./src/app/company/main/edit/edit.component.ts");
/* harmony import */ var _company_site_details_site_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company/site/details/site-details.component */ "./src/app/company/site/details/site-details.component.ts");
/* harmony import */ var _company_site_edit_site_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/site/edit/site-edit.component */ "./src/app/company/site/edit/site-edit.component.ts");
/* harmony import */ var _company_site_jobs_add_job_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company/site/jobs/add/job-add.component */ "./src/app/company/site/jobs/add/job-add.component.ts");
/* harmony import */ var _company_site_jobs_edit_edit_job_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company/site/jobs/edit/edit-job.component */ "./src/app/company/site/jobs/edit/edit-job.component.ts");
/* harmony import */ var _company_site_jobs_show_show_job_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/site/jobs/show/show-job.component */ "./src/app/company/site/jobs/show/show-job.component.ts");
/* harmony import */ var _company_site_jobs_lists_list_jobs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company/site/jobs/lists/list-jobs.component */ "./src/app/company/site/jobs/lists/list-jobs.component.ts");











var routes = [
    { path: 'company', component: _company_main_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
    { path: 'company/edit/:id', component: _company_main_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'company/site/:id', component: _company_site_details_site_details_component__WEBPACK_IMPORTED_MODULE_5__["SiteDetailsComponent"] },
    { path: 'company/site/edit/:id', component: _company_site_edit_site_edit_component__WEBPACK_IMPORTED_MODULE_6__["SiteEditComponent"] },
    { path: 'company/site/job/add/:id', component: _company_site_jobs_add_job_add_component__WEBPACK_IMPORTED_MODULE_7__["JobAddComponent"] },
    { path: 'company/site/job/edit/:id', component: _company_site_jobs_edit_edit_job_component__WEBPACK_IMPORTED_MODULE_8__["EditJobComponent"] },
    { path: 'company/site/job/show/:id', component: _company_site_jobs_show_show_job_component__WEBPACK_IMPORTED_MODULE_9__["ShowJobComponent"] },
    { path: 'company/site/job/list/:id', component: _company_site_jobs_lists_list_jobs_component__WEBPACK_IMPORTED_MODULE_10__["ListJobsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-bg {\n  background-color: inherit;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<app-sidenav></app-sidenav>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'uikit-firebase-admin';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _static_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./static/navbar/navbar.component */ "./src/app/static/navbar/navbar.component.ts");
/* harmony import */ var _static_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./static/sidenav/sidenav.component */ "./src/app/static/sidenav/sidenav.component.ts");
/* harmony import */ var _static_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./static/footer/footer.component */ "./src/app/static/footer/footer.component.ts");
/* harmony import */ var _company_main_details_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./company/main/details/details.component */ "./src/app/company/main/details/details.component.ts");
/* harmony import */ var _company_main_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company/main/edit/edit.component */ "./src/app/company/main/edit/edit.component.ts");
/* harmony import */ var _company_main_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company/main/settings/settings.component */ "./src/app/company/main/settings/settings.component.ts");
/* harmony import */ var _company_main_documents_documents_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./company/main/documents/documents.component */ "./src/app/company/main/documents/documents.component.ts");
/* harmony import */ var _company_site_details_site_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./company/site/details/site-details.component */ "./src/app/company/site/details/site-details.component.ts");
/* harmony import */ var _company_site_edit_site_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company/site/edit/site-edit.component */ "./src/app/company/site/edit/site-edit.component.ts");
/* harmony import */ var _company_site_jobs_add_job_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./company/site/jobs/add/job-add.component */ "./src/app/company/site/jobs/add/job-add.component.ts");
/* harmony import */ var _company_site_jobs_edit_edit_job_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./company/site/jobs/edit/edit-job.component */ "./src/app/company/site/jobs/edit/edit-job.component.ts");
/* harmony import */ var _company_site_jobs_show_show_job_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./company/site/jobs/show/show-job.component */ "./src/app/company/site/jobs/show/show-job.component.ts");
/* harmony import */ var _company_site_jobs_lists_list_jobs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./company/site/jobs/lists/list-jobs.component */ "./src/app/company/site/jobs/lists/list-jobs.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _static_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _static_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"],
                _static_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _company_main_details_details_component__WEBPACK_IMPORTED_MODULE_14__["DetailsComponent"],
                _company_main_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"],
                _company_main_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                _company_main_documents_documents_component__WEBPACK_IMPORTED_MODULE_17__["DocumentsComponent"],
                _company_site_details_site_details_component__WEBPACK_IMPORTED_MODULE_18__["SiteDetailsComponent"],
                _company_site_edit_site_edit_component__WEBPACK_IMPORTED_MODULE_19__["SiteEditComponent"],
                _company_site_jobs_add_job_add_component__WEBPACK_IMPORTED_MODULE_20__["JobAddComponent"],
                _company_site_jobs_edit_edit_job_component__WEBPACK_IMPORTED_MODULE_21__["EditJobComponent"],
                _company_site_jobs_show_show_job_component__WEBPACK_IMPORTED_MODULE_22__["ShowJobComponent"],
                _company_site_jobs_lists_list_jobs_component__WEBPACK_IMPORTED_MODULE_23__["ListJobsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company/main/details/details.component.css":
/*!************************************************************!*\
  !*** ./src/app/company/main/details/details.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-bg-f {\n  background: linear-gradient(to left, #f5f5f5, #eff1f3);\n}\n\n.nav-tabs .nav-link.active {\n  color: #170558;\n}\n\n.footer-bg {\n  background-color: #fdfdfd;\n}\n\na:hover {\n  color: dimgray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9tYWluL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L21haW4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJnLWYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2Y1ZjVmNSwgI2VmZjFmMyk7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICMxNzA1NTg7XG59XG5cbi5mb290ZXItYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IGRpbWdyYXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/company/main/details/details.component.html":
/*!*************************************************************!*\
  !*** ./src/app/company/main/details/details.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-medium-bottom\" *ngFor=\"let main of mainCompany\">\n    <div class=\"uk-card uk-card-default\">\n        <div class=\"uk-card-header bg-info\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons pr-1\">place</i>Main Company - {{main.company_name}}</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Main Campus Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_city}}, {{main.main_state}}, {{main.main_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Main Phone: {{main.main_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Main Email: {{main.main_email}}</li>\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Ship To Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.shipping_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.shipping_city}}, {{main.shipping_state}}, {{main.shipping_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.shipping_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{main.shipping_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{main.shipping_email}}</li>\n\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Main Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_contact_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_contact_email}}</li>\n\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Human Resources Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_hr_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_hr_contact_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{main.main_hr_contact_email}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-footer d-flex justify-content-between footer-bg\">\n            <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-create ml-1 mr-1\"></i>edit</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>jobs</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"container uk-margin-medium-bottom\" *ngFor=\"let site of sites\">\n    <div class=\"uk-card uk-card-default\">\n        <div class=\"uk-card-header bg-info\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons pr-1\">place</i>Site Location - {{site.site_name}}</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Campus Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_city}}, {{site.site_state}}, {{site.site_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{site.site_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{site.site_email}}</li>\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Ship To Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_city}}, {{site.site_ship_to_state}}, {{site.site_ship_to_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{site.site_ship_to_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{site.site_ship_to_email}}</li>\n\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Main Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_first_name}} {{site.site_contact_last_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_email}}</li>\n\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Maintenance Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_email}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-footer d-flex justify-content-between footer-bg\">\n            <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-create ml-1 mr-1\"></i>edit</a>\n            <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>jobs</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/main/details/details.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/company/main/details/details.component.ts ***!
  \***********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/site.service */ "./src/app/services/site.service.ts");



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(ss) {
        this.ss = ss;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getMains().subscribe(function (mainCompany) {
            _this.mainCompany = mainCompany;
        });
        this.ss.getSites().subscribe(function (sites) {
            _this.sites = sites;
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/company/main/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/company/main/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_2__["SiteService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/company/main/documents/documents.component.css":
/*!****************************************************************!*\
  !*** ./src/app/company/main/documents/documents.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvbWFpbi9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/company/main/documents/documents.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/company/main/documents/documents.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  documents works!\n</p>\n"

/***/ }),

/***/ "./src/app/company/main/documents/documents.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/company/main/documents/documents.component.ts ***!
  \***************************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/company/main/documents/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.css */ "./src/app/company/main/documents/documents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/company/main/edit/edit.component.css":
/*!******************************************************!*\
  !*** ./src/app/company/main/edit/edit.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvbWFpbi9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/main/edit/edit.component.html":
/*!*******************************************************!*\
  !*** ./src/app/company/main/edit/edit.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-small-bottom\">\n  <div class=\"uk-card uk-card-default\">\n    <div class=\"uk-card-header bg-info\">\n        <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n            <div class=\"uk-width-expand\">\n                <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons uk-text-white mr-1\">my_location</i>Main Campus Details - Edit</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"uk-card-body\">\n      <small class=\"uk-text-muted\">Please make required changes and submit to to save them.</small>\n      <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Campus Location Details</h6>\n        <form #mainForm=\"ngForm\" (ngSubmit)=\"onSubmit(mainForm)\">\n          <div class=\"form-group\">\n            <label for=\"company_name\">Company Name</label>\n            <input\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                name=\"company_name\"\n                #company_name=\"ngModel\"\n                [ngClass]=\"{'is-invalid':company_name.errors && company_name.touched}\"\n                [(ngModel)]=\"main.company_name\"\n                minlength=\"5\"\n                required\n            >\n\n            <div [hidden]=\"!company_name.errors?.required\" class=\"invalid-feedback\">\n              You must provide a value!\n            </div>\n            <div [hidden]=\"!company_name.errors?.minlength\" class=\"invalid-feedback\">\n                Value must be 5 characters minimum please!\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"main_address\">Main Address</label>\n              <input\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  name=\"main_address\"\n                  #main_address=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':main_address.errors && main_address.touched}\"\n                  [(ngModel)]=\"main.main_address\"\n                  minlength=\"10\"\n                  required\n              >\n\n              <div [hidden]=\"!main_address.errors?.required\" class=\"invalid-feedback\">\n                You must provide a value!\n              </div>\n              <div [hidden]=\"!main_address.errors?.minlength\" class=\"invalid-feedback\">\n                  Value must be 10 characters minimum please!\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"main_address_2\">Main Address 2</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control form-control-sm\"\n                    name=\"main_address_2\"\n                    #main_address_2=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':main_address_2.errors && main_address_2.touched}\"\n                    [(ngModel)]=\"main.main_address_2\"\n                    minlength=\"10\"\n                    required\n                >\n\n                <div [hidden]=\"!main_address_2.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a value!\n                </div>\n                <div [hidden]=\"!main_address_2.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n            <div class=\"form-row\">\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"main_city\">Main City</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control form-control-sm\"\n                        name=\"main_city\"\n                        #main_city=\"ngModel\"\n                        [ngClass]=\"{'is-invalid':main_city.errors && main_city.touched}\"\n                        [(ngModel)]=\"main.main_city\"\n                        minlength=\"5\"\n                        required\n                    >\n\n                    <div [hidden]=\"!main_city.errors?.required\" class=\"invalid-feedback\">\n                      You must provide a value!\n                    </div>\n                    <div [hidden]=\"!main_city.errors?.minlength\" class=\"invalid-feedback\">\n                        Value must be 5 characters minimum please!\n                    </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                      <label for=\"main_state\">Main State</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"main_state\"\n                          #main_state=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':main_state.errors && main_state.touched}\"\n                          [(ngModel)]=\"main.main_state\"\n                          minlength=\"2\"\n                          required\n                      >\n\n                      <div [hidden]=\"!main_state.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!main_state.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 2 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"main_zip\">Main Zip Code</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"main_zip\"\n                            #main_zip=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':main_zip.errors && main_zip.touched}\"\n                            [(ngModel)]=\"main.main_zip\"\n                            minlength=\"5\"\n                            required\n                        >\n\n                        <div [hidden]=\"!main_zip.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!main_zip.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 5 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"main_country\">Main Country</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"main_country\"\n                              #main_country=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':main_country.errors && main_country.touched}\"\n                              [(ngModel)]=\"main.main_country\"\n                              minlength=\"2\"\n                              required\n                          >\n\n                          <div [hidden]=\"!main_country.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!main_country.errors?.minlength\" class=\"invalid-feedback\">\n                              Value must be 2 characters minimum please!\n                          </div>\n                      </div>\n                    </div>\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <label for=\"main_phone\"><i class=\"icon ion-md-call mr-1\"></i>Main Phone</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"main_phone\"\n                          #main_phone=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':main_phone.errors && main_phone.touched}\"\n                          [(ngModel)]=\"main.main_phone\"\n                          minlength=\"10\"\n                          pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                          required\n                      >\n\n                      <div [hidden]=\"!main_phone.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!main_phone.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 10 characters minimum please!\n                      </div>\n                      <div [hidden]=\"!main_phone.errors?.pattern\" class=\"invalid-feedback\">\n                          Value must be a valid phone! (123)123-4567 or 123-123-4567 or 1231234567\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"main_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main Email</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"main_email\"\n                            #main_email=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':main_email.errors && main_email.touched}\"\n                            [(ngModel)]=\"main.main_email\"\n                            pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                            required\n                        >\n\n                        <div [hidden]=\"!main_email.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!main_email.errors?.pattern\" class=\"invalid-feedback\">\n                            Value must be a valid email address!\n                        </div>\n                    </div>\n                  </div>\n              </div>\n              <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Campus Shipping Details</h6>\n\n                <div class=\"form-group\">\n                    <label for=\"shipping_address\">Shipping Address</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control form-control-sm\"\n                        name=\"shipping_address\"\n                        #shipping_address=\"ngModel\"\n                        [ngClass]=\"{'is-invalid':shipping_address.errors && shipping_address.touched}\"\n                        [(ngModel)]=\"main.shipping_address\"\n                        minlength=\"10\"\n                        required\n                    >\n\n                    <div [hidden]=\"!shipping_address.errors?.required\" class=\"invalid-feedback\">\n                      You must provide a value!\n                    </div>\n                    <div [hidden]=\"!shipping_address.errors?.minlength\" class=\"invalid-feedback\">\n                        Value must be 10 characters minimum please!\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"shipping_address_2\">Shipping Address 2</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"shipping_address_2\"\n                          #shipping_address_2=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':shipping_address_2.errors && shipping_address_2.touched}\"\n                          [(ngModel)]=\"main.shipping_address_2\"\n                          minlength=\"10\"\n                          required\n                      >\n\n                      <div [hidden]=\"!shipping_address_2.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!shipping_address_2.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 10 characters minimum please!\n                      </div>\n                    </div>\n\n                  <div class=\"form-row\">\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"shipping_city\">Shipping City</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"shipping_city\"\n                              #shipping_city=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':shipping_city.errors && shipping_city.touched}\"\n                              [(ngModel)]=\"main.shipping_city\"\n                              minlength=\"5\"\n                              required\n                          >\n\n                          <div [hidden]=\"!shipping_city.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!shipping_city.errors?.minlength\" class=\"invalid-feedback\">\n                              Value must be 5 characters minimum please!\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"shipping_state\">Shipping State</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"shipping_state\"\n                                #shipping_state=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':shipping_state.errors && shipping_state.touched}\"\n                                [(ngModel)]=\"main.shipping_state\"\n                                minlength=\"2\"\n                                required\n                            >\n\n                            <div [hidden]=\"!shipping_state.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!shipping_state.errors?.minlength\" class=\"invalid-feedback\">\n                                Value must be 2 characters minimum please!\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                              <label for=\"shipping_zip\">Shipping Zip Code</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"shipping_zip\"\n                                  #shipping_zip=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':shipping_zip.errors && shipping_zip.touched}\"\n                                  [(ngModel)]=\"main.shipping_zip\"\n                                  minlength=\"5\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!shipping_zip.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!shipping_zip.errors?.minlength\" class=\"invalid-feedback\">\n                                  Value must be 5 characters minimum please!\n                              </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <label for=\"shipping_country\">Shipping Country</label>\n                                <input\n                                    type=\"text\"\n                                    class=\"form-control form-control-sm\"\n                                    name=\"shipping_country\"\n                                    #shipping_country=\"ngModel\"\n                                    [ngClass]=\"{'is-invalid':shipping_country.errors && shipping_country.touched}\"\n                                    [(ngModel)]=\"main.shipping_country\"\n                                    minlength=\"2\"\n                                    required\n                                >\n\n                                <div [hidden]=\"!shipping_country.errors?.required\" class=\"invalid-feedback\">\n                                  You must provide a value!\n                                </div>\n                                <div [hidden]=\"!shipping_country.errors?.minlength\" class=\"invalid-feedback\">\n                                    Value must be 2 characters minimum please!\n                                </div>\n                            </div>\n                          </div>\n                  </div>\n\n                  <div class=\"form-row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"shipping_phone\"><i class=\"icon ion-md-call mr-1\"></i>Shipping Phone</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"shipping_phone\"\n                                #shipping_phone=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':shipping_phone.errors && shipping_phone.touched}\"\n                                [(ngModel)]=\"main.shipping_phone\"\n                                minlength=\"10\"\n                                pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                                required\n                            >\n\n                            <div [hidden]=\"!shipping_phone.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!shipping_phone.errors?.minlength\" class=\"invalid-feedback\">\n                                Value must be 10 characters minimum please!\n                            </div>\n                            <div [hidden]=\"!shipping_phone.errors?.pattern\" class=\"invalid-feedback\">\n                                Value must be a valid phone! (123)123-4567 or 123-123-4567 or 1231234567\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <label for=\"shipping_email\"><i class=\"icon ion-md-mail mr-1\"></i>Shipping Email</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"shipping_email\"\n                                  #shipping_email=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':shipping_email.errors && shipping_email.touched}\"\n                                  [(ngModel)]=\"main.shipping_email\"\n                                  pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!shipping_email.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!shipping_email.errors?.pattern\" class=\"invalid-feedback\">\n                                  Value must be a valid email address!\n                              </div>\n                          </div>\n                        </div>\n                    </div>\n\n              <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">person</i>Campus Contact Details</h6>\n            <div class=\"form-row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                      <label for=\"main_contact\"><i class=\"icon ion-md-person mr-1\"></i>Main Contact Full Name</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"main_contact\"\n                          #main_contact=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':main_contact.errors && main_contact.touched}\"\n                          [(ngModel)]=\"main.main_contact\"\n                          minlength=\"5\"\n                          required\n                      >\n\n                      <div [hidden]=\"!main_contact.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!main_contact.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 5 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label for=\"main_contact_phone\"><i class=\"icon ion-md-call mr-1\"></i>Main Contact Phone</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"main_contact_phone\"\n                            #main_contact_phone=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':main_contact_phone.errors && main_contact_phone.touched}\"\n                            [(ngModel)]=\"main.main_contact_phone\"\n                            pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                            required\n                        >\n\n                        <div [hidden]=\"!main_contact_phone.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!main_contact_phone.errors?.pattern\" class=\"invalid-feedback\">\n                            Please use a valid phone number... (321) 234-4567 | 321-234-4567 | 3212344567\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <label for=\"main_contact_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main Contact Email</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"main_contact_email\"\n                              #main_contact_email=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':main_contact_email.errors && main_contact_email.touched}\"\n                              [(ngModel)]=\"main.main_contact_email\"\n                              pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                              required\n                          >\n\n                          <div [hidden]=\"!main_contact_email.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!main_contact_email.errors?.pattern\" class=\"invalid-feedback\">\n                              Please provide a valid email!\n                          </div>\n                      </div>\n                    </div>\n              </div>\n\n              <div class=\"form-row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label for=\"main_hr_contact\"><i class=\"icon ion-md-person mr-1\"></i>HR Contact Full Name</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"main_hr_contact\"\n                            #main_hr_contact=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':main_hr_contact.errors && main_hr_contact.touched}\"\n                            [(ngModel)]=\"main.main_hr_contact\"\n                            minlength=\"5\"\n                            required\n                        >\n\n                        <div [hidden]=\"!main_hr_contact.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!main_hr_contact.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 5 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <label for=\"main_hr_contact_phone\"><i class=\"icon ion-md-call mr-1\"></i>Main HR Contact Phone</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"main_hr_contact_phone\"\n                              #main_hr_contact_phone=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':main_hr_contact_phone.errors && main_hr_contact_phone.touched}\"\n                              [(ngModel)]=\"main.main_hr_contact_phone\"\n                              pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                              required\n                          >\n\n                          <div [hidden]=\"!main_hr_contact_phone.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!main_hr_contact_phone.errors?.pattern\" class=\"invalid-feedback\">\n                              Please use a valid phone number... (321) 234-4567 | 321-234-4567 | 3212344567\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"main_hr_contact_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main HR Contact Email</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"main_hr_contact_email\"\n                                #main_hr_contact_email=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':main_hr_contact_email.errors && main_hr_contact_email.touched}\"\n                                [(ngModel)]=\"main.main_hr_contact_email\"\n                                pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                required\n                            >\n\n                            <div [hidden]=\"!main_hr_contact_email.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!main_hr_contact_email.errors?.pattern\" class=\"invalid-feedback\">\n                                Please provide a valid email!\n                            </div>\n                        </div>\n                      </div>\n                </div>\n\n          <input type=\"submit\" value=\"Submit Changes\" class=\"btn btn-info btn-block mt-4\">\n        </form>\n    </div>\n    <div class=\"uk-card-footer\">\n        <div class=\"uk-card-header bg-primary-dark uk-margin-small-bottom uk-padding-small\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                  <div class=\"row d-flex align-content-center\">\n                    <div class=\"col-md-10\">\n                        <h5 class=\"uk-margin-remove-bottom uk-margin-remove-left uk-text-bold text-white\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>Site Location List</h5>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text text-white uk-margin-medium-right\"><i class=\"icon ion-md-add-circle-outline ml-1 mr-1\"></i>site</a>\n                    </div>\n                  </div>\n\n                </div>\n            </div>\n        </div>\n        <ul class=\"uk-list uk-list-divider\">\n            <li *ngFor=\"let site of sites\" class=\"uk-margin-small-left\">\n              <div class=\"row d-flex align-content-center\">\n                <div class=\"col-md-10 ext-uppercase justify-content-end\">\n                    <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>{{site.site_name}}</a>\n\n                </div>\n                <div class=\"col-md-2 justify-content-end\">\n                    <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-medium-right\"><i class=\"icon ion-md-create mr-1\"></i>edit</a>\n                </div>\n              </div>\n\n            </li>\n        </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/main/edit/edit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/company/main/edit/edit.component.ts ***!
  \*****************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/site.service */ "./src/app/services/site.service.ts");




var EditComponent = /** @class */ (function () {
    function EditComponent(ss, router, route) {
        this.ss = ss;
        this.router = router;
        this.route = route;
        this.main = {
            company_name: '',
            main_address: '',
            main_address_2: '',
            main_city: '',
            main_state: '',
            main_zip: '',
            main_phone: '',
            main_email: '',
            main_country: '',
            main_contact_email: '',
            main_contact: '',
            main_contact_phone: '',
            main_hr_contact: '',
            main_hr_contact_email: '',
            main_hr_contact_phone: '',
            shipping_address: '',
            shipping_address_2: '',
            shipping_city: '',
            shipping_state: '',
            shipping_zip: '',
            shipping_country: '',
            shipping_phone: '',
            shipping_email: '',
            shipping_contact: ''
        };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.ss.getMain(this.id).subscribe(function (mains) { return _this.main = mains; });
        this.ss.getSites().subscribe(function (sites) {
            _this.sites = sites;
        });
    };
    EditComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            console.log('Not valid');
        }
        else {
            value.id = this.id;
            this.ss.updateMain(value);
            this.router.navigate(['/company']);
        }
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/company/main/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/company/main/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/company/main/settings/settings.component.css":
/*!**************************************************************!*\
  !*** ./src/app/company/main/settings/settings.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvbWFpbi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/main/settings/settings.component.html":
/*!***************************************************************!*\
  !*** ./src/app/company/main/settings/settings.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/company/main/settings/settings.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/company/main/settings/settings.component.ts ***!
  \*************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/company/main/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/company/main/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/company/site/details/site-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/site/details/site-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-icon {\n  font-size: 24px;\n}\n\n.footer-bg {\n  background-color: rgb(251, 251, 251);\n}\n\n.badge-waiting-parts {\n  background-color: coral;\n  color: white;\n}\n\n.badge-waiting-schedule {\n  background-color: rgb(194, 98, 63);\n  color: white;\n}\n\n.badge-paused {\n  background-color: rgb(245, 223, 22);\n  color: darkslategray;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.dd-menu {\n  min-width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9zaXRlL2RldGFpbHMvc2l0ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9kZXRhaWxzL3NpdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZm9vdGVyLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjUxLCAyNTEpO1xufVxuXG4uYmFkZ2Utd2FpdGluZy1wYXJ0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWRnZS13YWl0aW5nLXNjaGVkdWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgOTgsIDYzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFkZ2UtcGF1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjIzLCAyMik7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRkLW1lbnUge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/company/site/details/site-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/company/site/details/site-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-medium-bottom\">\n    <div class=\"card uk-margin-medium-bottom\">\n        <div class=\"uk-card-header bg-info\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons pr-1\">place</i>Site Location - {{site.site_name}}</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Campus Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_city}}, {{site.site_state}}, {{site.site_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{site.site_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{site.site_email}}</li>\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Ship To Location</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_name}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_address}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_city}}, {{site.site_ship_to_state}}, {{site.site_ship_to_zip}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_ship_to_country}}</li>\n                        <br>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Phone: {{site.site_ship_to_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">Shipping Email: {{site.site_ship_to_email}}</li>\n\n                    </ul>\n                </div>\n                <div class=\"col-md-4 mb-2 mt-2\">\n                    <ul class=\"uk-list\">\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Main Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_contact_email}}</li>\n\n                        <li><h6 class=\"uk-text-bold\"><i class=\"material-icons uk-text-primary uk-text-small\">person_pin_circle</i>Maintenance Contact</h6></li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_contact}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_phone}}</li>\n                        <li class=\"uk-text-small uk-margin-medium-left\">{{site.site_maintenance_email}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card-footer d-flex justify-content-around footer-bg\">\n            <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-create ml-1 mr-1\"></i>edit</a>\n            <a routerLink=\"/company/site/job/list/{{site.id}}\"  class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>jobs</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <ul uk-accordion>\n                <li class=\"uk-open\">\n                    <a class=\"uk-accordion-title\" href=\"#\"><i class=\"material-icons pr-1\">assignment</i>Jobs List</a><hr>\n                    <div class=\"uk-accordion-content\">\n                      <!-- <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                        <div class=\"btn-group ml-2 float-right mb-2\" role=\"group\" aria-label=\"Basic example\">\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"icon ion-md-add-circle mr-1\"></i>add new job</button>\n                            <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"icon ion-md-pulse mr-1\"></i>View job stats</button>\n                            <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"icon ion-md-settings mr-1\"></i>modify job settings</button>\n                          </div>\n                        </div>\n                        </div> -->\n                        <div class=\"d-flex justify-content-end\">\n                            <div class=\"dropdown\">\n                                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <i class=\"icon ion-md-pin text-white mr-2\"></i>Site Job Management\n                                </button>\n                                <div class=\"dropdown-menu dd-menu\" aria-labelledby=\"dropdownMenu2\">\n                                  <h6 class=\"dropdown-header\">Job Actions</h6>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-add-circle text-primary mr-2\"></i>New Job</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-pulse text-danger mr-2\"></i>View Site Job Stats</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-settings text-secondary mr-2\"></i>Site Job Settings</a>\n                                  <h6 class=\"dropdown-header\">Document Actions</h6>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-print text-success mr-2\"></i>View/Print Job Reports</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-cloud-upload text-danger mr-2\"></i>Upload Files</a>\n                                  <a class=\"dropdown-item\"><i class=\"icon ion-md-eye text-danger mr-2\"></i>View Documents</a>\n                                </div>\n                              </div>\n                          </div>\n                        <hr class=\"uk-margin-small-bottom\">\n                        <ul uk-accordion class=\"mt-2\">\n                            <li *ngFor=\"let job of jobs\" class=\"uk-open\">\n                                <a class=\"uk-accordion-title uk-text-small uk-text-uppercase pointer\">\n                                  <section *ngIf=\"job.job_status === 'Started'\">\n                                    <span class=\"badge badge-success mt-2 mb-2 mr-3 shadow-sm\">\n                                        <i class=\"icon ion-md-construct mr-1\"></i>\n                                        WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                    </span>\n                                    <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Paused'\">\n                                      <span class=\"badge badge-paused mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Waiting Parts'\">\n                                      <span class=\"badge badge-waiting-parts mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Wait Sched'\">\n                                      <span class=\"badge badge-waiting-schedule mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Closed'\">\n                                      <span class=\"badge badge-secondary mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                  <section *ngIf=\"job.job_status === 'Completed'\">\n                                      <span class=\"badge badge-danger mr-3 mt-2 mb-2 shadow-sm\">\n                                          <i class=\"icon ion-md-construct mr-1\"></i>\n                                          WO#&nbsp;{{job.job_number}} - {{job.job_status}} - Asset: {{job.job_asset}}\n                                      </span>\n                                      <!-- {{job.job_title}} - Asset: {{job.job_asset}} -->\n                                  </section>\n                                </a>\n                                <div class=\"uk-accordion-content\">\n                                    <div class=\"uk-section pt-3 pb-4\">\n                                        <div class=\"uk-container\">\n\n                                            <div class=\"uk-grid-match uk-child-width-1-3@m\" uk-grid>\n                                                <div>\n                                                    <ul class=\"uk-list\">\n                                                        <li class=\"uk-text-small\"><strong>Title: </strong>{{job.job_title}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asset: </strong>{{job.job_asset}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Status: </strong>{{job.job_status}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Type: </strong>{{job.job_type}}</li>\n                                                        <li class=\"uk-text-small\"><strong>Asigned To: </strong>{{job.job_worker}}</li>\n                                                        <li *ngIf=\"job.worker_status === 'On The Job'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-timer text-success ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status === 'Lunch'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status === 'Punched Out'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-alarm text-danger ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status === 'Break'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                                        <li *ngIf=\"job.worker_status === ''\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-help text-info ml-2 mr-2\"></i>Unknown</li>\n                                                    </ul>\n\n                                                </div>\n                                                <div>\n                                                    <p><strong>Description:  </strong>{{job.job_description}}</p>\n                                                </div>\n                                                <div>\n                                                    <p><strong>Logs/Notes:  </strong>{{job.job_notes}}</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"mt-3\">\n                                              <!-- <button routerLink=\"/company/site/job/show/{{job.id}}\" type=\"button\" class=\"btn btn-info btn-sm mt-2\"><i class=\"icon ion-md-eye text-white mr-2\"></i>job details</button>\n                                              <button type=\"button\" class=\"btn btn-info btn-sm mt-2\"><i class=\"icon ion-md-create text-white mr-2\"></i>edit</button> -->\n                                              <div class=\"dropdown\">\n                                                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                      <i class=\"icon ion-md-walk text-white mr-2\"></i>Job Actions\n                                                  </button>\n                                                  <div class=\"dropdown-menu dd-menu\" aria-labelledby=\"dropdownMenu2\">\n                                                    <h6 class=\"dropdown-header\">Job Actions</h6>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-eye text-primary mr-2\"></i>Job Details</a>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-trash text-danger mr-2\"></i>Delete Job</a>\n                                                    <a routerLink=\"/company/site/job/edit/{{job.id}}\"class=\"dropdown-item\"><i class=\"icon ion-md-create text-secondary mr-2\"></i>Edit Job</a>\n                                                    <h6 class=\"dropdown-header\">Worker Actions</h6>\n                                                    <a class=\"dropdown-item\" (click)=\"clockOn(job)\"><i class=\"icon ion-md-clock text-success mr-2\"></i>Clock On</a>\n                                                    <a class=\"dropdown-item\" (click)=\"clockOff(job)\"><i class=\"icon ion-md-clock text-danger mr-2\"></i>Clock Off</a>\n                                                    <a class=\"dropdown-item\" (click)=\"lunchBreak(job)\"><i class=\"icon ion-md-clock text-danger mr-2\"></i>Lunch Break</a>\n                                                    <a class=\"dropdown-item\"><i class=\"icon ion-md-pause text-primary mr-2\"></i>Pause Job</a>\n                                                    <a class=\"dropdown-item\" (click)=\"clockComplete(job)\"><i class=\"icon ion-md-rocket text-secondary mr-2\"></i>Clock Off & Complete Job</a>\n                                                  </div>\n                                                </div>\n                                            </div>\n\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <hr>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n                <li>\n                    <a class=\"uk-accordion-title\" href=\"#\">Item 2</a>\n                    <div class=\"uk-accordion-content\">\n                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>\n                    </div>\n                </li>\n                <li>\n                    <a class=\"uk-accordion-title\" href=\"#\">Item 3</a>\n                    <div class=\"uk-accordion-content\">\n                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>\n                    </div>\n                </li>\n            </ul>\n          </div>\n        </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/company/site/details/site-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/site/details/site-details.component.ts ***!
  \****************************************************************/
/*! exports provided: SiteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDetailsComponent", function() { return SiteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/job.service */ "./src/app/services/job.service.ts");





var SiteDetailsComponent = /** @class */ (function () {
    function SiteDetailsComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
            worker_status: '',
        };
    }
    SiteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.ss.getSite(this.id).subscribe(function (site) {
            _this.site = site;
        });
        this.ss.getJobs().subscribe(function (jobs) {
            _this.jobs = jobs;
        });
    };
    SiteDetailsComponent.prototype.clockOn = function (job) {
        this.job = job;
        this.job.worker_status = 'On The Job';
        this.job.job_status = 'Started';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent.prototype.clockOff = function (job) {
        this.job = job;
        this.job.worker_status = 'Punched Out';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent.prototype.lunchBreak = function (job) {
        this.job = job;
        this.job.worker_status = 'Lunch';
        this.job.job_status = 'Paused';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent.prototype.clockComplete = function (job) {
        this.job = job;
        this.job.worker_status = 'Punched Out';
        this.job.job_status = 'Completed';
        this.js.updateJob(this.job);
    };
    SiteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-details',
            template: __webpack_require__(/*! ./site-details.component.html */ "./src/app/company/site/details/site-details.component.html"),
            styles: [__webpack_require__(/*! ./site-details.component.css */ "./src/app/company/site/details/site-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SiteDetailsComponent);
    return SiteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/company/site/edit/site-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/company/site/edit/site-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9lZGl0L3NpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/site/edit/site-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/company/site/edit/site-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-small-bottom\">\n    <div class=\"uk-card uk-card-default\">\n      <div class=\"uk-card-header bg-info\">\n          <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n              <div class=\"uk-width-expand\">\n                  <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons uk-text-white mr-1\">my_location</i>{{site.site_name}} Campus Details - Edit</h5>\n              </div>\n          </div>\n      </div>\n      <div class=\"uk-card-body\">\n        <small class=\"uk-text-muted\">Please make required changes and submit to to save them.</small>\n        <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">my_location</i>Campus Location Details</h6>\n          <form #siteForm=\"ngForm\" (ngSubmit)=\"onSubmit(siteForm)\">\n            <div class=\"form-group\">\n              <label for=\"site_name\">Site Name</label>\n              <input\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  name=\"site_name\"\n                  #site_name=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':site_name.errors && site_name.touched}\"\n                  [(ngModel)]=\"site.site_name\"\n                  minlength=\"5\"\n                  required\n              >\n\n              <div [hidden]=\"!site_name.errors?.required\" class=\"invalid-feedback\">\n                You must provide a value!\n              </div>\n              <div [hidden]=\"!site_name.errors?.minlength\" class=\"invalid-feedback\">\n                  Value must be 5 characters minimum please!\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"site_address\">Site Address</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control form-control-sm\"\n                    name=\"site_address\"\n                    #site_address=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':site_address.errors && site_address.touched}\"\n                    [(ngModel)]=\"site.site_address\"\n                    minlength=\"10\"\n                    required\n                >\n\n                <div [hidden]=\"!site_address.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a value!\n                </div>\n                <div [hidden]=\"!site_address.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"site_address_2\">Site Address 2</label>\n                  <input\n                      type=\"text\"\n                      class=\"form-control form-control-sm\"\n                      name=\"site_address_2\"\n                      #site_address_2=\"ngModel\"\n                      [ngClass]=\"{'is-invalid':site_address_2.errors && site_address_2.touched}\"\n                      [(ngModel)]=\"site.site_address_2\"\n                      minlength=\"10\"\n                      required\n                  >\n\n                  <div [hidden]=\"!site_address_2.errors?.required\" class=\"invalid-feedback\">\n                    You must provide a value!\n                  </div>\n                  <div [hidden]=\"!site_address_2.errors?.minlength\" class=\"invalid-feedback\">\n                      Value must be 10 characters minimum please!\n                  </div>\n                </div>\n\n              <div class=\"form-row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                      <label for=\"site_city\">Site City</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"site_city\"\n                          #site_city=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':site_city.errors && site_city.touched}\"\n                          [(ngModel)]=\"site.site_city\"\n                          minlength=\"5\"\n                          required\n                      >\n\n                      <div [hidden]=\"!site_city.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!site_city.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 5 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"site_state\">Site State</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"site_state\"\n                            #site_state=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':site_state.errors && site_state.touched}\"\n                            [(ngModel)]=\"site.site_state\"\n                            minlength=\"2\"\n                            required\n                        >\n\n                        <div [hidden]=\"!site_state.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!site_state.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 2 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"site_zip\">Site Zip Code</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"site_zip\"\n                              #site_zip=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':site_zip.errors && site_zip.touched}\"\n                              [(ngModel)]=\"site.site_zip\"\n                              minlength=\"5\"\n                              required\n                          >\n\n                          <div [hidden]=\"!site_zip.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!site_zip.errors?.minlength\" class=\"invalid-feedback\">\n                              Value must be 5 characters minimum please!\n                          </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"site_country\">Site Country</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"site_country\"\n                                #site_country=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':site_country.errors && site_country.touched}\"\n                                [(ngModel)]=\"site.site_country\"\n                                minlength=\"2\"\n                                required\n                            >\n\n                            <div [hidden]=\"!site_country.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!site_country.errors?.minlength\" class=\"invalid-feedback\">\n                                Value must be 2 characters minimum please!\n                            </div>\n                        </div>\n                      </div>\n              </div>\n\n              <div class=\"form-row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"site_phone\"><i class=\"icon ion-md-call mr-1\"></i>Site Phone</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"site_phone\"\n                            #site_phone=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':site_phone.errors && site_phone.touched}\"\n                            [(ngModel)]=\"site.site_phone\"\n                            minlength=\"10\"\n                            pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                            required\n                        >\n\n                        <div [hidden]=\"!site_phone.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!site_phone.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 10 characters minimum please!\n                        </div>\n                        <div [hidden]=\"!site_phone.errors?.pattern\" class=\"invalid-feedback\">\n                            Value must be a valid phone! (123)123-4567 or 123-123-4567 or 1231234567\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                          <label for=\"site_email\"><i class=\"icon ion-md-mail mr-1\"></i>Site Email</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"site_email\"\n                              #site_email=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':site_email.errors && site_email.touched}\"\n                              [(ngModel)]=\"site.site_email\"\n                              pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                              required\n                          >\n\n                          <div [hidden]=\"!site_email.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!site_email.errors?.pattern\" class=\"invalid-feedback\">\n                              Value must be a valid email address!\n                          </div>\n                      </div>\n                    </div>\n                </div>\n                <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">directions_boat</i>Campus Shipping Details</h6>\n\n                  <div class=\"form-group\">\n                      <label for=\"site_ship_to_address\">Shipping Address</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"site_ship_to_address\"\n                          #site_ship_to_address=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':site_ship_to_address.errors && site_ship_to_address.touched}\"\n                          [(ngModel)]=\"site.site_ship_to_address\"\n                          minlength=\"10\"\n                          required\n                      >\n\n                      <div [hidden]=\"!site_ship_to_address.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!site_ship_to_address.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 10 characters minimum please!\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"site_ship_to_address_2\">Shipping Address 2</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"site_ship_to_address_2\"\n                            #site_ship_to_address_2=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':site_ship_to_address_2.errors && site_ship_to_address_2.touched}\"\n                            [(ngModel)]=\"site.site_ship_to_address_2\"\n                            minlength=\"10\"\n                            required\n                        >\n\n                        <div [hidden]=\"!site_ship_to_address_2.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!site_ship_to_address_2.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 10 characters minimum please!\n                        </div>\n                      </div>\n\n                    <div class=\"form-row\">\n                      <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"site_ship_to_city\">Shipping City</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"site_ship_to_city\"\n                                #site_ship_to_city=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':site_ship_to_city.errors && site_ship_to_city.touched}\"\n                                [(ngModel)]=\"site.site_ship_to_city\"\n                                minlength=\"5\"\n                                required\n                            >\n\n                            <div [hidden]=\"!site_ship_to_city.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!site_ship_to_city.errors?.minlength\" class=\"invalid-feedback\">\n                                Value must be 5 characters minimum please!\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                              <label for=\"site_ship_to_state\">Shipping State</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"site_ship_to_state\"\n                                  #site_ship_to_state=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':site_ship_to_state.errors && site_ship_to_state.touched}\"\n                                  [(ngModel)]=\"site.site_ship_to_state\"\n                                  minlength=\"2\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!site_ship_to_state.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!site_ship_to_state.errors?.minlength\" class=\"invalid-feedback\">\n                                  Value must be 2 characters minimum please!\n                              </div>\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"form-group\">\n                                <label for=\"site_ship_to_zip\">Shipping Zip Code</label>\n                                <input\n                                    type=\"text\"\n                                    class=\"form-control form-control-sm\"\n                                    name=\"site_ship_to_zip\"\n                                    #site_ship_to_zip=\"ngModel\"\n                                    [ngClass]=\"{'is-invalid':site_ship_to_zip.errors && site_ship_to_zip.touched}\"\n                                    [(ngModel)]=\"site.site_ship_to_zip\"\n                                    minlength=\"5\"\n                                    required\n                                >\n\n                                <div [hidden]=\"!site_ship_to_zip.errors?.required\" class=\"invalid-feedback\">\n                                  You must provide a value!\n                                </div>\n                                <div [hidden]=\"!site_ship_to_zip.errors?.minlength\" class=\"invalid-feedback\">\n                                    Value must be 5 characters minimum please!\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                              <div class=\"form-group\">\n                                  <label for=\"site_ship_to_country\">Shipping Country</label>\n                                  <input\n                                      type=\"text\"\n                                      class=\"form-control form-control-sm\"\n                                      name=\"site_ship_to_country\"\n                                      #site_ship_to_country=\"ngModel\"\n                                      [ngClass]=\"{'is-invalid':site_ship_to_country.errors && site_ship_to_country.touched}\"\n                                      [(ngModel)]=\"site.site_ship_to_country\"\n                                      minlength=\"2\"\n                                      required\n                                  >\n\n                                  <div [hidden]=\"!site_ship_to_country.errors?.required\" class=\"invalid-feedback\">\n                                    You must provide a value!\n                                  </div>\n                                  <div [hidden]=\"!site_ship_to_country.errors?.minlength\" class=\"invalid-feedback\">\n                                      Value must be 2 characters minimum please!\n                                  </div>\n                              </div>\n                            </div>\n                    </div>\n\n                    <div class=\"form-row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                              <label for=\"site_ship_to_phone\"><i class=\"icon ion-md-call mr-1\"></i>Shipping Phone</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"site_ship_to_phone\"\n                                  #site_ship_to_phone=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':site_ship_to_phone.errors && site_ship_to_phone.touched}\"\n                                  [(ngModel)]=\"site.site_ship_to_phone\"\n                                  minlength=\"10\"\n                                  pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!site_ship_to_phone.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!site_ship_to_phone.errors?.minlength\" class=\"invalid-feedback\">\n                                  Value must be 10 characters minimum please!\n                              </div>\n                              <div [hidden]=\"!site_ship_to_phone.errors?.pattern\" class=\"invalid-feedback\">\n                                  Value must be a valid phone! (123)123-4567 or 123-123-4567 or 1231234567\n                              </div>\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"site_ship_to_email\"><i class=\"icon ion-md-mail mr-1\"></i>Shipping Email</label>\n                                <input\n                                    type=\"text\"\n                                    class=\"form-control form-control-sm\"\n                                    name=\"site_ship_to_email\"\n                                    #site_ship_to_email=\"ngModel\"\n                                    [ngClass]=\"{'is-invalid':site_ship_to_email.errors && site_ship_to_email.touched}\"\n                                    [(ngModel)]=\"site.site_ship_to_email\"\n                                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                    required\n                                >\n\n                                <div [hidden]=\"!site_ship_to_email.errors?.required\" class=\"invalid-feedback\">\n                                  You must provide a value!\n                                </div>\n                                <div [hidden]=\"!site_ship_to_email.errors?.pattern\" class=\"invalid-feedback\">\n                                    Value must be a valid email address!\n                                </div>\n                            </div>\n                          </div>\n                      </div>\n\n                <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\">person</i>Campus Contact Details</h6>\n              <div class=\"form-row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label for=\"site_contact\"><i class=\"icon ion-md-person mr-1\"></i>Main Contact</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"site_contact\"\n                            #site_contact=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':site_contact.errors && site_contact.touched}\"\n                            [(ngModel)]=\"site.site_contact\"\n                            minlength=\"5\"\n                            required\n                        >\n\n                        <div [hidden]=\"!site_contact.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!site_contact.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 5 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <label for=\"site_contact_phone\"><i class=\"icon ion-md-call mr-1\"></i>Main Contact Phone</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"site_contact_phone\"\n                              #site_contact_phone=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':site_contact_phone.errors && site_contact_phone.touched}\"\n                              [(ngModel)]=\"site.site_contact_phone\"\n                              pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                              required\n                          >\n\n                          <div [hidden]=\"!site_contact_phone.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!site_contact_phone.errors?.pattern\" class=\"invalid-feedback\">\n                              Please use a valid phone number... (321) 234-4567 | 321-234-4567 | 3212344567\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"site_contact_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main Contact Email</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"site_contact_email\"\n                                #site_contact_email=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':site_contact_email.errors && site_contact_email.touched}\"\n                                [(ngModel)]=\"site.site_contact_email\"\n                                pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                required\n                            >\n\n                            <div [hidden]=\"!site_contact_email.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!site_contact_email.errors?.pattern\" class=\"invalid-feedback\">\n                                Please provide a valid email!\n                            </div>\n                        </div>\n                      </div>\n                </div>\n\n                <div class=\"form-row\">\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <label for=\"site_maintenance_contact\"><i class=\"icon ion-md-person mr-1\"></i>Maintenance Contact</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"site_maintenance_contact\"\n                              #site_maintenance_contact=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':site_maintenance_contact.errors && site_maintenance_contact.touched}\"\n                              [(ngModel)]=\"site.site_maintenance_contact\"\n                              minlength=\"5\"\n                              required\n                          >\n\n                          <div [hidden]=\"!site_maintenance_contact.errors?.required\" class=\"invalid-feedback\">\n                            You must provide a value!\n                          </div>\n                          <div [hidden]=\"!site_maintenance_contact.errors?.minlength\" class=\"invalid-feedback\">\n                              Value must be 5 characters minimum please!\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"site_maintenance_phone\"><i class=\"icon ion-md-call mr-1\"></i>Maintenance Contact Phone</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-sm\"\n                                name=\"site_maintenance_phone\"\n                                #site_maintenance_phone=\"ngModel\"\n                                [ngClass]=\"{'is-invalid':site_maintenance_phone.errors && site_maintenance_phone.touched}\"\n                                [(ngModel)]=\"site.site_maintenance_phone\"\n                                pattern=\"^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$\"\n                                required\n                            >\n\n                            <div [hidden]=\"!site_maintenance_phone.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                            </div>\n                            <div [hidden]=\"!site_maintenance_phone.errors?.pattern\" class=\"invalid-feedback\">\n                                Please use a valid phone number... (321) 234-4567 | 321-234-4567 | 3212344567\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                              <label for=\"site_maintenance_email\"><i class=\"icon ion-md-mail mr-1\"></i>Main HR Contact Email</label>\n                              <input\n                                  type=\"text\"\n                                  class=\"form-control form-control-sm\"\n                                  name=\"site_maintenance_email\"\n                                  #site_maintenance_email=\"ngModel\"\n                                  [ngClass]=\"{'is-invalid':site_maintenance_email.errors && site_maintenance_email.touched}\"\n                                  [(ngModel)]=\"site.site_maintenance_email\"\n                                  pattern=\"^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$\"\n                                  required\n                              >\n\n                              <div [hidden]=\"!site_maintenance_email.errors?.required\" class=\"invalid-feedback\">\n                                You must provide a value!\n                              </div>\n                              <div [hidden]=\"!site_maintenance_email.errors?.pattern\" class=\"invalid-feedback\">\n                                  Please provide a valid email!\n                              </div>\n                          </div>\n                        </div>\n                  </div>\n\n            <input type=\"submit\" value=\"Submit Changes\" class=\"btn btn-info btn-block mt-4\">\n          </form>\n      </div>\n      <div class=\"uk-card-footer\">\n          <!-- <div class=\"uk-card-header bg-primary-dark uk-margin-small-bottom uk-padding-small\">\n              <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                  <div class=\"uk-width-expand\">\n                    <div class=\"row d-flex align-content-center\">\n                      <div class=\"col-md-10\">\n                          <h5 class=\"uk-margin-remove-bottom uk-margin-remove-left uk-text-bold text-white\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>Site Location List</h5>\n                      </div>\n                      <div class=\"col-md-2\">\n                          <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text text-white uk-margin-medium-right\"><i class=\"icon ion-md-add-circle-outline ml-1 mr-1\"></i>site</a>\n                      </div>\n                    </div>\n\n                  </div>\n              </div>\n          </div>\n          <ul class=\"uk-list uk-list-divider\">\n              <li *ngFor=\"let site of sites\" class=\"uk-margin-small-left\">\n                <div class=\"row d-flex align-content-center\">\n                  <div class=\"col-md-10 ext-uppercase justify-content-end\">\n                      <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>{{site.site_name}}</a>\n\n                  </div>\n                  <div class=\"col-md-2 justify-content-end\">\n                      <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-medium-right\"><i class=\"icon ion-md-create mr-1\"></i>edit</a>\n                  </div>\n                </div>\n\n              </li>\n          </ul> -->\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/company/site/edit/site-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/company/site/edit/site-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: SiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEditComponent", function() { return SiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/site.service */ "./src/app/services/site.service.ts");




var SiteEditComponent = /** @class */ (function () {
    function SiteEditComponent(ss, route, router) {
        this.ss = ss;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_address_2: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_address_2: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
    }
    SiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.ss.getSite(this.id).subscribe(function (site) {
            _this.site = site;
        });
    };
    SiteEditComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            console.log('Not valid');
        }
        else {
            value.id = this.id;
            this.ss.updateSite(value);
            this.router.navigate(["/company/site/" + this.id]);
        }
    };
    SiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-edit',
            template: __webpack_require__(/*! ./site-edit.component.html */ "./src/app/company/site/edit/site-edit.component.html"),
            styles: [__webpack_require__(/*! ./site-edit.component.css */ "./src/app/company/site/edit/site-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SiteEditComponent);
    return SiteEditComponent;
}());



/***/ }),

/***/ "./src/app/company/site/jobs/add/job-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/company/site/jobs/add/job-add.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9qb2JzL2FkZC9qb2ItYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/company/site/jobs/add/job-add.component.html":
/*!**************************************************************!*\
  !*** ./src/app/company/site/jobs/add/job-add.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-small-bottom\">\n    <div class=\"uk-card uk-card-default\">\n      <div class=\"uk-card-header bg-info\">\n          <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n              <div class=\"uk-width-expand\">\n                  <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>{{site.site_name}} - Add Job</h5>\n              </div>\n          </div>\n      </div>\n      <div class=\"uk-card-body\">\n        <small class=\"uk-text-muted\">Please make required changes and submit to to save them.</small>\n        <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\"></i>Job Details</h6>\n          <form #jobForm=\"ngForm\" (ngSubmit)=\"onSubmit(jobForm)\">\n            <div class=\"form-group\">\n              <label for=\"job_title\">Job Title</label>\n              <input\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  name=\"job_title\"\n                  #job_title=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':job_title.errors && job_title.touched}\"\n                  [(ngModel)]=\"job.job_title\"\n                  minlength=\"5\"\n                  maxlength=\"25\"\n                  required\n              >\n              <input\n                  type=\"hidden\"\n                  class=\"form-control form-control-sm\"\n                  name=\"site_id\"\n                  #site_id=\"ngModel\"\n                  [(ngModel)]=\"job.site_id\"\n              >\n\n              <div [hidden]=\"!job_title.errors?.required\" class=\"invalid-feedback\">\n                You must provide a value!\n              </div>\n              <div [hidden]=\"!job_title.errors?.minlength\" class=\"invalid-feedback\">\n                  Value must be 5 characters minimum please!\n              </div>\n              <div [hidden]=\"!job_title.errors?.maxlength\" class=\"invalid-feedback\">\n                  Value must be 25 characters maximum please!\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"job_description\">Job Description</label>\n                <textarea\n                    type=\"text\"\n                    rows=\"3\"\n                    class=\"form-control form-control-sm\"\n                    name=\"job_description\"\n                    #job_description=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':job_description.errors && job_description.touched}\"\n                    [(ngModel)]=\"job.job_description\"\n                    minlength=\"10\"\n                    required\n                ></textarea>\n\n                <div [hidden]=\"!job_description.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a value!\n                </div>\n                <div [hidden]=\"!job_description.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                      <label for=\"job_status\">Job Status</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"job_status\"\n                          #job_status=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':job_status.errors && job_status.touched}\"\n                          [(ngModel)]=\"job.job_status\"\n                          minlength=\"5\"\n                          required\n                      >\n\n                      <div [hidden]=\"!job_status.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!job_status.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 5 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"job_worker\">Worker Assignment</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"job_worker\"\n                            #job_worker=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':job_worker.errors && job_worker.touched}\"\n                            [(ngModel)]=\"job.job_worker\"\n                            minlength=\"2\"\n                            required\n                        >\n\n                        <div [hidden]=\"!job_worker.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!job_worker.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 2 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"job_type\">Job Type</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"job_type\"\n                              #job_type=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':job_type.errors && job_type.touched}\"\n                              [(ngModel)]=\"job.job_type\"\n                              required\n                          >\n                          <div [hidden]=\"!job_type.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                          </div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"job_asset\">Asset</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"job_asset\"\n                              #job_asset=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':job_asset.errors && job_asset.touched}\"\n                              [(ngModel)]=\"job.job_asset\"\n                              required\n                          >\n                          <div [hidden]=\"!job_asset.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                          </div>\n                      </div>\n                  </div>\n                </div>\n\n            <input type=\"submit\" value=\"Submit Changes\" class=\"btn btn-info btn-block mt-4\">\n          </form>\n      </div>\n      <div class=\"uk-card-footer\">\n          <!-- <div class=\"uk-card-header bg-primary-dark uk-margin-small-bottom uk-padding-small\">\n              <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                  <div class=\"uk-width-expand\">\n                    <div class=\"row d-flex align-content-center\">\n                      <div class=\"col-md-10\">\n                          <h5 class=\"uk-margin-remove-bottom uk-margin-remove-left uk-text-bold text-white\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>Site Location List</h5>\n                      </div>\n                      <div class=\"col-md-2\">\n                          <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text text-white uk-margin-medium-right\"><i class=\"icon ion-md-add-circle-outline ml-1 mr-1\"></i>site</a>\n                      </div>\n                    </div>\n\n                  </div>\n              </div>\n          </div>\n          <ul class=\"uk-list uk-list-divider\">\n              <li *ngFor=\"let site of sites\" class=\"uk-margin-small-left\">\n                <div class=\"row d-flex align-content-center\">\n                  <div class=\"col-md-10 ext-uppercase justify-content-end\">\n                      <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>{{site.site_name}}</a>\n\n                  </div>\n                  <div class=\"col-md-2 justify-content-end\">\n                      <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-medium-right\"><i class=\"icon ion-md-create mr-1\"></i>edit</a>\n                  </div>\n                </div>\n\n              </li>\n          </ul> -->\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/company/site/jobs/add/job-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company/site/jobs/add/job-add.component.ts ***!
  \************************************************************/
/*! exports provided: JobAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobAddComponent", function() { return JobAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");





var JobAddComponent = /** @class */ (function () {
    function JobAddComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
        };
    }
    JobAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.job.site_id = this.id;
        this.ss.getSite(this.id).subscribe(function (site) {
            _this.site = site;
        });
    };
    JobAddComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            return null;
        }
        else {
            this.js.newJob(value);
        }
        this.router.navigate(["/company/site/" + this.site.id]);
    };
    JobAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-add',
            template: __webpack_require__(/*! ./job-add.component.html */ "./src/app/company/site/jobs/add/job-add.component.html"),
            styles: [__webpack_require__(/*! ./job-add.component.css */ "./src/app/company/site/jobs/add/job-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JobAddComponent);
    return JobAddComponent;
}());



/***/ }),

/***/ "./src/app/company/site/jobs/edit/edit-job.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company/site/jobs/edit/edit-job.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9qb2JzL2VkaXQvZWRpdC1qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/site/jobs/edit/edit-job.component.html":
/*!****************************************************************!*\
  !*** ./src/app/company/site/jobs/edit/edit-job.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-small-bottom\">\n    <div class=\"uk-card uk-card-default\">\n      <div class=\"uk-card-header bg-info\">\n          <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n              <div class=\"uk-width-expand\">\n                  <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>Editing Job - {{job.job_title}}</h5>\n              </div>\n          </div>\n      </div>\n      <div class=\"uk-card-body\">\n        <small class=\"uk-text-muted\">Please make required changes and submit to to save them.</small>\n        <h6 class=\"uk-text-bold uk-margin-small-top\"><i class=\"material-icons uk-text-primary mr-1\"></i>Job Details</h6>\n          <form #jobForm=\"ngForm\" (ngSubmit)=\"onSubmit(jobForm)\">\n            <div class=\"form-group\">\n              <label for=\"job_title\">Job Title</label>\n              <input\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  name=\"job_title\"\n                  #job_title=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':job_title.errors && job_title.touched}\"\n                  [(ngModel)]=\"job.job_title\"\n                  minlength=\"5\"\n                  maxlength=\"25\"\n                  required\n              >\n              <input\n                  type=\"hidden\"\n                  class=\"form-control form-control-sm\"\n                  name=\"site_id\"\n                  #site_id=\"ngModel\"\n                  [(ngModel)]=\"job.site_id\"\n              >\n              <input\n                  type=\"hidden\"\n                  class=\"form-control form-control-sm\"\n                  name=\"job_id\"\n                  #job_id=\"ngModel\"\n                  [(ngModel)]=\"job.id\"\n              >\n\n              <div [hidden]=\"!job_title.errors?.required\" class=\"invalid-feedback\">\n                You must provide a value!\n              </div>\n              <div [hidden]=\"!job_title.errors?.minlength\" class=\"invalid-feedback\">\n                  Value must be 5 characters minimum please!\n              </div>\n              <div [hidden]=\"!job_title.errors?.maxlength\" class=\"invalid-feedback\">\n                  Value must be 25 characters maximum please!\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"job_description\">Job Description</label>\n                <textarea\n                    type=\"text\"\n                    rows=\"3\"\n                    class=\"form-control form-control-sm\"\n                    name=\"job_description\"\n                    #job_description=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':job_description.errors && job_description.touched}\"\n                    [(ngModel)]=\"job.job_description\"\n                    minlength=\"10\"\n                    required\n                ></textarea>\n\n                <div [hidden]=\"!job_description.errors?.required\" class=\"invalid-feedback\">\n                  You must provide a value!\n                </div>\n                <div [hidden]=\"!job_description.errors?.minlength\" class=\"invalid-feedback\">\n                    Value must be 10 characters minimum please!\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                      <label for=\"job_status\">Job Status</label>\n                      <input\n                          type=\"text\"\n                          class=\"form-control form-control-sm\"\n                          name=\"job_status\"\n                          #job_status=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':job_status.errors && job_status.touched}\"\n                          [(ngModel)]=\"job.job_status\"\n                          minlength=\"5\"\n                          required\n                      >\n\n                      <div [hidden]=\"!job_status.errors?.required\" class=\"invalid-feedback\">\n                        You must provide a value!\n                      </div>\n                      <div [hidden]=\"!job_status.errors?.minlength\" class=\"invalid-feedback\">\n                          Value must be 5 characters minimum please!\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"job_worker\">Worker Assignment</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-sm\"\n                            name=\"job_worker\"\n                            #job_worker=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':job_worker.errors && job_worker.touched}\"\n                            [(ngModel)]=\"job.job_worker\"\n                            minlength=\"2\"\n                            required\n                        >\n\n                        <div [hidden]=\"!job_worker.errors?.required\" class=\"invalid-feedback\">\n                          You must provide a value!\n                        </div>\n                        <div [hidden]=\"!job_worker.errors?.minlength\" class=\"invalid-feedback\">\n                            Value must be 2 characters minimum please!\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"job_type\">Job Type</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"job_type\"\n                              #job_type=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':job_type.errors && job_type.touched}\"\n                              [(ngModel)]=\"job.job_type\"\n                              required\n                          >\n                          <div [hidden]=\"!job_type.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                          </div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"job_asset\">Asset</label>\n                          <input\n                              type=\"text\"\n                              class=\"form-control form-control-sm\"\n                              name=\"job_asset\"\n                              #job_asset=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':job_asset.errors && job_asset.touched}\"\n                              [(ngModel)]=\"job.job_asset\"\n                              required\n                          >\n                          <div [hidden]=\"!job_asset.errors?.required\" class=\"invalid-feedback\">\n                              You must provide a value!\n                          </div>\n                      </div>\n                  </div>\n                </div>\n\n            <input type=\"submit\" value=\"Submit Changes\" class=\"btn btn-info btn-block mt-4\">\n          </form>\n      </div>\n      <div class=\"uk-card-footer\">\n          <!-- <div class=\"uk-card-header bg-primary-dark uk-margin-small-bottom uk-padding-small\">\n              <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                  <div class=\"uk-width-expand\">\n                    <div class=\"row d-flex align-content-center\">\n                      <div class=\"col-md-10\">\n                          <h5 class=\"uk-margin-remove-bottom uk-margin-remove-left uk-text-bold text-white\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>Site Location List</h5>\n                      </div>\n                      <div class=\"col-md-2\">\n                          <a routerLink=\"/company/edit/{{main.id}}\" class=\"uk-button uk-button-text text-white uk-margin-medium-right\"><i class=\"icon ion-md-add-circle-outline ml-1 mr-1\"></i>site</a>\n                      </div>\n                    </div>\n\n                  </div>\n              </div>\n          </div>\n          <ul class=\"uk-list uk-list-divider\">\n              <li *ngFor=\"let site of sites\" class=\"uk-margin-small-left\">\n                <div class=\"row d-flex align-content-center\">\n                  <div class=\"col-md-10 ext-uppercase justify-content-end\">\n                      <a routerLink=\"/company/site/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pin ml-1 mr-1\"></i>{{site.site_name}}</a>\n\n                  </div>\n                  <div class=\"col-md-2 justify-content-end\">\n                      <a routerLink=\"/company/site/edit/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-medium-right\"><i class=\"icon ion-md-create mr-1\"></i>edit</a>\n                  </div>\n                </div>\n\n              </li>\n          </ul> -->\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/company/site/jobs/edit/edit-job.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company/site/jobs/edit/edit-job.component.ts ***!
  \**************************************************************/
/*! exports provided: EditJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditJobComponent", function() { return EditJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");





var EditJobComponent = /** @class */ (function () {
    function EditJobComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
        };
    }
    EditJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobId = this.route.snapshot.params.id;
        this.id = this.job.site_id;
        this.js.getJob(this.jobId).subscribe(function (job) {
            _this.job = job;
        });
    };
    EditJobComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            return null;
        }
        else {
            value.id = this.jobId;
            this.js.updateJob(value);
        }
        this.router.navigate(["/company/site/" + this.job.site_id]);
    };
    EditJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-job',
            template: __webpack_require__(/*! ./edit-job.component.html */ "./src/app/company/site/jobs/edit/edit-job.component.html"),
            styles: [__webpack_require__(/*! ./edit-job.component.css */ "./src/app/company/site/jobs/edit/edit-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditJobComponent);
    return EditJobComponent;
}());



/***/ }),

/***/ "./src/app/company/site/jobs/lists/list-jobs.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/site/jobs/lists/list-jobs.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge-waiting-parts {\n  background-color: coral;\n  color: white;\n}\n\n.badge-waiting-schedule {\n  background-color: rgb(194, 98, 63);\n  color: white;\n}\n\n.badge-paused {\n  background-color: rgb(245, 223, 22);\n  color: darkslategray;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9zaXRlL2pvYnMvbGlzdHMvbGlzdC1qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9zaXRlL2pvYnMvbGlzdHMvbGlzdC1qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2Utd2FpdGluZy1wYXJ0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWRnZS13YWl0aW5nLXNjaGVkdWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgOTgsIDYzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFkZ2UtcGF1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjIzLCAyMik7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/company/site/jobs/lists/list-jobs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/company/site/jobs/lists/list-jobs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-medium-bottom\">\n    <div class=\"card\">\n        <div class=\"uk-card-header bg-primary-dark\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"material-icons pr-1\">place</i>{{site.site_name}} - Jobs List</h5>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"uk-card-body\">\n            <button routerLink=\"/company/site/{{site.id}}\" type=\"button\" class=\"btn btn-info mb-4\">back</button>\n            <ul uk-accordion class=\"mt-2\">\n                <li *ngFor=\"let job of jobs\" class=\"uk-open\">\n                    <a class=\"uk-accordion-title uk-text-small uk-text-uppercase pointer\">\n                      <section *ngIf=\"job.job_status === 'Started'\">\n                        <span class=\"badge badge-success mr-3\">\n                            <i class=\"icon ion-md-construct mr-1\"></i>\n                            {{job.job_number}} - {{job.job_status}}\n                        </span>\n                        {{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n                      <section *ngIf=\"job.job_status === 'Paused'\">\n                          <span class=\"badge badge-paused mr-3\">\n                              <i class=\"icon ion-md-construct mr-1\"></i>\n                              {{job.job_number}} - {{job.job_status}}\n                          </span>{{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n                      <section *ngIf=\"job.job_status === 'Waiting Parts'\">\n                          <span class=\"badge badge-waiting-parts mr-3\">\n                              <i class=\"icon ion-md-construct mr-1\"></i>\n                              {{job.job_number}} - {{job.job_status}}\n                          </span>{{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n                      <section *ngIf=\"job.job_status === 'Waiting Schedule'\">\n                          <span class=\"badge badge-waiting-schedule mr-3\">\n                              <i class=\"icon ion-md-construct mr-1\"></i>\n                              {{job.job_number}} - {{job.job_status}}\n                          </span>{{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n                      <section *ngIf=\"job.job_status === 'Closed'\">\n                          <span class=\"badge badge-secondary mr-sm-5 mr-md-3\">\n                              <i class=\"icon ion-md-construct mr-1\"></i>\n                              {{job.job_number}} - {{job.job_status}}\n                          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{job.job_title}} - Asset: {{job.job_asset}}\n                      </section>\n\n                    </a>\n                    <div class=\"uk-accordion-content\">\n                        <div class=\"uk-section pt-3 pb-4\">\n                            <div class=\"uk-container\">\n\n                                <div class=\"uk-grid-match uk-child-width-1-3@m\" uk-grid>\n                                    <div>\n                                        <ul class=\"uk-list\">\n                                            <li class=\"uk-text-small\"><strong>Title: </strong>{{job.job_title}}</li>\n                                            <li class=\"uk-text-small\"><strong>Asset: </strong>{{job.job_asset}}</li>\n                                            <li class=\"uk-text-small\"><strong>Status: </strong>{{job.job_status}}</li>\n                                            <li class=\"uk-text-small\"><strong>Type: </strong>{{job.job_type}}</li>\n                                            <li class=\"uk-text-small\"><strong>Asigned To: </strong>{{job.job_worker}}</li>\n                                            <li *ngIf=\"job.worker_status === 'On The Job'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-timer text-success ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                            <li *ngIf=\"job.worker_status === 'Lunch'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                            <li *ngIf=\"job.worker_status === 'Punched Out'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-alarm text-danger ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                            <li *ngIf=\"job.worker_status === 'Break'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                            <li *ngIf=\"job.worker_status === ''\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-help text-info ml-2 mr-2\"></i>Unknown</li>\n                                        </ul>\n                                    </div>\n                                    <div>\n                                        <p><strong>Description:  </strong>{{job.job_description}}</p>\n                                    </div>\n                                    <div>\n                                        <p><strong>Logs/Notes:  </strong>{{job.job_notes}}</p>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                </li>\n            </ul>\n\n        </div>\n        <div class=\"card-footer d-flex justify-content-around footer-bg\">\n            <a routerLink=\"/company/site/job/add/{{site.id}}\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-add-circle ml-1 mr-1\"></i>add job</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text uk-margin-small-right\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n\n\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/company/site/jobs/lists/list-jobs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/site/jobs/lists/list-jobs.component.ts ***!
  \****************************************************************/
/*! exports provided: ListJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListJobsComponent", function() { return ListJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");





var ListJobsComponent = /** @class */ (function () {
    function ListJobsComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
            worker_status: '',
            job_number: ''
        };
    }
    ListJobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.ss.getSite(this.id).subscribe(function (site) {
            _this.site = site;
        });
        this.ss.getJobs().subscribe(function (jobs) {
            _this.jobs = jobs;
        });
    };
    ListJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-jobs',
            template: __webpack_require__(/*! ./list-jobs.component.html */ "./src/app/company/site/jobs/lists/list-jobs.component.html"),
            styles: [__webpack_require__(/*! ./list-jobs.component.css */ "./src/app/company/site/jobs/lists/list-jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListJobsComponent);
    return ListJobsComponent;
}());



/***/ }),

/***/ "./src/app/company/site/jobs/show/show-job.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company/site/jobs/show/show-job.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2l0ZS9qb2JzL3Nob3cvc2hvdy1qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/site/jobs/show/show-job.component.html":
/*!****************************************************************!*\
  !*** ./src/app/company/site/jobs/show/show-job.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container uk-margin-medium-bottom\">\n    <div class=\"card uk-margin-medium-bottom\">\n        <div class=\"card-header bg-info\">\n            <div class=\"uk-grid-large uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-expand\">\n                    <h5 class=\"uk-margin-remove-bottom uk-text-bold text-white\"><i class=\"icon ion-md-construct text-white mr-2\"></i>Job Details and Stats - {{job.job_title}}</h5>\n                </div>\n            </div>\n        </div>\n            <div class=\"uk-section pt-4 pb-4\">\n                <div class=\"uk-container\">\n                    <span *ngIf=\"!isLoading\" uk-spinner=\"ratio: 4.5\"></span>\n\n                    <h3>Job Details</h3>\n                    <hr>\n\n                    <div class=\"uk-grid-match uk-child-width-1-3@m\" uk-grid>\n                        <div>\n                            <ul class=\"uk-list\">\n                                <li class=\"uk-text-small\"><strong>Title: </strong>{{job.job_title}}</li>\n                                <li class=\"uk-text-small\"><strong>Asset: </strong>{{job.job_asset}}</li>\n                                <li class=\"uk-text-small\"><strong>Status: </strong>{{job.job_status}}</li>\n                                <li class=\"uk-text-small\"><strong>Type: </strong>{{job.job_type}}</li>\n                                <li class=\"uk-text-small\"><strong>Asigned To: </strong>{{job.job_worker}}</li>\n                                <li *ngIf=\"job.worker_status === 'On The Job'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-timer text-success ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                <li *ngIf=\"job.worker_status === 'Lunch'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                <li *ngIf=\"job.worker_status === 'Punched Out'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-alarm text-danger ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                <li *ngIf=\"job.worker_status === 'Break'\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-pause text-warning ml-2 mr-2\"></i>{{job.worker_status}}</li>\n                                <li *ngIf=\"job.worker_status === ''\" class=\"uk-text-small\"><strong>Worker Status: </strong><i class=\"icon ion-md-help text-info ml-2 mr-2\"></i>Unknown</li>\n                            </ul>\n                        </div>\n                        <div>\n                            <p><strong>Description:  </strong>{{job.job_description}}</p>\n                        </div>\n                        <div>\n                            <p><strong>Logs/Notes:  </strong>{{job.job_notes}}</p>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        <div class=\"card-footer d-flex justify-content-around footer-bg mt-3\">\n            <a routerLink=\"/company/site/job/edit/{{job.id}}\" class=\"uk-button uk-button-text mr-5 ml-5\"><i class=\"icon ion-md-create ml-1 mr-1\"></i>edit</a>\n            <a href=\"#\" class=\"uk-button uk-button-text mr-5 ml-5\"><i class=\"icon ion-md-construct ml-1 mr-1\"></i>jobs</a>\n            <a href=\"#\" class=\"uk-button uk-button-text mr-5 ml-5\"><i class=\"icon ion-md-pulse ml-1 mr-1\"></i>stats</a>\n            <a href=\"#\" class=\"uk-button uk-button-text mr-5 ml-5\"><i class=\"icon ion-md-switch ml-1 mr-1\"></i>settings</a>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/company/site/jobs/show/show-job.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company/site/jobs/show/show-job.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowJobComponent", function() { return ShowJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");





var ShowJobComponent = /** @class */ (function () {
    function ShowJobComponent(ss, js, route, router) {
        this.ss = ss;
        this.js = js;
        this.route = route;
        this.router = router;
        this.site = {
            id: '',
            site_name: '',
            site_address: '',
            site_city: '',
            site_state: '',
            site_zip: '',
            site_phone: '',
            site_email: '',
            site_country: '',
            site_contact_email: '',
            site_contact_first_name: '',
            site_contact_last_name: '',
            site_contact_phone: '',
            site_maintenance_contact: '',
            site_maintenance_email: '',
            site_maintenance_phone: '',
            site_ship_to_address: '',
            site_ship_to_city: '',
            site_ship_to_state: '',
            site_ship_to_zip: '',
            site_ship_to_country: '',
            site_ship_to_phone: '',
            site_ship_to_email: ''
        };
        this.job = {
            id: '',
            job_title: '',
            job_description: '',
            job_asset: '',
            job_notes: '',
            job_status: '',
            job_type: '',
            job_worker: '',
            site_id: '',
            worker_status: '',
        };
    }
    ShowJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = false;
        console.log(this.isLoading);
        this.jobId = this.route.snapshot.params.id;
        this.id = this.job.site_id;
        this.js.getJob(this.jobId).subscribe(function (job) {
            _this.job = job;
        });
        this.isLoading = true;
        console.log(this.isLoading);
    };
    ShowJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-job',
            template: __webpack_require__(/*! ./show-job.component.html */ "./src/app/company/site/jobs/show/show-job.component.html"),
            styles: [__webpack_require__(/*! ./show-job.component.css */ "./src/app/company/site/jobs/show/show-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShowJobComponent);
    return ShowJobComponent;
}());



/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var JobService = /** @class */ (function () {
    function JobService(afs) {
        this.afs = afs;
        this.jobCollection = this.afs.collection('site_jobs', function (ref) { return ref.orderBy('job_title'); });
        this.siteCollection = this.afs.collection('site_locations', function (ref) { return ref.orderBy('site_name'); });
    }
    JobService.prototype.getSites = function () {
        this.sites = this.siteCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.sites;
    };
    JobService.prototype.getSite = function (id) {
        this.siteDoc = this.afs.doc("site_locations/" + id);
        this.site = this.siteDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.site;
    };
    JobService.prototype.getJob = function (id) {
        this.jobDoc = this.afs.doc("site_jobs/" + id);
        this.job = this.jobDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.job;
    };
    JobService.prototype.getJobs = function () {
        this.jobs = this.jobCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.jobs;
    };
    JobService.prototype.newJob = function (job) {
        this.jobCollection.add(job);
    };
    JobService.prototype.updateJob = function (job) {
        this.jobDoc = this.afs.doc("site_jobs/" + job.id);
        this.jobDoc.update(job);
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/services/site.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/site.service.ts ***!
  \******************************************/
/*! exports provided: SiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteService", function() { return SiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SiteService = /** @class */ (function () {
    function SiteService(afs) {
        this.afs = afs;
        this.siteCollection = this.afs.collection('site_locations', function (ref) { return ref.orderBy('site_name'); });
        this.mainCollection = this.afs.collection('main_company', function (ref) { return ref.orderBy('company_name'); });
        this.jobCollection = this.afs.collection('site_jobs', function (ref) { return ref.orderBy('job_title'); });
    }
    SiteService.prototype.getSites = function () {
        this.sites = this.siteCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.sites;
    };
    SiteService.prototype.getMains = function () {
        this.mains = this.mainCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.mains;
    };
    SiteService.prototype.getJobs = function () {
        this.jobs = this.jobCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        return this.jobs;
    };
    SiteService.prototype.getMain = function (id) {
        this.mainDoc = this.afs.doc("main_company/" + id);
        this.main = this.mainDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.main;
    };
    SiteService.prototype.getSite = function (id) {
        this.siteDoc = this.afs.doc("site_locations/" + id);
        this.site = this.siteDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.site;
    };
    SiteService.prototype.updateMain = function (main) {
        this.mainDoc = this.afs.doc("main_company/" + main.id);
        this.mainDoc.update(main);
    };
    SiteService.prototype.updateSite = function (site) {
        this.siteDoc = this.afs.doc("site_locations/" + site.id);
        this.siteDoc.update(site);
    };
    SiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], SiteService);
    return SiteService;
}());



/***/ }),

/***/ "./src/app/static/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/static/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/static/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/static/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/static/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/static/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/static/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/static/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/static/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/static/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bk-color {\n  background: linear-gradient(to left, #0e334b, #012e5a);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFzRDtBQUN4RCIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmstY29sb3Ige1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzBlMzM0YiwgIzAxMmU1YSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/static/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/static/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar-container bk-color uk-light uk-box-shadow-large uk-margin-medium-bottom\" uk-navbar>\n    <div class=\"uk-navbar-left uk-margin-large-left\">\n        <a class=\"uk-navbar-toggle\" uk-toggle=\"target: #offcanvas-nav\"><span class=\"uk-icon uk-margin-small-left\" uk-icon=\"icon: menu\"></span></a>\n        <a class=\"uk-navbar-item uk-logo\" href=\"#\">overzien</a>\n    </div>\n\n        <div class=\"uk-navbar-right uk-visible@m uk-margin-large-right\">\n\n        <ul class=\"uk-navbar-nav\">\n            <li>\n                <a href=\"#\">\n                    <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: star\"></span>\n                    Features\n                </a>\n            </li>\n        </ul>\n\n        <div class=\"uk-navbar-item\">\n            <div>Some <a href=\"#\">Link</a></div>\n        </div>\n\n        <div class=\"uk-navbar-item\">\n            <form action=\"javascript:void(0)\">\n                <input class=\"uk-input uk-form-width-small\" type=\"text\" placeholder=\"Input\">\n                <button class=\"uk-button uk-button-default\">Button</button>\n            </form>\n        </div>\n\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/static/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/static/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/static/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/static/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/static/sidenav/sidenav.component.css":
/*!******************************************************!*\
  !*** ./src/app/static/sidenav/sidenav.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bk-color {\n  background: linear-gradient(to left, #000833, #060e16);\n}\n\n.cm-anchor {\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJrLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDA4MzMsICMwNjBlMTYpO1xufVxuXG4uY20tYW5jaG9yIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/static/sidenav/sidenav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/static/sidenav/sidenav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"offcanvas-nav\" uk-offcanvas=\"mode: slide; overlay: true; container: true\">\n\n    <div class=\"uk-offcanvas-bar bk-color\">\n        <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n\n        <article class=\"uk-comment uk-margin-medium-top\">\n            <header class=\"uk-comment-header uk-grid-medium uk-flex-middle\" uk-grid>\n                <div class=\"uk-width-auto\">\n                    <img class=\"uk-comment-avatar\" width=\"40\" height=\"40\" src=\"../../../assets/images/dude.png\">\n                </div>\n                <div class=\"uk-width-expand\">\n                    <h6 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" href=\"#\" class=\"uk-text-small\">John Doe</a></h6>\n                    <ul class=\"uk-subnav uk-subnav-divider uk-margin-remove-top\">\n                        <li><a href=\"#\" class=\"uk-text-small\"><span class=\"uk-icon uk-margin-auto\" uk-icon=\"icon: mail\"></span></a></li>\n                        <li><a href=\"#\" class=\"uk-text-small\"><span class=\"uk-icon uk-margin-auto\" uk-icon=\"icon: cog\"></span></a></li>\n                        <li><a href=\"#\" class=\"uk-text-small\"><span class=\"uk-icon uk-margin-auto\" uk-icon=\"icon: sign-out\"></span></a></li>\n                    </ul>\n                </div>\n            </header>\n        </article>\n\n        <hr>\n\n        <ul uk-accordion>\n            <li class=\"uk-close\">\n                <a routerLink=\"/company\" class=\"uk-accordion-title uk-text-small\" href=\"#\">My Company</a>\n                <div class=\"uk-accordion-content uk-margin-small-left\">\n                    <ul class=\"uk-list uk-text-small\">\n                      <li><a routerLink=\"/company/edit\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: table\"></span>Edit Company</a></li>\n                      <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: thumbnails\"></span>User Management</a></li>\n                    </ul>\n                </div>\n            </li>\n            <li>\n                <a class=\"uk-accordion-title uk-text-small\" href=\"#\">Production</a>\n                <div class=\"uk-accordion-content\">\n                    <ul class=\"uk-list uk-text-small uk-margin-small-left\">\n                        <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: file-text\"></span>Quotes</a></li>\n                        <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: arrow-right\"></span>Incoming</a></li>\n                        <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: play\"></span>WIP</a></li>\n                        <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><span class=\"uk-margin-small-right\" uk-icon=\"icon: arrow-left\"></span>Outgoing</a></li>\n                    </ul>\n                </div>\n            </li>\n            <li>\n                <a class=\"uk-accordion-title uk-text-small\" href=\"#\">Asset Maintenance</a>\n                <div class=\"uk-accordion-content\">\n                    <div class=\"uk-width-1-2@s uk-width-2-5@m\">\n                        <ul class=\"uk-list uk-text-small uk-margin-small-left\">\n                            <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><i class=\"icon ion-ios-build uk-margin-small-right uk-margin-small-left\"></i>Break Fix</a></li>\n                            <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><i class=\"icon ion-ios-construct uk-margin-small-right uk-margin-small-left\"></i>PMM</a></li>\n                            <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><i class=\"icon ion-ios-clipboard uk-margin-small-right uk-margin-small-left\"></i>WIP</a></li>\n                            <li><a href=\"#\" class=\"cm-anchor uk-text-muted\"><i class=\"icon ion-ios-speedometer uk-margin-small-right uk-margin-small-left\"></i>Charts</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </li>\n        </ul>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/static/sidenav/sidenav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/static/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/static/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/static/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



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
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCUofVQ1dhk_AHm0v8H7g-t1ns0Saxckn8',
        authDomain: 'uikit-fb.firebaseapp.com',
        databaseURL: 'https://uikit-fb.firebaseio.com',
        projectId: 'uikit-fb',
        storageBucket: 'uikit-fb.appspot.com',
        messagingSenderId: '1079399741132'
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/donbozarth/Documents/UiKit_Firebase/uikit-firebase-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map