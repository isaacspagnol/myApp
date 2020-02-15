import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;
 
 
  rootPage: any = 'ContentPage';


  constructor(public navCtrl: NavController) { }


  minhaCarteira() {
    this.navCtrl.push('MinhacarteiraPage');
  }
  perfil() {
    this.navCtrl.push('PerfilPage');
  }  
  historicoPagamentos() {
    this.navCtrl.push('HistoricoPagamentosPage');
  }   
}
