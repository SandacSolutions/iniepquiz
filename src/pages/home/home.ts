import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SynonymsPage } from '../synonyms/synonyms';
import { PhrasalPage } from '../phrasal/phrasal';
import { HistoryPage } from '../history/history';
import { GeneralPage } from '../general/general';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController, private toast: ToastController) {}

	ionViewDidLoad() {
		this.toast.create({ message: 'Welcome!', duration: 2000, position: 'middle', cssClass: "toast"}).present();
	  }

	openSyno() {
		this.navCtrl.push(SynonymsPage);
	}

	openPhrasal() {
		this.navCtrl.push(PhrasalPage);
	}

	openHist() {
		this.navCtrl.push(HistoryPage);
	}

	openGen() {
		this.navCtrl.push(GeneralPage);
	}
}
