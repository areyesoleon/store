import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ComponentsModule } from '../components/components.module';
import { ShareModule } from '../core/share/share.module';
import { ListComponent } from './list/list.component';
import { NewEditComponent } from './new-edit/new-edit.component';
import { UserRoutingModule } from './user-routing.module';


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
    ReactiveFormsModule,
  ],
  exports: [...component]
})
export class UserModule { }
