webpackJsonp([6],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroBancoPageModule", function() { return CadastroBancoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_banco__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroBancoPageModule = /** @class */ (function () {
    function CadastroBancoPageModule() {
    }
    CadastroBancoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_banco__["a" /* CadastroBancoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_banco__["a" /* CadastroBancoPage */]),
            ],
        })
    ], CadastroBancoPageModule);
    return CadastroBancoPageModule;
}());

//# sourceMappingURL=cadastro-banco.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroBancoPage; });
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


/**
 * Generated class for the CadastroBancoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroBancoPage = /** @class */ (function () {
    function CadastroBancoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroBancoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroBancoPage');
    };
    CadastroBancoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-banco',template:/*ion-inline-start:"C:\projetos\loumarParceiros2\myApp\src\pages\cadastro-banco\cadastro-banco.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="align-center">\n      <img src="./assets/img/logoLoumar.svg" alt="" srcset="">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content scroll="false" fullscreen>\n  <div class="ion-padding">\n    <h2 class="align-center" >CADASTRO DE CONTA BANCARIA</h2>\n  </div>\n\n  <div padding>\n    <form action="">\n        <!-- INPUT NOME COMPLETO -->\n        <ion-label>NOME COMPLETO</ion-label>\n        <ion-input type="text" required></ion-input>\n\n        <!-- INPUT CPF-->\n        <ion-label>CPF</ion-label>\n        <ion-input type="number" required></ion-input>\n        \n        <!-- INPUT BANCO -->\n        <ion-label>BANCO</ion-label>\n\n        <ion-item>\n        <ion-select multiple="false">\n              <ion-option>246 – Banco ABC Brasil S.A.</ion-option>\n              <ion-option>748 – Banco Cooperativo Sicredi S.A.</ion-option>\n              <ion-option>453 – Banco Rural S.A.</ion-option>\n              <ion-option>748 – Banco Cooperativo Sicredi S.A.</ion-option>\n              <ion-option>748 – Banco Cooperativo Sicredi S.A.</ion-option>   \n              <ion-option>752 – Banco BNP Paribas Brasil S.A.</ion-option>\n              <ion-option>248 – Banco Boavista Interatlântico S.A.</ion-option>\n              <ion-option>036 – Banco Bradesco BBI S.A.</ion-option>\n              <ion-option>204 – Banco Bradesco Cartões S.A.</ion-option>\n              <ion-option>225 – Banco Brascan S.A.</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <!-- INPUT BANCO -->\n        <ion-label>AGÊNCIA</ion-label>\n        <ion-input type="text" required></ion-input>\n\n         <!-- INPUT BANCO -->\n        <ion-label>N° DA CONTA</ion-label>\n        <ion-input type="number" required></ion-input>\n         \n        <!-- INPUT BANCO -->\n        <ion-label>TIPO DE CONTA</ion-label>\n        <ion-input type="text" required></ion-input>\n\n        <div class="pleft-0 ptop-16">\n          <button (click)="login()" ion-button class=" btn-login">{{ \'CADASTAR CONTA\'}}</button>\n       </div>\n\n\n    </form>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\projetos\loumarParceiros2\myApp\src\pages\cadastro-banco\cadastro-banco.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CadastroBancoPage);
    return CadastroBancoPage;
}());

//# sourceMappingURL=cadastro-banco.js.map

/***/ })

});
//# sourceMappingURL=6.js.map