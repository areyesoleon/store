import { NgModule } from '@angular/core';
import { ShareModule } from '../core/share/share.module';
import { EntityComponent } from './entity/entity.component';

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
