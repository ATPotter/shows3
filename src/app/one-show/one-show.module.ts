import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { OneShowRoutingModule } from './one-show-routing.module';
import { OneShowComponent } from './one-show.component';

import { ShowDataService } from '../show-data/show-data.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    OneShowRoutingModule
  ],
  providers: [
    ShowDataService
  ],
  declarations: [OneShowComponent]
})
export class OneShowModule { }
