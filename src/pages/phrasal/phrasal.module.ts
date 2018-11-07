import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhrasalPage } from './phrasal';

@NgModule({
  declarations: [
    PhrasalPage,
  ],
  imports: [
    IonicPageModule.forChild(PhrasalPage),
  ],
})
export class PhrasalPageModule {}
