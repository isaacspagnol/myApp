import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonSegment } from '@ionic/angular';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  Menu() {
    this.navCtrl.push('MenuPage');
  }

  segmentChanged(event){
    const valorSegmento = event._value;
    console.log(valorSegmento);
   }
  
}
