import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjudafeedbackPage } from './ajudafeedback.page';

const routes: Routes = [
  {
    path: '',
    component: AjudafeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudafeedbackPageRoutingModule {}
