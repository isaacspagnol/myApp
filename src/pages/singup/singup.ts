import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as $ from "jquery";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';




/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html'
})
export class SingupPage {
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  
  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.push('MenuPage');
  }

  signup() {
    this.navCtrl.push('MenuPage');
  }
  
}
$(document).ready(function(){
  $(".MEI").click(function(){
    $("#CNPJ").show();
    $("#PIS").hide();
    $("#CNPJ").removeClass("hide");
  });
});

$(document).ready(function(){
  $(".PisCheck").click(function(){
    $("#PIS").show();
    $("#CNPJ").hide();
    $("#PIS").removeClass("hide");
  });
});


// $( "ion-label" ).on( "click", function() {
//   $( "#pis-radio" ).html( $( "ion-radio:checked" ).val() + " " );
// });