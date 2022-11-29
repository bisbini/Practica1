import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingSlidingPage } from './listing-sliding.page';

const routes: Routes = [
  {
    path: '',
    component: ListingSlidingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingSlidingPageRoutingModule {}
