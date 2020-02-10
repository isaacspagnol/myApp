webpackJsonp([5],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */]
            ]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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


var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'ContentPage';
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign in', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' }
        ];
    }
    MenuPage.prototype.minhaCarteira = function () {
        this.navCtrl.push('MinhacarteiraPage');
    };
    MenuPage.prototype.cadastroBanco = function () {
        this.navCtrl.push('CadastroBancoPage');
    };
    MenuPage.prototype.perfil = function () {
        this.navCtrl.push('PerfilPage');
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MenuPage Page');
    };
    MenuPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\projetos\loumarParceiros2\myApp\src\pages\menu\menu.html"*/'\n    <ion-header>\n      <ion-navbar>\n        <ion-title class="align-center logo">\n          <img src="./assets/img/logoLoumar.svg" alt="" srcset="">\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content scroll="false">\n        <ion-grid>\n            <ion-row>\n                <ion-col >\n                    <div padding >\n                        <button (click)="cadastroBanco()" ion-button class="btn-cadastro-incompleto">{{ \'CADASTRO INCOMPLETO\'}}\n                          <img src="./assets/img/Icon-hand-pointer.png" class="pleft-15">\n\n                        </button>\n                    </div>\n                 </ion-col>\n              <ion-col>\n                  <div >\n                    <p class="text-center font-600 font-1-5em text-uppercase">Seu codigo Loumar é:</p>\n                   <p class="text-center"> \n                     <button ion-button class="codigo-loumar">\n                      734874387\n                    </button>\n                  </p>\n                  </div>\n              </ion-col>\n              \n            </ion-row>\n        </ion-grid>\n      <!-- <div class="ion-padding">\n        <h2 class="align-center" >SELECIONE UMA OPÇÃO</h2>\n      </div> -->\n      \n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <div  (click)="minhaCarteira()" >\n                  <ion-card >\n                    <ion-card-content>\n                     <img src="./assets/img/cartera.png" class="icon-cards" alt="" srcset="">\n                    </ion-card-content>\n                  </ion-card>\n                  <p class="align-center"><strong>MINHA CARTEIRA</strong></p>\n                </div>\n              </ion-col>\n              <ion-col>\n                <div> \n                   <ion-card>\n                    <ion-card-content>\n                        <img src="./assets/img/catalogo.png" class="icon-cards" alt="" srcset="">\n                    </ion-card-content>\n                  </ion-card>\n                  <p class="align-center"><strong>CATALOGO</strong></p>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                  <div>\n                    <ion-card>\n                      <ion-card-content>\n                       <img src="./assets/img/pontos-de-vendas.png" class="icon-cards" alt="" srcset="">\n                      </ion-card-content>\n                    </ion-card>\n                    <p class="align-center"><strong>PONTOS DE VENDAS</strong></p>\n                  </div>\n                </ion-col>\n                <ion-col>\n                  <div> \n                     <ion-card (click)="perfil()">\n                      <ion-card-content>\n                          <img src="./assets/img/hombre.png" class="icon-cards" alt="" srcset="">\n                      </ion-card-content>\n                    </ion-card>\n                    <p class="align-center"><strong>PERFIL</strong></p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      \n  \n    </ion-content>\n  '/*ion-inline-end:"C:\projetos\loumarParceiros2\myApp\src\pages\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

// $(document).ready(function(){
//   var pisca = 1;
//     if( pisca == 1 ){
//       var pisca = 0;
//       $(".btn-cadastro-incompleto").hide(800);
//     } 
//     if( pisca == 0){
//       var pisca = 1;
//       $(".btn-cadastro-incompleto").show(800);
//     }
// }); 
//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=5.js.map