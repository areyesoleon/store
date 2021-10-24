import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnRoutingModule } from './turn-routing.module';
import { NewEditComponent } from './new-edit/new-edit.component';
import { ListComponent } from './list/list.component';
import { ShareModule } from '../core/share/share.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    NewEditComponent,
    ListComponent
  ],
  imports: [
    ShareModule,
    TurnRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),

  ]
})
export class TurnModule { }
