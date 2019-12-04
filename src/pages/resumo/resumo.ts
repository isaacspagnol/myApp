import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
})
export class ResumoPage {

  comissao = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumoPage');
  }
  
  Menu() {
    this.navCtrl.push('MenuPage');
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.comissao.push( this.comissao.length );
        }

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }

}
