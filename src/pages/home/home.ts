import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SynonymsPage } from '../synonyms/synonyms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController) {}

	openSyno() {
		this.navCtrl.push(SynonymsPage);
	}
}
