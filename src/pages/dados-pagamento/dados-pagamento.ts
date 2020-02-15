import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DadosPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

}
