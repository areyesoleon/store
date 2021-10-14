import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityComponent } from './entity/entity.component';
import { UiSwitchModule } from 'ngx-ui-switch';

const components = [
  EntityComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    UiSwitchModule,
  ],
  exports: [...components]
})
export class ComponentsModule { }
