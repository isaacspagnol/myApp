import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SingupPage } from './singup';

@NgModule({
  declarations: [
    SingupPage,
  ],
  imports: [
    IonicPageModule.forChild(SingupPage),
    TranslateModule.forChild()
  ],
  exports: [
    SingupPage
  ]
})
export class SingupPageModule { }
