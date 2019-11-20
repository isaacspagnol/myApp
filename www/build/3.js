webpackJsonp([3],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhacarteiraPageModule", function() { return MinhacarteiraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minhacarteira__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MinhacarteiraPageModule = /** @class */ (function () {
    function MinhacarteiraPageModule() {
    }
    MinhacarteiraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__minhacarteira__["a" /* MinhacarteiraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__minhacarteira__["a" /* MinhacarteiraPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__minhacarteira__["a" /* MinhacarteiraPage */]
            ]
        })
    ], MinhacarteiraPageModule);
    return MinhacarteiraPageModule;
}());

//# sourceMappingURL=minhacarteira.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhacarteiraPage; });
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



var MinhacarteiraPage = /** @class */ (function () {
    function MinhacarteiraPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.rootPage = 'ContentPage';
        this.vendasDisponiveis = [];
        this.vendasEmEspera = [];
        this.estado = "disponivel";
        this.estado = "disponivel";
        this.vendasDisponiveis = [
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32',
                    vTotal: '62'
                },
            },
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32',
                    vTotal: '62'
                },
            },
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32',
                    vTotal: '62'
                },
            }
        ];
        this.vendasEmEspera = [
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32',
                    vTotal: '62'
                },
            },
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32',
                    vTotal: '62'
                },
            },
            {
                venda: {
                    nVenda: '34873987',
                    cVenda: '32',
                    vTotal: '62'
                },
            },
        ];
    }
    MinhacarteiraPage.prototype.segmentChanged = function (event) {
        var valorSegmento = event._value;
        console.log(valorSegmento);
    };
    MinhacarteiraPage.prototype.segmentButtonClicked = function (ev) {
        console.log('Segment button clicked', ev);
    };
    MinhacarteiraPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MinhacarteiraPage.prototype.Menu = function () {
        this.navCtrl.push('MenuPage');
    };
    MinhacarteiraPage.prototype.doInfinite = function () {
        var _this = this;
        console.log('Begin async operation');
        return new Promise(function (resolve) {
            setTimeout(function () {
                for (var i = 0; i < 30; i++) {
                    _this.vendasDisponiveis.push(_this.vendasDisponiveis.length);
                    _this.vendasEmEspera.push(_this.vendasEmEspera.length);
                }
                console.log('Async operation has ended');
                resolve();
            }, 500);
        });
    };
    MinhacarteiraPage.prototype.presentPrompt = function () {
        var alert = this.alertCtrl.create({
            title: 'VALIDE O N° DA NOTA FISCAL',
            subTitle: 'INSIRA O NUMERO DA NOTA ABAIXO',
            inputs: [
                {
                    name: 'nDaNota',
                    placeholder: 'Numero da nota',
                    max: '4',
                    id: 'maxLength20',
                    type: 'number',
                },
            ],
            buttons: [
                {
                    text: 'Validar Nota',
                    role: 'Validar Nota',
                    handler: function (data) {
                        console.log('Validar clicked');
                    }
                },
            ]
        });
        alert.present().then(function (result) { document.getElementById('maxLength20').setAttribute('maxlength', '20'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], MinhacarteiraPage.prototype, "nav", void 0);
    MinhacarteiraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minhacarteira',template:/*ion-inline-start:"C:\projetos\loumarParceiros2\myApp\src\pages\minhacarteira\minhacarteira.html"*/'<ion-header>\n    <ion-navbar>\n       <ion-title class="aling-center">\n          <img src="./assets/img/logoLoumar.svg" alt="" srcset="">\n       </ion-title>\n       <ion-buttons end>\n          <button  (click)="Menu()" >\n          <img src="./assets/img/home.png" alt="" style="max-height: 15px;" srcset="">\n          </button>\n       </ion-buttons>\n    </ion-navbar>\n </ion-header>\n <ion-content scroll="true" padding>\n   <div class="ion-padding">\n     <h2 class="aling-center" >MINHA CARTEIRA</h2>\n   </div>\n\n\n\n   <ion-card>\n      <ion-card-header>\n            <img src="./assets/img/check-circle.png" class="check-icon">\n        <ion-card-title> VALOR DISPONIVEL PARA SAQUE</ion-card-title>\n      </ion-card-header>\n         <div id="moeda">\n            <strong>R$</strong>\n         </div>\n         <div id="valor">\n            <strong>450</strong>\n         </div>\n         <div id="btn-resgate">\n            <button (click)="presentPrompt()"  ion-button class=" btn-login">{{ \'RESGATAR\'}}</button>\n         </div>\n    \n      <ion-card-content>\n      </ion-card-content>\n    </ion-card>\n\n   <div>\n      <ion-segment  [(ngModel)]="estado" (ionChange)="segmentChanged($event)">\n         <ion-segment-button value="disponivel" id="disponivel">\n            <ion-label>DISPONIVEL</ion-label>\n         </ion-segment-button>\n\n         <ion-segment-button  value="em espera" id="emEspera">\n            <ion-label>EM ESPERA</ion-label>\n         </ion-segment-button>\n\n      </ion-segment>\n   </div>\n   <ion-list>\n      <ion-item>\n            <ion-card *ngFor="let item of vendasDisponiveis" class="card-vendas" >\n               <ion-grid>\n                  <ion-row>\n                     <ion-col col-2 class="col-wallet-icon">      \n                        <img class="wallet-icon" src="../assets/img/icon-wallet.png">\n                     </ion-col>\n                     <ion-col col-7>\n                           <h2 class="text-left comissao ptop-10">VALOR DA COMISSAO</h2>\n                           <h2 class="text-left vlVenda font-800">VALOR DA VENDA </h2>\n                           <p class="text-left nVenda font-800">VENDA N° <span>{{item.venda.nVenda}}</span></p>\n                     </ion-col>\n                     <ion-col col-3  class="fit-content ptop-10">\n                           <h2 class="text-right cVenda ptop-5 disponivel" >R$ <span>{{item.venda.cVenda}}</span></h2>\n                           <h2 class="text-right vTotal">R$ {{item.venda.vTotal}}</h2>\n                     </ion-col>\n                  </ion-row>\n               </ion-grid>\n            </ion-card>\n      </ion-item>\n   </ion-list>\n\n   <ion-list>\n      <ion-item>\n            <ion-card [ngSwitch]="estado" *ngFor="let item of vendasEmEspera" class="card-vendas" >\n               <ion-grid>\n                  <ion-row>\n                     <ion-col col-2 class="col-wallet-icon">      \n                        <img class="wallet-icon" src="../assets/img/icon-wallet.png">\n                     </ion-col>\n                     <ion-col col-7>\n                           <h2 class="text-left comissao ptop-10">VALOR DA COMISSAO</h2>\n                           <h2 class="text-left vlVenda font-800">VALOR DA VENDA </h2>\n                           <p class="text-left nVenda font-800">VENDA N° <span>{{item.venda.nVenda}}</span></p>\n                     </ion-col>\n                     <ion-col col-3  class="fit-content ptop-10">\n                           <h2 class="text-right cVenda ptop-5">R$ <span>{{item.venda.cVenda}}</span></h2>\n                           <h2 class="text-right vTotal">R$ {{item.venda.vTotal}}</h2>\n                     </ion-col>\n                  </ion-row>\n               </ion-grid>\n            </ion-card>\n      </ion-item>\n   </ion-list>\n  \n   \n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n   \n</ion-content>\n'/*ion-inline-end:"C:\projetos\loumarParceiros2\myApp\src\pages\minhacarteira\minhacarteira.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], MinhacarteiraPage);
    return MinhacarteiraPage;
    var _a, _b;
}());

//# sourceMappingURL=minhacarteira.js.map

/***/ })

});
//# sourceMappingURL=3.js.map