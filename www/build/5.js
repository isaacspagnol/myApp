webpackJsonp([5],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesPageModule", function() { return ComponentesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentesPageModule = /** @class */ (function () {
    function ComponentesPageModule() {
    }
    ComponentesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__componentes__["a" /* ComponentesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__componentes__["a" /* ComponentesPage */]),
            ],
        })
    ], ComponentesPageModule);
    return ComponentesPageModule;
}());

//# sourceMappingURL=componentes.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentesPage = /** @class */ (function () {
    function ComponentesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ComponentesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComponentesPage');
    };
    ComponentesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-componentes',template:/*ion-inline-start:"C:\projetos\loumarParceiros2\myApp\src\pages\componentes\componentes.html"*/'<ion-header>\n    <ion-navbar>\n       <ion-title class="aling-center">\n          <img src="./assets/img/logoLoumar.svg" alt="" srcset="">\n       </ion-title>\n       <ion-buttons end>\n          <button  (click)="Menu()">\n          <img src="./assets/img/home.png" alt="" style="max-height: 15px;" srcset="">\n          </button>\n       </ion-buttons>\n    </ion-navbar>\n </ion-header>\n <ion-content scroll="true" padding>\n   <div class="ion-padding">\n     <h2 class="aling-center" >MINHA CARTEIRA</h2>\n   </div>\n </ion-content>\n\n'/*ion-inline-end:"C:\projetos\loumarParceiros2\myApp\src\pages\componentes\componentes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ComponentesPage);
    return ComponentesPage;
}());

//# sourceMappingURL=componentes.js.map

/***/ })

});
//# sourceMappingURL=5.js.map