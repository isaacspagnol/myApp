webpackJsonp([2],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumoPageModule", function() { return ResumoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumo__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResumoPageModule = /** @class */ (function () {
    function ResumoPageModule() {
    }
    ResumoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resumo__["a" /* ResumoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resumo__["a" /* ResumoPage */]),
            ],
        })
    ], ResumoPageModule);
    return ResumoPageModule;
}());

//# sourceMappingURL=resumo.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoPage; });
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


var ResumoPage = /** @class */ (function () {
    function ResumoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comissao = [];
        this.comissao = [
            {
                comissao: {
                    nmNota: '34873987',
                    vData: '1/12/2029',
                    vComissao: '15,00'
                },
            },
            {
                comissao: {
                    nmNota: '34873987',
                    vData: '1/12/2029',
                    vComissao: '15,00'
                },
            },
            {
                comissao: {
                    nmNota: '34873987',
                    vData: '1/12/2029',
                    vComissao: '15,00'
                }
            }
        ];
    }
    ResumoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResumoPage');
    };
    ResumoPage.prototype.Menu = function () {
        this.navCtrl.push('MenuPage');
    };
    ResumoPage.prototype.doInfinite = function () {
        var _this = this;
        console.log('Begin async operation');
        return new Promise(function (resolve) {
            setTimeout(function () {
                for (var i = 0; i < 30; i++) {
                    _this.comissao.push(_this.comissao.length);
                }
                console.log('Async operation has ended');
                resolve();
            }, 500);
        });
    };
    ResumoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resumo',template:/*ion-inline-start:"C:\projetos\loumarParceiros2\myApp\src\pages\resumo\resumo.html"*/'<ion-header class="header">\n  <ion-navbar>\n     <ion-title class="align-center">\n        <img src="./assets/img/logoLoumar.svg" alt="" srcset="">\n     </ion-title>\n     <ion-buttons end>\n        <button  (click)="Menu()">\n        <img src="./assets/img/home.png" alt="" style="max-height: 15px;" srcset="">\n        </button>\n     </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="true" >\n <div class="ion-padding">\n   <h2 class="align-center">MINHA CARTEIRA</h2>\n </div>\n\n   <div  class="display-inline-flex center-element ptop-10 mtop-10">\n      <img src="./assets/img/check-circle.png" class="check-icon">\n      <p class="align-center">RESGATE REALIZADO COM SUCESSO!</p>\n   \n   </div>     \n   <div padding>\n      <img src="./assets/img/saque-icons.png" class="saque-icons" alt="">\n      <p class="align-center font-14px">VALOR DISPONÍVEL NA CONTA EM ATÉ 24HR</p>\n   </div> \n   \n   <div>\n      <h3 class="align-center">COMISSÃO</h3>\n   </div>\n\n      <ion-list>\n         <ion-item>\n               <ion-card  *ngFor="let item of comissao" class="card-comissao" >\n                  <ion-grid>\n                     <ion-row>\n                        <ion-col col-2 class="col-wallet-icon">      \n                           <img class="wallet-icon" src="../assets/img/icon-wallet.png">\n                        </ion-col>\n                        <ion-col col-7>\n                              <h2 class="text-left font-800">N° {{item.comissao.nmNota}} </h2>\n                              <p class="text-left font-300">{{item.comissao.vData}}</p>\n                        </ion-col>\n                        <ion-col col-3 class="fit-content ptop-10">\n                              <h2 class="text-right font-800">R${{item.comissao.vComissao}}</h2>\n                        </ion-col>\n                     </ion-row>\n                  </ion-grid>\n               </ion-card>\n         </ion-item>\n      </ion-list>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n   \n\n   </ion-content>\n'/*ion-inline-end:"C:\projetos\loumarParceiros2\myApp\src\pages\resumo\resumo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResumoPage);
    return ResumoPage;
}());

//# sourceMappingURL=resumo.js.map

/***/ })

});
//# sourceMappingURL=2.js.map