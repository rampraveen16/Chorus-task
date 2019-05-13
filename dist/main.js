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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-video-block></app-video-block>\n  <!--<a  routerLink='/home'> </a>-->\n</div>\n<footer> <img src='assets/img/chorus-logo.svg'/></footer>\n<router-outlet>\n \n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.title = 'chours-demo';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.load = function () {
        /*this.router.navigate(['/'],{
          queryParams:{
            id:'4d79041e-f25f-421d-9e5f-3462459b9934'
           }
           });*/
        window.location.href = 'http://localhost:4200/?id=4d79041e-f25f-421d-9e5f-3462459b9934';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _video_block_video_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-block/video-block.component */ "./src/app/video-block/video-block.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _video_block_video_block_component__WEBPACK_IMPORTED_MODULE_6__["VideoBlockComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientJsonpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/video-block/video-block.component.html":
/*!********************************************************!*\
  !*** ./src/app/video-block/video-block.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"videoBlock\">\n    <h2>{{ heading }}</h2>\n    <div class=\"videoBlock-element\">\n      <video id='video'>\n      <source src={{src}} type='video/mp4'>\n      </video>\n      <i (click)=\"play()\" [ngClass]=\"{'hide':hide==true}\"></i>\n  </div>\n  <section class=\"conversationBlock\" *ngIf=\"!error==true; else noId\">\n    <div *ngFor=\"let ele of result\">\n        <div class=\"conversationBlock-element\" [ngClass]=\"{'rep':ele[0].speaker=='Rep'}\">\n            <span><i>{{ele[0].speaker}}</i></span>\n            <p>{{ele[0].snippet}}</p>\n         </div>\n    </div>\n  </section>\n</div>\n<ng-template #noId>\n  <p class=\"errorText\">{{errorText}}</p>\n</ng-template>"

/***/ }),

/***/ "./src/app/video-block/video-block.component.less":
/*!********************************************************!*\
  !*** ./src/app/video-block/video-block.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "video {\n  width: 100%;\n  outline: none;\n}\n.videoBlock {\n  width: 29rem;\n  border: 1px solid #D7DADE;\n  padding: 2.688rem 4.938rem;\n  border-radius: 3px;\n}\n.videoBlock h2 {\n  color: #333333;\n  font-size: 1.625rem;\n  line-height: 1.75rem;\n  padding: 0rem 0 1.25rem;\n  text-align: center;\n}\n.videoBlock .videoBlock-element {\n  position: relative;\n  background: #000;\n  padding: 1rem 2.5rem;\n  margin-bottom: 1rem;\n  border-radius: 0.5rem;\n}\n.videoBlock .videoBlock-element i {\n  position: absolute;\n  width: 3rem;\n  height: 3rem;\n  top: 50%;\n  left: 50%;\n  background: #646791e0;\n  margin: -1.5rem;\n  border-radius: 5px;\n  z-index: 10;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.videoBlock .videoBlock-element i:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0.875rem 0 0.875rem 1rem;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.videoBlock .videoBlock-element i:hover {\n  background: forestgreen;\n}\n.videoBlock .hide {\n  display: none;\n}\n.videoBlock .errorText {\n  text-align: center;\n  color: red;\n  font-size: 2rem;\n}\n.videoBlock .conversationBlock-element {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.videoBlock .conversationBlock-element span {\n  display: block;\n}\n.videoBlock .conversationBlock-element span i {\n  display: inline-block;\n  font-style: normal;\n  font-size: 1rem;\n  padding-left: 1rem;\n  line-height: 1rem;\n  color: #EE6EFF;\n}\n.videoBlock .conversationBlock-element strong {\n  font-size: 1.25rem;\n  display: inline-block;\n  margin: 0.2rem 0;\n  padding: 0.5rem 0.75rem;\n  background: #e8e8e8;\n  font-weight: normal;\n  border-radius: 1.5rem;\n  line-height: 1.25rem;\n  color: #EE6EFF;\n}\n.videoBlock .conversationBlock-element p {\n  font-size: 1.25rem;\n  display: block;\n  margin: 0.2rem 0;\n  padding: 0.5rem 0.75rem;\n  background: #e8e8e8;\n  font-weight: normal;\n  border-radius: 1.5rem;\n  color: #EE6EFF;\n  text-align: left;\n}\n.videoBlock .conversationBlock-element:after {\n  content: '';\n  position: absolute;\n  bottom: 0rem;\n  left: -2.5rem;\n  height: 1.75rem;\n  width: 1.75rem;\n  background: #000;\n  border-radius: 50%;\n  background: rgba(238, 110, 255, 0.1);\n  border: 1px solid #EE6EFF;\n}\n.videoBlock .conversationBlock-element.rep {\n  text-align: right;\n}\n.videoBlock .conversationBlock-element.rep span i {\n  color: #00A7D1;\n}\n.videoBlock .conversationBlock-element.rep strong {\n  color: #00A7D1;\n}\n.videoBlock .conversationBlock-element.rep p {\n  color: #00A7D1;\n  text-align: right;\n}\n.videoBlock .conversationBlock-element.rep:after {\n  left: inherit;\n  right: -2.5rem;\n  border: 1px solid #00A7D1;\n  background: #00a7d14f;\n}\n@media (min-width: 990px) {\n  .videoBlock {\n    width: 51.5rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tYmxvY2svRDovYW5ndWxhci9jaG91cnMtZGVtby9zcmMvYXBwL3ZpZGVvLWJsb2NrL3ZpZGVvLWJsb2NrLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC92aWRlby1ibG9jay92aWRlby1ibG9jay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREpBO0VBTVEsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURYQTtFQWFRLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDUjtBRGxCQTtFQW1CWSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFWjtBRERZO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNHaEI7QURBWTtFQUNJLHVCQUFBO0FDRWhCO0FEOUNBO0VBaURRLGFBQUE7QUNBUjtBRGpEQTtFQW9EUSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQVI7QUR0REE7RUF5RFEsa0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FEMURBO0VBNERZLGNBQUE7QUNDWjtBRDdEQTtFQThEZ0IscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VoQjtBRHJFQTtFQXdFWSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0FaO0FEaEZBO0VBbUZZLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FDRFo7QURHUTtFQUNJLGlCQUFBO0FDRFo7QURBUTtFQUlZLGNBQUE7QUNEcEI7QURIUTtFQVFRLGNBQUE7QUNGaEI7QUROUTtFQVdRLGNBQUE7RUFDQSxpQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDRmhCO0FEUUE7RUFDSTtJQUNJLGNBQUE7RUNOTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tYmxvY2svdmlkZW8tYmxvY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnZpZGVvQmxvY2sge1xuICAgIHdpZHRoOiAyOXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDdEQURFO1xuICAgIHBhZGRpbmc6IDIuNjg4cmVtIDQuOTM4cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBmb250LXNpemU6IDEuNjI1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgICAgICAgcGFkZGluZzogMHJlbSAwIDEuMjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnZpZGVvQmxvY2stZWxlbWVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgcGFkZGluZzogMXJlbSAyLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY0Njc5MWUwO1xuICAgICAgICAgICAgbWFyZ2luOiAtMS41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjg3NXJlbSAwIDAuODc1cmVtIDFyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZvcmVzdGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5oaWRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmVycm9yVGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0VFNkVGRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwO1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICNFRTZFRkY7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtIDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICNFRTZFRkY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDByZW07XG4gICAgICAgICAgICBsZWZ0OiAtMi41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuNzVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzgsMTEwLDI1NSwwLjEwKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRTZFRkY7XG4gICAgICAgIH1cbiAgICAgICAgJi5yZXAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMEE3RDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwQTdEMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiMwMEE3RDE7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMi41cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE3RDE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwYTdkMTRmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5AbWVkaWEobWluLXdpZHRoOjk5MHB4KSB7XG4gICAgLnZpZGVvQmxvY2sge1xuICAgICAgICB3aWR0aDogNTEuNXJlbTtcbiAgICB9XG59IiwidmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi52aWRlb0Jsb2NrIHtcbiAgd2lkdGg6IDI5cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDdEQURFO1xuICBwYWRkaW5nOiAyLjY4OHJlbSA0LjkzOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnZpZGVvQmxvY2sgaDIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAxLjYyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIHBhZGRpbmc6IDByZW0gMCAxLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmlkZW9CbG9jayAudmlkZW9CbG9jay1lbGVtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLnZpZGVvQmxvY2sgLnZpZGVvQmxvY2stZWxlbWVudCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjNjQ2NzkxZTA7XG4gIG1hcmdpbjogLTEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB6LWluZGV4OiAxMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnZpZGVvQmxvY2sgLnZpZGVvQmxvY2stZWxlbWVudCBpOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMC44NzVyZW0gMCAwLjg3NXJlbSAxcmVtO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udmlkZW9CbG9jayAudmlkZW9CbG9jay1lbGVtZW50IGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBmb3Jlc3RncmVlbjtcbn1cbi52aWRlb0Jsb2NrIC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi52aWRlb0Jsb2NrIC5lcnJvclRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi52aWRlb0Jsb2NrIC5jb252ZXJzYXRpb25CbG9jay1lbGVtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnZpZGVvQmxvY2sgLmNvbnZlcnNhdGlvbkJsb2NrLWVsZW1lbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZpZGVvQmxvY2sgLmNvbnZlcnNhdGlvbkJsb2NrLWVsZW1lbnQgc3BhbiBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgY29sb3I6ICNFRTZFRkY7XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudCBzdHJvbmcge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjJyZW0gMDtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGNvbG9yOiAjRUU2RUZGO1xufVxuLnZpZGVvQmxvY2sgLmNvbnZlcnNhdGlvbkJsb2NrLWVsZW1lbnQgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC4ycmVtIDA7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGNvbG9yOiAjRUU2RUZGO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnZpZGVvQmxvY2sgLmNvbnZlcnNhdGlvbkJsb2NrLWVsZW1lbnQ6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDByZW07XG4gIGxlZnQ6IC0yLjVyZW07XG4gIGhlaWdodDogMS43NXJlbTtcbiAgd2lkdGg6IDEuNzVyZW07XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDExMCwgMjU1LCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUU2RUZGO1xufVxuLnZpZGVvQmxvY2sgLmNvbnZlcnNhdGlvbkJsb2NrLWVsZW1lbnQucmVwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudC5yZXAgc3BhbiBpIHtcbiAgY29sb3I6ICMwMEE3RDE7XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudC5yZXAgc3Ryb25nIHtcbiAgY29sb3I6ICMwMEE3RDE7XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudC5yZXAgcCB7XG4gIGNvbG9yOiAjMDBBN0QxO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi52aWRlb0Jsb2NrIC5jb252ZXJzYXRpb25CbG9jay1lbGVtZW50LnJlcDphZnRlciB7XG4gIGxlZnQ6IGluaGVyaXQ7XG4gIHJpZ2h0OiAtMi41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBBN0QxO1xuICBiYWNrZ3JvdW5kOiAjMDBhN2QxNGY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkwcHgpIHtcbiAgLnZpZGVvQmxvY2sge1xuICAgIHdpZHRoOiA1MS41cmVtO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/video-block/video-block.component.ts":
/*!******************************************************!*\
  !*** ./src/app/video-block/video-block.component.ts ***!
  \******************************************************/
/*! exports provided: VideoBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBlockComponent", function() { return VideoBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var VideoBlockComponent = /** @class */ (function () {
    function VideoBlockComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.heading = 'Moment for meething with Two Pillers';
        this.hide = false;
        this.error = false;
    }
    VideoBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUrlPath = location.search.slice(1).split('=')[1];
        if (!currentUrlPath) {
            window.location.href = 'http://localhost:4200/?id=4d79041e-f25f-421d-9e5f-3462459b9934';
        }
        this.src = "https://static.chorus.ai/api/" + currentUrlPath + ".mp4";
        //this.http.get(`assets/test.json`).subscribe((res) => {
        this.http.get("/post/?id=" + currentUrlPath).subscribe(function (res) {
            if (!res['error']) {
                _this.chat = res;
                _this.result = _this.chat.sort(function (a, b) {
                    return a.time - b.time;
                });
                _this.utteranceSeq(_this.result);
            }
            else {
                _this.error = true;
                _this.chat = res;
                console.log(_this.chat.error._text);
                _this.errorText = _this.chat.error._text;
            }
        });
    };
    VideoBlockComponent.prototype.play = function () {
        var video = document.getElementById('video');
        video.setAttribute('controls', 'true');
        video.play();
        this.hide = true;
    };
    VideoBlockComponent.prototype.ngAfterViewInit = function () {
        var video = document.getElementById('video');
        var i = document.querySelector('#video + i');
        video.addEventListener('error', function (event) {
            console.log(event.type);
            video.setAttribute('poster', 'assets/img/no-video.gif');
            video.removeAttribute('controls');
            i.remove();
        }, true);
    };
    VideoBlockComponent.prototype.utteranceSeq = function (result) {
        var combineArray = [];
        var a = [];
        var tempValue = result[0].speaker;
        var i = 1;
        result.forEach(function (item, index, arr) {
            if (tempValue == item.speaker) {
                a.push(item);
                if (i == arr.length) {
                    combineArray.push(a);
                }
            }
            else {
                tempValue = item.speaker;
                combineArray.push(a);
                a = [];
                a.push(item);
                if (i == arr.length) {
                    combineArray.push(a);
                }
            }
            i++;
        });
        this.combineArray(combineArray);
    };
    VideoBlockComponent.prototype.combineArray = function (combineArray) {
        var merge = [];
        combineArray.forEach(function (outerItem) {
            var output = [];
            var i = 0;
            outerItem.forEach(function (item) {
                var existing = output.filter(function (ele, i) {
                    return ele;
                });
                if (existing.length) {
                    var existingIndex = output.indexOf(existing[0]);
                    output[existingIndex].snippet = output[existingIndex].snippet.concat(item.snippet);
                }
                else {
                    if (typeof item.snippet == 'string')
                        item.snippet = [item.snippet];
                    output.push(item);
                }
            });
            merge.push(output);
        });
        this.result = merge.map(function (element) {
            var j = element[0].snippet;
            var r = j.join(' ');
            element[0].snippet = r;
            return element;
        });
    };
    VideoBlockComponent.prototype.ngOnDestroy = function () { };
    VideoBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-block',
            template: __webpack_require__(/*! ./video-block.component.html */ "./src/app/video-block/video-block.component.html"),
            styles: [__webpack_require__(/*! ./video-block.component.less */ "./src/app/video-block/video-block.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], VideoBlockComponent);
    return VideoBlockComponent;
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

module.exports = __webpack_require__(/*! D:\angular\chours-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map