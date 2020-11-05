import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoclinicoPage } from './casoclinico.page';

const routes: Routes = [
  {
    path: '',
    component: CasoclinicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoclinicoPageRoutingModule {}
