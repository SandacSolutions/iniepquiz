import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

/**
 * Generated class for the SynonymsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-synonyms',
  templateUrl: 'synonyms.html',
})
export class SynonymsPage {

  timerObject: any; //'any' data type
  timerValue : number = 0; //'number' data type -> starts with value 0. Time counter
  counter : number = 0; //Question counter
  ps_counter : number = 1; //pseudo-counter
  score : number = 0; //user score
  done : boolean = false; //checker if the quiz is ended. 
  scores = []; //user scores (0 for error)
  numQ : number = 0;
  passQ = [];

  chances : number = 5;
  winChances : number = 0;

  bC2 : any;
  bC3 : any;
  bC4 : any;
  correctColor: any;
  stat : any;

  disableButton : string = "";

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
  }

  ionViewWillLeave() {
        let tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'flex';
            });

        }
  }  

  //on quiz start
  onStart(){
    this.timerObject = Observable.interval(1000).subscribe(
      x => {
        this.timerValue = x;
      }
    );
    this.proceed();
  } //function that counts the time
  
  //next question
  proceed(){
    if (this.winChances==5) {
      this.chances++;
    }

    if (this.chances==0) {
      this.counter=101;
    }

    else {
      this.numQ++;
      this.disableButton="";

      this.bC2="transparent";
      this.bC3="transparent";
      this.bC4="transparent";
      this.correctColor="transparent";
      
      if (this.ps_counter<100) {
        do {
        var y = Math.floor(Math.random() * 100) + 1;
       } while ((this.passQ.indexOf(y) > -1) == true);

       this.ps_counter++;
       this.passQ.push(y);
       this.counter=y;
     }
     
     else {
       this.counter=101;
     }
    }
   }

  precheck(quest : any) {
    if (quest==1) {
      this.correctColor='green';
      this.scores.push(1);
      this.winChances++;
      this.score++;
      this.disableButton="true";
    }

    else if (quest==2) {
      this.bC2='red';
      this.correctColor='green';
      this.scores.push(0);
      this.winChances = 0;
      this.chances--;
      this.disableButton="true";
    }

    else if (quest==3) {
      this.bC3='red';
      this.correctColor='green';
      this.scores.push(0);
      this.winChances = 0;
      this.chances--;
      this.disableButton="true";
    }

    else {
      this.bC4='red';
      this.correctColor='green';
      this.scores.push(0);
      this.winChances = 0;
      this.chances--;
      this.disableButton="true";
    }

    var self=this;
    setTimeout(function(){self.proceed()}, 1000);
  }

  //calculate and display final results
  viewResults(){
    this.timerObject.unsubscribe(); //stops the time counter
    this.done = true;
    this.counter = 102;
  }

  //reset counters
  reset(){
    this.numQ= 0;
    this.chances= 4;
    this.done = false;
    this.counter = 0;
    this.score = 0;
    this.ps_counter= 1;
    this.passQ= [];
    this.scores= [];
  }
}
