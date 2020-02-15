webpackJsonp([1],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupPageModule", function() { return SingupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singup__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SingupPageModule = /** @class */ (function () {
    function SingupPageModule() {
    }
    SingupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__singup__["a" /* SingupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__singup__["a" /* SingupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__singup__["a" /* SingupPage */]
            ]
        })
    ], SingupPageModule);
    return SingupPageModule;
}());

//# sourceMappingURL=singup.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupPage; });
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var SingupPage = /** @class */ (function () {
    // passwordType: string = 'password';
    // passwordShown: boolean = false;
    function SingupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SingupPage.prototype.login = function () {
        this.navCtrl.push('MenuPage');
    };
    SingupPage.prototype.signup = function () {
        this.navCtrl.push('MenuPage');
    };
    SingupPage.prototype.togglePasswordFieldType = function () {
        this.isTextFieldType = !this.isTextFieldType;
    };
    SingupPage.prototype.togglePasswordFieldType2 = function () {
        this.isTextFieldType2 = !this.isTextFieldType2;
    };
    SingupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-singup',template:/*ion-inline-start:"C:\projetos\loumarParceiros2\myApp\src\pages\singup\singup.html"*/'\n    <ion-header>\n      <ion-navbar>\n        <ion-title class="align-center logo">\n          <img src="./assets/img/logoLoumar.svg" alt="" srcset="">\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n  <ion-content scroll="false" fullscreen>\n    <div class="ion-padding">\n      <h2 class="align-center" >CADASTRO</h2>\n      \n    </div>\n\n    <div padding>\n      \n       <form action="">\n         <ion-list class="list-singup">\n              <ion-item>  \n                  <ion-input type="text" required placeholder="Digite seu nome"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="email" placeholder="Digite seu e-mail ou telefone"></ion-input>\n\n              </ion-item>\n              <ion-item>\n                <ion-input [type]="isTextFieldType ? \'text\' : \'password\'" placeholder="Escolha sua senha"></ion-input>\n                <ion-icon [name]="isTextFieldType ? \'eye-off\' : \'eye\'" color="gray" item-end  (click)="togglePasswordFieldType()"></ion-icon>\n\n\n              </ion-item>\n              <ion-item>\n                <ion-input  [type]="isTextFieldType2 ? \'text\' : \'password\'" placeholder="Confirme sua senha"></ion-input>\n                <ion-icon  [name]="isTextFieldType2 ? \'eye-off\' : \'eye\'" color="gray" item-end  (click)="togglePasswordFieldType2()"></ion-icon>\n              </ion-item>\n          </ion-list>\n\n            \n            <div padding id="continuarCadastro">\n                <button (click)="login()" ion-button class="  btn-login">{{ \'FINALIZAR CADASTRO\'}}</button>\n            </div>\n     \n       </form>\n    </div>\n\n\n    <div padding>\n        <p class="align-center">Dúvidas e erros entre em contato suporteparceiros@loumarturismo.com.br</p>\n      </div>\n  </ion-content>\n'/*ion-inline-end:"C:\projetos\loumarParceiros2\myApp\src\pages\singup\singup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SingupPage);
    return SingupPage;
}());

//# sourceMappingURL=singup.js.map

/***/ })

});
//# sourceMappingURL=1.js.map