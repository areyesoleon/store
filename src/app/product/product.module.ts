import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { NewEditComponent } from './new-edit/new-edit.component';
import { ListComponent } from './list/list.component';
import { ShareModule } from '../core/share/share.module';


@NgModule({
  declarations: [
    NewEditComponent,
    ListComponent
  ],
  imports: [
    ShareModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
