import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaffPage } from '../staff/staff';
import { CashDrawerPage } from '../cash-drawer/cash-drawer';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the PopMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-menu',
  templateUrl: 'pop-menu.html',
})
export class PopMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopMenuPage');
  }
  gotoStaffPage(){
    this.navCtrl.push(StaffPage);
  }
  gotoCashDrawerPage(){
    this.navCtrl.push(CashDrawerPage);
  }
  gotoSettingPage(){
    this.navCtrl.push(SettingPage);
  }
}
