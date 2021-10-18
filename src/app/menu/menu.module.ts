import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuRoutingModule } from './menu-routing.module';

const components = [MenuComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    MenuRoutingModule,
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class MenuModule { }
