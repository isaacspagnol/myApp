import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';
import { IonSegment } from '@ionic/angular';
import { AlertController } from 'ionic-angular';



interface PageItem {
  title: string
  component: any
}
type PageList = PageItem[]

@IonicPage()
@Component({
  selector: 'page-minhacarteira',
  templateUrl: 'minhacarteira.html'
})
export class MinhacarteiraPage{
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;


  rootPage: any = 'ContentPage';

  pages: PageList;
  
  vendasDisponiveis = [];
  vendasEmEspera= [];

 estado = "disponivel";

constructor(
  private alertCtrl: AlertController,
  public  navCtrl: NavController
    ) {
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


   segmentChanged(event){
    const valorSegmento = event._value;
    console.log(valorSegmento);
   }
   

  
  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  } 

  openPage(page: PageItem) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  Menu() {
    this.navCtrl.push('MenuPage');
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.vendasDisponiveis.push( this.vendasDisponiveis.length );
          this.vendasEmEspera.push( this.vendasEmEspera.length );
        }

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }
  validarNota() {
    let alert = this.alertCtrl.create({
      title: 'VALIDE N° DA NOTA FISCAL',
      subTitle: 'INSIRA O NUMERO DA NOTA ABAIXO',
      inputs: [
        {
          name: 'NmNota',
          placeholder: 'N° da nota'
        },
        
      ],
      buttons: [
        {
          text: 'VALIDAR NOTA',
          role: 'VALIDAR NOTA',
          handler: data => {
            console.log('VALIDAR NOTA CLICKED');
          }
        },
      ]
    });
    alert.present();
  }

  notavalidada() {
    let alert = this.alertCtrl.create({
      title: 'Nota validada',
      subTitle:'<img src="./assets/img/check.png">',
      buttons: [
        {
          text: 'VER RESUMO DA COMPRA ',
          role: 'NOTA VALIDADA',
          handler: data => {
            this.navCtrl.push('ResumoPage');
          }
        },
      ]
    });
    alert.present();
  }


}





