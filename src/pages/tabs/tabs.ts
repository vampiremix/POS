import { Component } from '@angular/core';

import { MenuPage } from '../menu/menu';
import { ActivityPage } from '../activity/activity';
import { ReportPage } from '../report/report';
import { InventoryPage } from '../inventory/inventory';
import { ActionSheetController, NavController, PopoverController } from 'ionic-angular';
import { StaffPage } from '../staff/staff';
import { CashDrawerPage } from '../cash-drawer/cash-drawer';
import { SettingPage } from '../setting/setting';
import { PopMenuPage } from '../pop-menu/pop-menu';

@Component({
  selector: 'tab-navi',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = ActivityPage;
  tab3Root = ReportPage;
  tab4Root = InventoryPage;


  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController,
    public popoverCtrl: PopoverController) {

  }
  popOver(){
    let popover = this.popoverCtrl.create(PopMenuPage);
    popover.present({
      // ev: myEvent
    });
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: 'Staff',
          icon:'md-contacts',
          // role: 'destructive',
          handler: () => {
            this.navCtrl.push(StaffPage);
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Cash Drawer',
          icon:'logo-usd',
          handler: () => {
            this.navCtrl.push(CashDrawerPage);
            console.log('Archive clicked');
          }
        },
        {
          text: 'Setting',
          icon:'ios-construct',
          handler: () => {
            this.navCtrl.push(SettingPage);
            console.log('Archive clicked');
          }
        }
       
      ]
    });
 
    actionSheet.present();
  }
}
