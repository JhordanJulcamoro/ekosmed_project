import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { inicialPageRoutingModule } from './inicial-routing.module';

import { inicialPage } from './inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    inicialPageRoutingModule
  ],
  declarations: [inicialPage]
})
export class inicialPageModule {}
