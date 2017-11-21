import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import { ActivityPage } from '../pages/activity/activity';
import { ReportPage } from '../pages/report/report';
import { InventoryPage } from '../pages/inventory/inventory';
import { StaffPage } from '../pages/staff/staff';
import { CashDrawerPage } from '../pages/cash-drawer/cash-drawer';
import { SettingPage } from '../pages/setting/setting';
import { DragulaModule } from 'ng2-dragula';
import { PopMenuPage } from '../pages/pop-menu/pop-menu';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    ActivityPage,
    ReportPage,
    InventoryPage,
    StaffPage,
    CashDrawerPage,
    SettingPage,
    PopMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    ActivityPage,
    ReportPage,
    InventoryPage,
    StaffPage,
    CashDrawerPage,
    SettingPage, 
    PopMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
