import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosClinicosPage } from './casos-clinicos.page';

const routes: Routes = [
  {
    path: '',
    component: CasosClinicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosClinicosPageRoutingModule {}
