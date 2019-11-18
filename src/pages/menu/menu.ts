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
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ContentPage';

  pages: PageList;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign in', component: 'LoginPage' },
      { title: 'Signup', component: 'SignupPage' }
    ];
  }
  
  minhaCarteira() {
    this.navCtrl.push('MinhacarteiraPage');
  }
  cadastroBanco(){
    this.navCtrl.push('CadastroBancoPage');
  }

  // signup() {
  //   this.navCtrl.push('MenuPage');
  // }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

  openPage(page: PageItem) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

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