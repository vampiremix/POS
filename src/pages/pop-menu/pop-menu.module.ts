import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopMenuPage } from './pop-menu';

@NgModule({
  declarations: [
    PopMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PopMenuPage),
  ],
})
export class PopMenuPageModule {}
