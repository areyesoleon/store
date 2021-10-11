import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEditComponent } from './user/new-edit/new-edit.component';

const routes: Routes = [{
  path: 'user',
  loadChildren: './user/user.module#UserModule'
}, {
  path: '**',
  component: NewEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
