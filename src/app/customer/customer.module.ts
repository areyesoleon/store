import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { ShareModule } from '../core/share/share.module';
import { CustomerRoutingModule } from './customer-routing.module';
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
    CustomerRoutingModule,
  ]
})
export class CustomerModule { }
