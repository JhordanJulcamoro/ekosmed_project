import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosClinicosPageRoutingModule } from './casos-clinicos-routing.module';

import { CasosClinicosPage } from './casos-clinicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosClinicosPageRoutingModule
  ],
  declarations: [CasosClinicosPage]
})
export class CasosClinicosPageModule {}
