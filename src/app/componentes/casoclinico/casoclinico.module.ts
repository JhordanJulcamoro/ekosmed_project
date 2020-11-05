import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoclinicoPageRoutingModule } from './casoclinico-routing.module';

import { CasoclinicoPage } from './casoclinico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoclinicoPageRoutingModule
  ],
  declarations: [CasoclinicoPage]
})
export class CasoclinicoPageModule {}
