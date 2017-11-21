import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashDrawerPage } from './cash-drawer';

@NgModule({
  declarations: [
    CashDrawerPage,
  ],
  imports: [
    IonicPageModule.forChild(CashDrawerPage),
  ],
})
export class CashDrawerPageModule {}
