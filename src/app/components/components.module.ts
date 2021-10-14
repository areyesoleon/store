import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityComponent } from './entity/entity.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../core/share/share.module';

const components = [
  EntityComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ShareModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
