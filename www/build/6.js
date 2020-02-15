webpackJsonp([6],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoPagamentosPageModule", function() { return HistoricoPagamentosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historico_pagamentos__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoricoPagamentosPageModule = /** @class */ (function () {
    function HistoricoPagamentosPageModule() {
    }
    HistoricoPagamentosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historico_pagamentos__["a" /* HistoricoPagamentosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historico_pagamentos__["a" /* HistoricoPagamentosPage */]),
            ],
        })
    ], HistoricoPagamentosPageModule);
    return HistoricoPagamentosPageModule;
}());

//# sourceMappingURL=historico-pagamentos.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPagamentosPage; });
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
 * Generated class for the HistoricoPagamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoricoPagamentosPage = /** @class */ (function () {
    function HistoricoPagamentosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vendasDisponiveis = [];
        this.vendasEmEspera = [];
        this.estado = "disponivel";
        this.estado = "disponivel";
        this.vendasDisponiveis = [
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32,00',
                    vTotal: '62,00'
                },
            },
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32,00',
                    vTotal: '62'
                },
            },
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32,93',
                    vTotal: '62'
                },
            }
        ];
        this.vendasEmEspera = [
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32,83',
                    vTotal: '62'
                },
            },
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32,30',
                    vTotal: '62'
                },
            },
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32,92',
                    vTotal: '62'
                },
            },
        ];
    }
    HistoricoPagamentosPage.prototype.Menu = function () {
        this.navCtrl.push('MenuPage');
    };
    HistoricoPagamentosPage.prototype.segmentChanged = function (event) {
        var valorSegmento = event._value;
        console.log(valorSegmento);
    };
    HistoricoPagamentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historico-pagamentos',template:/*ion-inline-start:"C:\projetos\loumarParceiros2\myApp\src\pages\historico-pagamentos\historico-pagamentos.html"*/'<ion-header class="header">\n  <ion-navbar>\n\n     <ion-title class="align-center logo">\n        <img src="./assets/img/logoLoumar.svg" alt="" srcset="">\n     </ion-title>\n\n     <ion-buttons end>\n        <button  (click)="Menu()">\n        <img src="./assets/img/home.png" alt="" style="max-height: 15px;" srcset="">\n        </button>\n     </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content scroll="true" >\n  <div class="ion-padding">\n     <h2 class="align-center" >HISTÓRICO DE PAGAMENTOS</h2>\n  </div>\n\n  \n\n  <div class="padding-0-16">\n     <ion-segment  [(ngModel)]="estado" (ionChange)="segmentChanged($event)">\n        <ion-segment-button value="disponivel" id="disponivel">\n           <ion-label>PAGO</ion-label>\n        </ion-segment-button>\n        <ion-segment-button  value="em espera" id="emEspera">\n           <ion-label>PROCESSANDO</ion-label>\n        </ion-segment-button>\n     </ion-segment>\n  </div>\n\n\n  <div>\n     <ion-list>\n        <ion-item>\n\n           <div class="content-cards">\n              <ion-card *ngFor="let item of vendasDisponiveis" class="card-pagamentos" >\n                 <ion-grid>\n                    <ion-row>\n                       <ion-col col-8>\n                          <h2 class="text-left card-comissao-content ptop-10">VALOR DO SAQUE</h2>\n                          <p class="text-left nVenda font-800">N° DA NOTA <span>{{item.venda.nVenda}}</span></p>\n                       </ion-col>\n                       <ion-col col-2 class="fit-content ptop-10">\n                          <h2 class="text-right cVenda ptop-10 disponivel" >R$ <span>{{item.venda.cVenda}}</span></h2>\n                       </ion-col>\n                    </ion-row>\n                 </ion-grid>\n              </ion-card>                  \n           </div>\n\n        </ion-item>\n     </ion-list>\n     \n     <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n     </ion-infinite-scroll>\n\n  </div>\n    \n\n\n\n\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\projetos\loumarParceiros2\myApp\src\pages\historico-pagamentos\historico-pagamentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HistoricoPagamentosPage);
    return HistoricoPagamentosPage;
}());

//# sourceMappingURL=historico-pagamentos.js.map

/***/ })

});
//# sourceMappingURL=6.js.map