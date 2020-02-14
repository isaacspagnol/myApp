import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoricoPagamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico-pagamentos',
  templateUrl: 'historico-pagamentos.html',
})
export class HistoricoPagamentosPage {

  vendasDisponiveis = [];
  vendasEmEspera= [];

 estado = "disponivel";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  
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

  
  segmentChanged(event){
    const valorSegmento = event._value;
    console.log(valorSegmento);
   }
   
  

}
