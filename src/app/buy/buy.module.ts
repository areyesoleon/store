import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { ShareModule } from '../core/share/share.module';
import { BuyRoutingModule } from './buy-routing.module';
import { ListComponent } from './list/list.component';
import { NewEditComponent } from './new-edit/new-edit.component';



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
