import { NgModule } from '@angular/core';
import { ShareModule } from '../core/share/share.module';
import { EntityComponent } from './entity/entity.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const components = [
  EntityComponent, ProductDetailComponent
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
