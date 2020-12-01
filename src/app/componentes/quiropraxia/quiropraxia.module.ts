import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuiropraxiaPageRoutingModule } from './quiropraxia-routing.module';

import { QuiropraxiaPage } from './quiropraxia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuiropraxiaPageRoutingModule
  ],
  declarations: [QuiropraxiaPage]
})
export class QuiropraxiaPageModule {}
