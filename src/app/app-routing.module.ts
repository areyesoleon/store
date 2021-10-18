import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [{
  path: 'user',
  loadChildren: './user/user.module#UserModule'
}, {
  path: 'menu',
  loadChildren: './menu/menu.module#MenuModule'
}, {
  path: '**',
  component: MenuComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
