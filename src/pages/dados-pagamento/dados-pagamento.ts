import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dados-pagamento',
  templateUrl: 'dados-pagamento.html',
})
export class DadosPagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  Menu() {
    this.navCtrl.push('MenuPage');
  }

  Confirma() {
    this.navCtrl.push('ResumoPage');
  }

}
