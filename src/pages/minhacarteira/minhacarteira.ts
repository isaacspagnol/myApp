import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';
import * as $ from "jquery";

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
export class MinhacarteiraPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ContentPage';

  pages: PageList;
  
 aguardandoLiberacao: any[];

  
 constructor(public navCtrl: NavController) {
  this.aguardandoLiberacao = [
      {
        venda: {
          date: '20/10/2019',
          valor: 'R$ 60,19 ',
          status: 'EM APROVACAO'
        }        
      },
      {
        venda: {
          date: '20/10/2019',
          valor: 'R$ 60,19 ',
          status: 'EM APROVACAO'
        }        
    },
      {
        venda: {
          date: '20/10/2019',
          valor: 'R$ 60,19 ',
          status: 'EM APROVACAO'
        }        
    },
      {
        venda: {
          date: '20/10/2019',
          valor: 'R$ 60,19 ',
          status: 'EM APROVACAO'
        }        
    },
    {
      venda: {
        date: '20/10/2019',
        valor: 'R$ 60,19 ',
        status: 'EM APROVACAO'
      }       
  },
  {
    venda: {
      date: '20/10/2019',
      valor: 'R$ 60,19 ',
      status: 'EM APROVACAO'
    }       
},
  
{
  venda: {
    date: '20/10/2019',
    valor: 'R$ 60,19 ',
    status: 'EM APROVACAO'
  }       
},
{
  venda: {
    date: '20/10/2019',
    valor: 'R$ 60,19 ',
    status: 'EM APROVACAO'
  }       
},  
];

}

  ionViewDidLoad() {
    console.log('Hello minhacarteira Page');
  }

  openPage(page: PageItem) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  Menu() {
    this.navCtrl.push('MenuPage');
  }
 
  showMore(){
    this
  }
}

// $('#resgateDisponivel').click(function (e) {
//   $('#resgateDisponivel').css('display', 'block');
// });

// function resgateDisponivel(event) {
//   $(document).click(function resgateDisponivel(e){
//     $('#resgateDisponivel').fadeIn(800);
//     $('#stock').hide(300);
// })]