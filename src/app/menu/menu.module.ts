import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

const components = [MenuComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class MenuModule { }
