import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ShowsListComponent } from './shows-list.component';

const routes: Routes = Route.withShell([
  { path: 'shows', component: ShowsListComponent, data: { title: extract('Shows') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShowsListRoutingModule { }
