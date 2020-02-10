import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides} from 'ionic-angular';
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

  isTextFieldType: boolean;
  isTextFieldType2: boolean;
// passwordType: string = 'password';
// passwordShown: boolean = false;


constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.push('MenuPage');
  }

  signup() {
    this.navCtrl.push('MenuPage');
  }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  } 
  togglePasswordFieldType2(){
    this.isTextFieldType2 = !this.isTextFieldType2;
  }



/**
 * togglePassword
 */
  // public togglePassword() {
  //     if(this.passwordShown){
  //       this.passwordShown = false;
  //       this.passwordType  = 'password';
  //     }else{
  //       this.passwordShown = true;
  //       this.passwordType  = 'password';
  //     }
  //   }
    
  }




