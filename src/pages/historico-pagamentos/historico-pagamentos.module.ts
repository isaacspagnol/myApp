import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoPagamentosPage } from './historico-pagamentos';

@NgModule({
  declarations: [
    HistoricoPagamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoPagamentosPage),
  ],
})
export class HistoricoPagamentosPageModule {}
