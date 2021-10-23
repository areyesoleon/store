import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewEditComponent } from './new-edit/new-edit.component';

const routes: Routes = [{
  path: 'user',
  children: [
    {
      path: '',
      component: ListComponent
    },
    {
      path: 'new',
      component: NewEditComponent
    },
    {
      path: ':id',
      component: NewEditComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
