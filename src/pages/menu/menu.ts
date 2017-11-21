import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  items = [{ item: "A" }, { item: "B" }, { item: "C" },{ item: "D" },
  { item: "E" },{ item: "F" },{ item: "G" },{ item: "H" },{ item: "I" }];
//  q1= [];
public q = [];
public q1 = [];public q2 = [];public q3 = [];public q4 = [];public q5 = [];public q6 = [];
public q7 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private dragulaService: DragulaService) {
    // for (var i = 0; i < 20; i++) {
    //   this.q1.push("1. <" + i + ">");
    //   this.q2.push("2. <" + i + ">");
    // }

    dragulaService.drop.subscribe((value) => {
      let alert = this.alertCtrl.create({
        title: 'Item moved',
        subTitle: 'So much fun!',
        buttons: ['OK']
      });
      alert.present();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
