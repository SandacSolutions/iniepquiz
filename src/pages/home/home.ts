import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SynonymsPage } from '../synonyms/synonyms';
import { PhrasalPage } from '../phrasal/phrasal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController) {}

	openSyno() {
		this.navCtrl.push(SynonymsPage);
	}

	openPhrasal() {
		this.navCtrl.push(PhrasalPage);
	}
}
