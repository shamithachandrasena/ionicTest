import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.push("SecondPage");
  }
  
   nextPage(): void{
    this.navCtrl.push("SecondPage");
  }

}
