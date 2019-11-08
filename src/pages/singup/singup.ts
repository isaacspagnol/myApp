import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as $ from "jquery";


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
// $("#MEI").change(function(){
//   $("#CNPJ").addClass("show");
// });
