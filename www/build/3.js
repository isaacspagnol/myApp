webpackJsonp([3],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
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


var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.Menu = function () {
        this.navCtrl.push('MenuPage');
    };
    PerfilPage.prototype.segmentChanged = function (event) {
        var valorSegmento = event._value;
        console.log(valorSegmento);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\projetos\loumarParceiros2\myApp\src\pages\perfil\perfil.html"*/'<ion-header class="header">\n      <ion-navbar>\n         <ion-title class="align-center">\n            <img src="./assets/img/logoLoumar.svg" alt="" srcset="">\n         </ion-title>\n         <ion-buttons end>\n            <button  (click)="Menu()">\n            <img src="./assets/img/home.png" alt="" style="max-height: 15px;" srcset="">\n            </button>\n         </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n<ion-content scroll="true" padding>\n   <div class="ion-padding">\n      <h2 class="align-center">SEU PERFIL</h2>\n      <img src="./assets/img/user.png" class="element-center" alt="">\n      <h2 class="align-center">SEUS DADOS</h2>\n   </div>\n\n   <div padding>\n      <h3 class="align-center">TIPO DE CONTA</h3>\n      <div>\n            <ion-segment  [(ngModel)]="estado" (ionChange)="segmentChanged($event)">\n               <ion-segment-button value="disponivel" id="disponivel">\n                  <ion-label>MEI</ion-label>\n               </ion-segment-button>\n      \n               <ion-segment-button value="em espera" id="emEspera">\n                  <ion-label>RPA</ion-label>\n               </ion-segment-button>\n            </ion-segment>\n      </div>      \n   </div>\n   <div padding>\n         <form action="">\n             <!-- INPUT NOME COMPLETO -->\n             <ion-label class="label-left">NOME</ion-label>\n             <ion-input type="text" required></ion-input>\n     \n             <!-- INPUT CPF-->\n             <ion-label class="label-left">SOBRENOME</ion-label>\n             <ion-input type="text" required></ion-input>\n             \n             <!-- INPUT BANCO -->\n             <ion-label class="label-left">CPF</ion-label>\n             <ion-input type="text" required></ion-input>\n     \n             <!-- INPUT BANCO -->\n             <ion-label class="label-left">CNPJ</ion-label>\n             <ion-input type="text" required></ion-input>\n     \n              <!-- INPUT BANCO -->\n             <ion-label class="label-left">ENDEREÇO</ion-label>\n             <ion-input type="text" required></ion-input>\n\n             <button (click)="login()" ion-button class="btn-green">{{ \'EDITAR\'}}</button>\n\n\n         </form>\n   </div>\n   <div padding>\n         <h3 class="align-center">CONTA BANCARIA</h3>\n\n         <form action="">\n                <!-- INPUT NOME COMPLETO -->\n        <ion-label  class="label-left">NOME COMPLETO</ion-label>\n        <ion-input type="text" required></ion-input>\n\n        <!-- INPUT CPF-->\n        <ion-label  class="label-left">CPF</ion-label>\n        <ion-input type="number" required></ion-input>\n        \n        <!-- INPUT BANCO -->\n        <ion-label  class="label-left">BANCO</ion-label>\n\n        <ion-item>\n        <ion-select multiple="false">\n              <ion-option>246 – Banco ABC Brasil S.A.</ion-option>\n              <ion-option>748 – Banco Cooperativo Sicredi S.A.</ion-option>\n              <ion-option>453 – Banco Rural S.A.</ion-option>\n              <ion-option>748 – Banco Cooperativo Sicredi S.A.</ion-option>\n              <ion-option>748 – Banco Cooperativo Sicredi S.A.</ion-option>   \n              <ion-option>752 – Banco BNP Paribas Brasil S.A.</ion-option>\n              <ion-option>248 – Banco Boavista Interatlântico S.A.</ion-option>\n              <ion-option>036 – Banco Bradesco BBI S.A.</ion-option>\n              <ion-option>204 – Banco Bradesco Cartões S.A.</ion-option>\n              <ion-option>225 – Banco Brascan S.A.</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <!-- INPUT BANCO -->\n        <ion-label  class="label-left">AGÊNCIA</ion-label>\n        <ion-input type="text" required></ion-input>\n\n         <!-- INPUT BANCO -->\n        <ion-label  class="label-left">N° DA CONTA</ion-label>\n        <ion-input type="number" required></ion-input>\n         \n        <!-- INPUT BANCO -->\n        <ion-label  class="label-left">TIPO DE CONTA</ion-label>\n        <ion-input type="text" required></ion-input>\n  \n               <button (click)="login()" ion-button class="btn-green">{{ \'EDITAR\'}}</button>\n  \n  \n           </form>\n         \n       </div>\n       \n</ion-content>\n    '/*ion-inline-end:"C:\projetos\loumarParceiros2\myApp\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], PerfilPage);
    return PerfilPage;
    var _a, _b;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=3.js.map