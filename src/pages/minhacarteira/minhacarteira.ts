import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';
import { IonSegment } from '@ionic/angular';


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
  
  vendas = [];

 
constructor(public navCtrl: NavController) {
  this.estado = "disponivel";

  this.vendas = [
    {
      venda: {
        estado:"disponivel",
        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      },
    },

    {
      venda: {
        estado:"disponivel",
        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      }, 
    },

    {
      venda: {
        estado:"em espera",
        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      }, 
    },

    {
      venda: {
        estado:"disponivel",

        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      }, 
    },

    {
      venda: {
        estado:"disponivel",
        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      }, 
    },
    {
      venda: {
        estado:"em espera",
        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      }, 
    },
    {
      venda: {
        estado:"em espera",
        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      }, 
    },
    {
      venda: {
        estado:"disponivel",
        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      }, 
    },
    {
      venda: {
        estado:"disponivel",
        nVenda: '34873987',
        cVenda: '32',
        vTotal: '62'
      }, 
    }


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
          this.vendas.push( this.vendas.length );
        }

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }

}


