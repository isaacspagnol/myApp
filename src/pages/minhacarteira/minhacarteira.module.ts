import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MinhacarteiraPage } from './minhacarteira';

@NgModule({
  declarations: [
    MinhacarteiraPage,
  ],
  imports: [
    IonicPageModule.forChild(MinhacarteiraPage),
    TranslateModule.forChild()
  ],
  exports: [
    MinhacarteiraPage
  ]
})
export class MinhacarteiraPageModule { }
