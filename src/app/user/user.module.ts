import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NewEditComponent } from './new-edit/new-edit.component';
import { ListComponent } from './list/list.component';
import { ComponentsModule } from '../components/components.module';
import { UiSwitchModule } from 'ngx-ui-switch';

const component = [NewEditComponent, ListComponent];


@NgModule({
  declarations: [
    ...component
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule,
    UiSwitchModule,
  ],
  exports: [...component]
})
export class UserModule { }
