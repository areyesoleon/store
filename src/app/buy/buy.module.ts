import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { NewEditComponent } from './new-edit/new-edit.component';
import { ListComponent } from './list/list.component';
import { ShareModule } from '../core/share/share.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    NewEditComponent,
    ListComponent
  ],
  imports: [
    ShareModule,
    ComponentsModule,
    BuyRoutingModule
  ]
})
export class BuyModule { }
