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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/components/countries/countries.component.ts");






const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'countries', component: _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_3__["CountriesComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section-one/section-one.component */ "./src/app/components/section-one/section-one.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/videos/videos.component */ "./src/app/components/videos/videos.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");








class AppComponent {
    constructor() {
        this.title = 'covid19-tracker';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-section-one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-footer");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _components_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_3__["SectionOneComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_5__["VideosComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/components/countries/countries.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-card/dashboard-card.component */ "./src/app/components/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/videos/videos.component */ "./src/app/components/videos/videos.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/section-one/section-one.component */ "./src/app/components/section-one/section-one.component.ts");















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_9__["GoogleChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_6__["CountriesComponent"],
        _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_8__["DashboardCardComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_11__["VideosComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
        _components_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_13__["SectionOneComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_9__["GoogleChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_6__["CountriesComponent"],
                    _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_8__["DashboardCardComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_11__["VideosComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
                    _components_section_one_section_one_component__WEBPACK_IMPORTED_MODULE_13__["SectionOneComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_9__["GoogleChartsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.??fac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 16, vars: 0, consts: [["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide", 2, "margin-top", "80px"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://mercyhealthsystem.org/wp-content/uploads/2020/03/COVID-19-Graphic-web-banner.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://mercyhealthsystem.org/wp-content/uploads/2020/03/COVID-19-Graphic-web-banner.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "https://mercyhealthsystem.org/wp-content/uploads/2020/03/COVID-19-Graphic-web-banner.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/countries/countries.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/countries/countries.component.ts ***!
  \*************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard-card/dashboard-card.component */ "./src/app/components/dashboard-card/dashboard-card.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");








function CountriesComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const con_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", con_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](con_r3);
} }
function CountriesComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const cs_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 3, cs_r4.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](cs_r4.cases);
} }
class CountriesComponent {
    constructor(service) {
        this.service = service;
        this.countries = [];
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.loading = true;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.service.getDateWiseData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            this.dateWiseData = result;
        })), this.service.getGlobalData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            this.data = result;
            this.data.forEach(cs => {
                this.countries.push(cs.country);
            });
        }))).subscribe({
            complete: () => {
                this.updateValues('India');
                this.loading = false;
            }
        });
    }
    updateChart() {
        let dataTable = [];
        dataTable.push(["Date", 'Cases']);
        this.selectedCountryData.forEach(cs => {
            dataTable.push([cs.date, cs.cases]);
        });
    }
    updateValues(country) {
        console.log(country);
        this.data.forEach(cs => {
            if (cs.country == country) {
                this.totalActive = cs.active;
                this.totalDeaths = cs.deaths;
                this.totalRecovered = cs.recovered;
                this.totalConfirmed = cs.confirmed;
            }
        });
        this.selectedCountryData = this.dateWiseData[country];
        // console.log(this.selectedCountryData);
        this.updateChart();
    }
}
CountriesComponent.??fac = function CountriesComponent_Factory(t) { return new (t || CountriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"])); };
CountriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CountriesComponent, selectors: [["app-countries"]], decls: 33, vars: 8, consts: [[1, "ui", "inverted", "dimmer"], [1, "ui", "text", "loader"], [1, "jumbotron", "bg-white", "text-center", "p-2", "m-0"], [1, ""], [1, "mx-auto"], [1, "form-group", "col-lg-5", "mx-auto"], ["for", "c"], ["name", "", "id", "c", 1, "form-control", 3, "change"], ["input", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "totalConfirmed", "totalActive", "totalRecovered", "totalDeaths"], [1, "container", "mt-5"], [1, "row"], [1, "col-md-8"], ["width", "500px!important", 1, "table-wrapper-scroll-y", "my-custom-scrollbar"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [1, "col"], [1, "col-md-4"], [3, "value"]], template: function CountriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Corona Covid-19 Tracker Country Wise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CountriesComponent_Template_select_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12); return ctx.updateValues(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, CountriesComponent_option_13_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "app-dashboard-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "S.No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, CountriesComponent_tr_29_Template, 8, 5, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "google-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("totalConfirmed", ctx.totalConfirmed)("totalActive", ctx.totalActive)("totalRecovered", ctx.totalRecovered)("totalDeaths", ctx.totalDeaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.selectedCountryData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_5__["DashboardCardComponent"], angular_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".my-custom-scrollbar[_ngcontent-%COMP%] {\n    position: relative;\n    height: 200px;\n    overflow: auto;\n    }\n    .table-wrapper-scroll-y[_ngcontent-%COMP%] {\n    display: block;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZDtJQUNBO0lBQ0EsY0FBYztJQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLXNjcm9sbGJhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countries',
                templateUrl: './countries.component.html',
                styleUrls: ['./countries.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/dashboard-card/dashboard-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard-card/dashboard-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardComponent", function() { return DashboardCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardCardComponent.??fac = function DashboardCardComponent_Factory(t) { return new (t || DashboardCardComponent)(); };
DashboardCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardCardComponent, selectors: [["app-dashboard-card"]], inputs: { totalConfirmed: "totalConfirmed", totalDeaths: "totalDeaths", totalActive: "totalActive", totalRecovered: "totalRecovered" }, decls: 36, vars: 4, consts: [[1, "container", "pb-5", 2, "margin-top", "100px"], [1, "mb-4"], [1, "row", "p-2"], [1, "col-md-3"], [1, "card", "p-5"], [1, "ui", "statistic"], [1, "label"], [1, "value", 2, "color", "#B7BF15", "font-size", "25px!important"], [1, "value", 2, "color", "#116EF6", "font-size", "25px!important"], [1, "value", 2, "color", "#B1040C", "font-size", "25px!important"], [1, "value", 2, "color", "#0E6F03", "font-size", "25px!important"]], template: function DashboardCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Corona Covid-19 Tracker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.totalConfirmed, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.totalRecovered, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.totalDeaths, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.totalActive, " ");
    } }, styles: [".card[_ngcontent-%COMP%]{\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQtY2FyZC9kYXNoYm9hcmQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNElBQTRJO0FBQ2hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQtY2FyZC9kYXNoYm9hcmQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMC4wNjI1ZW0gMC4wNjI1ZW0sIHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDAuMTI1ZW0gMC41ZW0sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-card',
                templateUrl: './dashboard-card.component.html',
                styleUrls: ['./dashboard-card.component.css']
            }]
    }], function () { return []; }, { totalConfirmed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalConfirmed']
        }], totalDeaths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalDeaths']
        }], totalActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalActive']
        }], totalRecovered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalRecovered']
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "text-center", "text-lg-start", "text-white", "mt-5", "mb-5", "container-fluid"], [1, "text-center", "p-4", 2, "background-color", "rgba(0, 0, 0, 0.05)"], ["href", "https://mdbootstrap.com/", 1, "text-reset", "fw-bold"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " \u00A9 2022 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "workmode055gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\n    background-color: #474747;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-card/dashboard-card.component */ "./src/app/components/dashboard-card/dashboard-card.component.ts");




class HomeComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.totalConfirmed = 0;
        this.totalActive = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.loading = true;
        this.datatable = [];
        this.chart = {
            PieChart: "PieChart",
            ColumnChart: 'ColumnChart',
            LineChart: "LineChart",
            height: 500,
            options: {
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
                is3D: true
            }
        };
    }
    ngOnInit() {
        this.dataService.getGlobalData()
            .subscribe({
            next: (result) => {
                console.log(result);
                this.globalData = result;
                result.forEach(cs => {
                    if (!Number.isNaN(cs.confirmed)) {
                        this.totalActive += cs.active;
                        this.totalConfirmed += cs.confirmed;
                        this.totalDeaths += cs.deaths;
                        this.totalRecovered += cs.active;
                    }
                });
                this.initChart('c');
            },
            complete: () => {
                this.loading = false;
            }
        });
    }
    updateChart(input) {
        console.log(input.value);
        this.initChart(input.value);
    }
    initChart(caseType) {
        this.datatable = [];
        // this.datatable.push(["Country", "Cases"])
        this.globalData.forEach(cs => {
            let value;
            if (caseType == 'c')
                if (cs.confirmed > 2000)
                    value = cs.confirmed;
            if (caseType == 'a')
                if (cs.active > 2000)
                    value = cs.active;
            if (caseType == 'd')
                if (cs.deaths > 1000)
                    value = cs.deaths;
            if (caseType == 'r')
                if (cs.recovered > 2000)
                    value = cs.recovered;
            this.datatable.push([
                cs.country, value
            ]);
        });
        console.log(this.datatable);
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 6, consts: [[1, "ui", "inverted", "dimmer"], [1, "ui", "text", "loader"], [1, "jumbotron", "bg-white", "text-center", "p-0", "m-0"], [3, "totalConfirmed", "totalActive", "totalRecovered", "totalDeaths"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-dashboard-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("totalConfirmed", ctx.totalConfirmed)("totalActive", ctx.totalActive)("totalRecovered", ctx.totalRecovered)("totalDeaths", ctx.totalDeaths);
    } }, directives: [_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_2__["DashboardCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 52, vars: 0, consts: [[1, "fixed-top"], [1, "navbar", "navbar-expand-lg", "m-0", 2, "background-color", "#2C3E50", "color", "3fff"], [1, "navbar-nav", "ml-auto", "pr-5"], [1, "nav-item", "active"], ["href", "https://goo.gl/maps/FvraGSZfdNSddSNa8", 1, "nav-link", 2, "color", "#fff"], [1, "fa", "fa-map-marker"], [1, "nav-item"], ["href", "#", 1, "nav-link", 2, "color", "#fff"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], ["href", "https://www.facebook.com/nhmkerala", 1, "nav-link", 2, "color", "#fff"], [1, "fab", "fa-facebook-f"], ["href", "https://www.instagram.com/arogyakeralam/", 1, "nav-link", 2, "color", "#fff"], [1, "fab", "fa-instagram"], [1, "fab", "fa-google"], [1, "fab", "fa-linkedin-in"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "rounded", "p-2"], ["routerLink", "/", 1, "navbar-brand", "p-0"], ["src", "https://www.skuld.com/contentassets/c0d30d7bf2c64c67b5c0a29dbccf1ebe/covid-19_coronavirus_design_logo-shutterstock_1663374028.jpg?w=500", "width", "165", "height", "60", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "pr-2"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], ["routerLink", "/", 1, "nav-link", "text-capitalize"], [1, "sr-only"], ["routerLink", "countries", 1, "nav-link", "text-capitalize"], ["href", "https://covid19.karnataka.gov.in/page/Helpline/en", 1, "nav-link", "text-capitalize"], ["href", "https://www.mygov.in/simple-page/contact-us/", 1, "nav-link", "text-capitalize"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " General Hospital Ernakulam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " +0471 2301181");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " arogyakeralam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Coronavirus Helpline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Contact-Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".text-capitalize[_ngcontent-%COMP%]{\n    font-size: 16px;\n\n}\n.navbar[_ngcontent-%COMP%]{\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlOztBQUVuQjtBQUNBO0lBQ0kscURBQXFEO0FBQ3pEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jYXBpdGFsaXple1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxufVxuLm5hdmJhcntcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/section-one/section-one.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/section-one/section-one.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionOneComponent", function() { return SectionOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SectionOneComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionOneComponent.??fac = function SectionOneComponent_Factory(t) { return new (t || SectionOneComponent)(); };
SectionOneComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SectionOneComponent, selectors: [["app-section-one"]], decls: 30, vars: 0, consts: [[1, "mb-5"], [1, "container-fluid", "mt-5"], [1, "row"], [1, "col-md-3"], ["src", "../../assets/section/section1.png", "alt", ""], ["href", "https://www.mygov.in/mygovapp?t=1631161961&id=3656"], ["src", "../../assets/section/section2.png", "alt", ""], ["href", "https://www.mygov.in/aarogya-setu-app"], ["src", "../../assets/section/section3.png", "alt", ""], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block"], [1, "fas", "fa-bell"], [1, "container"], [1, "row", 2, "background-color", "#fbf3c3"], [1, "col-md-1"], ["src", "../../assets/section/a1.png", "alt", ""], [1, "col-md-2"], ["src", "../../assets/section/a2.png", "alt", ""], ["src", "../../assets/section/a3.png", "alt", ""], ["src", "../../assets/section/a4.png", "alt", ""], ["src", "../../assets/section/a5.png", "alt", ""], ["src", "../../assets/section/a6.png", "alt", ""]], template: function SectionOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Latest Notification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%]{\n    height: 100px!important;\n}\nbutton[_ngcontent-%COMP%]{\n    background-color: #2C3E50;\n}\n.col-md[_ngcontent-%COMP%]{\n    padding-rigth:0!important;\n    padding-left: 0!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uLW9uZS9zZWN0aW9uLW9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY3Rpb24tb25lL3NlY3Rpb24tb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xuICAgIGhlaWdodDogMTAwcHghaW1wb3J0YW50O1xufVxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XG59XG4uY29sLW1ke1xuICAgIHBhZGRpbmctcmlndGg6MCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SectionOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-one',
                templateUrl: './section-one.component.html',
                styleUrls: ['./section-one.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/videos/videos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/videos/videos.component.ts ***!
  \*******************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VideosComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideosComponent.??fac = function VideosComponent_Factory(t) { return new (t || VideosComponent)(); };
VideosComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VideosComponent, selectors: [["app-videos"]], decls: 19, vars: 0, consts: [[1, "container"], [1, "mt-5", "mb-5"], [1, "row"], [1, "col-md-4"], [1, "embed-responsive", "embed-responsive-16by9"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/xTvd7oAEyhs", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "font-weight-bold", "p-3"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/vN30emwcNS4", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/PS-2N6_LlGA", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function VideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Home Care Tips For Mild COVID-19 Cases | Dr. Sushila Kataria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "If You Get COVID 19: Optimize Immune System (Vitamin D, Monoclonal Antibodies, NAC, Quercetin etc.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Home care of suspected and mild cases of COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videos',
                templateUrl: './videos.component.html',
                styleUrls: ['./videos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class DataServiceService {
    constructor(http) {
        this.http = http;
        this.globalDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-17-2020.csv`;
        this.dateWiseDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`;
    }
    getDateWiseData() {
        return this.http.get(this.dateWiseDataUrl, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => {
            let rows = result.split('\n');
            // console.log(rows);
            let mainData = {};
            let header = rows[0];
            let dates = header.split(/,(?=\S)/);
            dates.splice(0, 4);
            rows.splice(0, 1);
            rows.forEach(row => {
                let cols = row.split(/,(?=\S)/);
                let con = cols[1];
                cols.splice(0, 4);
                // console.log(con , cols);
                mainData[con] = [];
                cols.forEach((value, index) => {
                    let dw = {
                        cases: +value,
                        country: con,
                        date: new Date(Date.parse(dates[index]))
                    };
                    mainData[con].push(dw);
                });
            });
            // console.log(mainData);
            return mainData;
        }));
    }
    getGlobalData() {
        return this.http.get(this.globalDataUrl, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => {
            let data = [];
            let raw = {};
            let rows = result.split('\n');
            rows.splice(0, 1);
            // console.log(rows);
            rows.forEach(row => {
                let cols = row.split(/,(?=\S)/);
                let cs = {
                    country: cols[3],
                    confirmed: +cols[7],
                    deaths: +cols[8],
                    recovered: +cols[9],
                    active: +cols[10],
                };
                let temp = raw[cs.country];
                if (temp) {
                    temp.active = cs.active + temp.active;
                    temp.confirmed = cs.confirmed + temp.confirmed;
                    temp.deaths = cs.deaths + temp.deaths;
                    temp.recovered = cs.recovered + temp.recovered;
                    raw[cs.country] = temp;
                }
                else {
                    raw[cs.country] = cs;
                }
            });
            return Object.values(raw);
        }));
    }
}
DataServiceService.??fac = function DataServiceService_Factory(t) { return new (t || DataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataServiceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DataServiceService, factory: DataServiceService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DataServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/workmode/Downloads/covid-19/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map