import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEditComponent } from './new-edit/new-edit.component';

const routes: Routes = [{
  path: 'product',
  children:[{
    path: '',
    component: NewEditComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
