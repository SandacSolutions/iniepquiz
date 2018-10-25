import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SynonymsPage } from './synonyms';

@NgModule({
  declarations: [
    SynonymsPage,
  ],
  imports: [
    IonicPageModule.forChild(SynonymsPage),
  ],
})
export class SynonymsPageModule {}
