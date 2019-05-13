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

module.exports = "video {\n  width: 100%;\n  outline: none;\n}\n.videoBlock {\n  width: 29rem;\n  border: 1px solid #D7DADE;\n  padding: 2.688rem 4.938rem;\n  border-radius: 3px;\n}\n.videoBlock h2 {\n  color: #333333;\n  font-size: 1.625rem;\n  line-height: 1.75rem;\n  padding: 0rem 0 1.25rem;\n  text-align: center;\n}\n.videoBlock .videoBlock-element {\n  position: relative;\n  background: #000;\n  padding: 1rem 2.5rem;\n  margin: 0 auto 1rem;\n  border-radius: 0.5rem;\n  max-width: 400px;\n}\n.videoBlock .videoBlock-element i {\n  position: absolute;\n  width: 3rem;\n  height: 3rem;\n  top: 50%;\n  left: 50%;\n  background: #646791e0;\n  margin: -1.5rem;\n  border-radius: 5px;\n  z-index: 10;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.videoBlock .videoBlock-element i:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0.875rem 0 0.875rem 1rem;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.videoBlock .videoBlock-element i:hover {\n  background: forestgreen;\n}\n.videoBlock .hide {\n  display: none;\n}\n.videoBlock .errorText {\n  text-align: center;\n  color: red;\n  font-size: 2rem;\n}\n.videoBlock .conversationBlock-element {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.videoBlock .conversationBlock-element span {\n  display: block;\n}\n.videoBlock .conversationBlock-element span i {\n  display: inline-block;\n  font-style: normal;\n  font-size: 1rem;\n  padding-left: 1rem;\n  line-height: 1rem;\n  color: #EE6EFF;\n}\n.videoBlock .conversationBlock-element strong {\n  font-size: 1.25rem;\n  display: inline-block;\n  margin: 0.2rem 0;\n  padding: 0.5rem 0.75rem;\n  background: #e8e8e8;\n  font-weight: normal;\n  border-radius: 1.5rem;\n  line-height: 1.25rem;\n  color: #EE6EFF;\n}\n.videoBlock .conversationBlock-element p {\n  font-size: 1.25rem;\n  display: block;\n  margin: 0.2rem 0;\n  padding: 0.5rem 0.75rem;\n  background: #e8e8e8;\n  font-weight: normal;\n  border-radius: 1.5rem;\n  color: #EE6EFF;\n  text-align: left;\n}\n.videoBlock .conversationBlock-element:after {\n  content: '';\n  position: absolute;\n  bottom: 0rem;\n  left: -2.5rem;\n  height: 1.75rem;\n  width: 1.75rem;\n  background: #000;\n  border-radius: 50%;\n  background: rgba(238, 110, 255, 0.1);\n  border: 1px solid #EE6EFF;\n}\n.videoBlock .conversationBlock-element.rep {\n  text-align: right;\n}\n.videoBlock .conversationBlock-element.rep span i {\n  color: #00A7D1;\n}\n.videoBlock .conversationBlock-element.rep strong {\n  color: #00A7D1;\n}\n.videoBlock .conversationBlock-element.rep p {\n  color: #00A7D1;\n  text-align: right;\n}\n.videoBlock .conversationBlock-element.rep:after {\n  left: inherit;\n  right: -2.5rem;\n  border: 1px solid #00A7D1;\n  background: #00a7d14f;\n}\n@media (min-width: 990px) {\n  .videoBlock {\n    width: 51.5rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tYmxvY2svRDovYW5ndWxhci9jaG91cnMtZGVtby9zcmMvYXBwL3ZpZGVvLWJsb2NrL3ZpZGVvLWJsb2NrLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC92aWRlby1ibG9jay92aWRlby1ibG9jay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREpBO0VBTVEsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURYQTtFQWFRLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEbkJBO0VBb0JZLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VaO0FERFk7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0doQjtBREFZO0VBQ0ksdUJBQUE7QUNFaEI7QUQvQ0E7RUFrRFEsYUFBQTtBQ0FSO0FEbERBO0VBcURRLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNBUjtBRHZEQTtFQTBEUSxrQkFBQTtFQUNBLG1CQUFBO0FDQVI7QUQzREE7RUE2RFksY0FBQTtBQ0NaO0FEOURBO0VBK0RnQixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRWhCO0FEdEVBO0VBeUVZLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDQVo7QURqRkE7RUFvRlksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FaO0FER1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUNEWjtBREdRO0VBQ0ksaUJBQUE7QUNEWjtBREFRO0VBSVksY0FBQTtBQ0RwQjtBREhRO0VBUVEsY0FBQTtBQ0ZoQjtBRE5RO0VBV1EsY0FBQTtFQUNBLGlCQUFBO0FDRmhCO0FESVk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNGaEI7QURRQTtFQUNJO0lBQ0ksY0FBQTtFQ05OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlby1ibG9jay92aWRlby1ibG9jay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udmlkZW9CbG9jayB7XG4gICAgd2lkdGg6IDI5cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEN0RBREU7XG4gICAgcGFkZGluZzogMi42ODhyZW0gNC45MzhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42MjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwcmVtIDAgMS4yNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAudmlkZW9CbG9jay1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjQ2NzkxZTA7XG4gICAgICAgICAgICBtYXJnaW46IC0xLjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAuODc1cmVtIDAgMC44NzVyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZm9yZXN0Z3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZXJyb3JUZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5jb252ZXJzYXRpb25CbG9jay1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRUU2RUZGO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtIDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogI0VFNkVGRjtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW0gMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogI0VFNkVGRjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMHJlbTtcbiAgICAgICAgICAgIGxlZnQ6IC0yLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNzVyZW07XG4gICAgICAgICAgICB3aWR0aDogMS43NXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwxMTAsMjU1LDAuMTApO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VFNkVGRjtcbiAgICAgICAgfVxuICAgICAgICAmLnJlcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwQTdEMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBBN0QxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IzAwQTdEMTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yLjVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTdEMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBhN2QxNGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbkBtZWRpYShtaW4td2lkdGg6OTkwcHgpIHtcbiAgICAudmlkZW9CbG9jayB7XG4gICAgICAgIHdpZHRoOiA1MS41cmVtO1xuICAgIH1cbn0iLCJ2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnZpZGVvQmxvY2sge1xuICB3aWR0aDogMjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEN0RBREU7XG4gIHBhZGRpbmc6IDIuNjg4cmVtIDQuOTM4cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4udmlkZW9CbG9jayBoMiB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDEuNjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgcGFkZGluZzogMHJlbSAwIDEuMjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi52aWRlb0Jsb2NrIC52aWRlb0Jsb2NrLWVsZW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xuICBtYXJnaW46IDAgYXV0byAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG4udmlkZW9CbG9jayAudmlkZW9CbG9jay1lbGVtZW50IGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQ6ICM2NDY3OTFlMDtcbiAgbWFyZ2luOiAtMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHotaW5kZXg6IDEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4udmlkZW9CbG9jayAudmlkZW9CbG9jay1lbGVtZW50IGk6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwLjg3NXJlbSAwIDAuODc1cmVtIDFyZW07XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi52aWRlb0Jsb2NrIC52aWRlb0Jsb2NrLWVsZW1lbnQgaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGZvcmVzdGdyZWVuO1xufVxuLnZpZGVvQmxvY2sgLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZpZGVvQmxvY2sgLmVycm9yVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLnZpZGVvQmxvY2sgLmNvbnZlcnNhdGlvbkJsb2NrLWVsZW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudCBzcGFuIGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBjb2xvcjogI0VFNkVGRjtcbn1cbi52aWRlb0Jsb2NrIC5jb252ZXJzYXRpb25CbG9jay1lbGVtZW50IHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAuMnJlbSAwO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgY29sb3I6ICNFRTZFRkY7XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudCBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjJyZW0gMDtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgY29sb3I6ICNFRTZFRkY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHJlbTtcbiAgbGVmdDogLTIuNXJlbTtcbiAgaGVpZ2h0OiAxLjc1cmVtO1xuICB3aWR0aDogMS43NXJlbTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMTEwLCAyNTUsIDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFRTZFRkY7XG59XG4udmlkZW9CbG9jayAuY29udmVyc2F0aW9uQmxvY2stZWxlbWVudC5yZXAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi52aWRlb0Jsb2NrIC5jb252ZXJzYXRpb25CbG9jay1lbGVtZW50LnJlcCBzcGFuIGkge1xuICBjb2xvcjogIzAwQTdEMTtcbn1cbi52aWRlb0Jsb2NrIC5jb252ZXJzYXRpb25CbG9jay1lbGVtZW50LnJlcCBzdHJvbmcge1xuICBjb2xvcjogIzAwQTdEMTtcbn1cbi52aWRlb0Jsb2NrIC5jb252ZXJzYXRpb25CbG9jay1lbGVtZW50LnJlcCBwIHtcbiAgY29sb3I6ICMwMEE3RDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnZpZGVvQmxvY2sgLmNvbnZlcnNhdGlvbkJsb2NrLWVsZW1lbnQucmVwOmFmdGVyIHtcbiAgbGVmdDogaW5oZXJpdDtcbiAgcmlnaHQ6IC0yLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEE3RDE7XG4gIGJhY2tncm91bmQ6ICMwMGE3ZDE0Zjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkge1xuICAudmlkZW9CbG9jayB7XG4gICAgd2lkdGg6IDUxLjVyZW07XG4gIH1cbn1cbiJdfQ== */"

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