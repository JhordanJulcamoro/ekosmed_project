import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { inicialPage } from './inicial.page';

const routes: Routes = [
  {
    path: '',
    component: inicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class inicialPageRoutingModule {}
