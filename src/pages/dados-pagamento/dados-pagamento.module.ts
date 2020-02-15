import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosPagamentoPage } from './dados-pagamento';

@NgModule({
  declarations: [
    DadosPagamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosPagamentoPage),
  ],
})
export class DadosPagamentoPageModule {}
