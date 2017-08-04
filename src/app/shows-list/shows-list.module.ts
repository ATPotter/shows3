import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ShowsListRoutingModule } from './shows-list-routing.module';
import { ShowsListComponent } from './shows-list.component';

import { ShowDataService } from '../show-data/show-data.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ShowsListRoutingModule
  ],
  providers: [
    ShowDataService
  ],
  declarations: [
    ShowsListComponent
  ]
})
export class ShowsListModule { }
