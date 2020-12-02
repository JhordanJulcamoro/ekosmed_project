import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjudafeedbackPageRoutingModule } from './ajudafeedback-routing.module';

import { AjudafeedbackPage } from './ajudafeedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjudafeedbackPageRoutingModule
  ],
  declarations: [AjudafeedbackPage]
})
export class AjudafeedbackPageModule {}
