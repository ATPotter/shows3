import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { OneShowComponent } from './one-show.component';

const routes: Routes = Route.withShell([
  { path: 'oneShow/:showNumber', component: OneShowComponent, data: { title: extract('OneShow') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OneShowRoutingModule { }
