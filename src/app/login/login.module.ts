import { NgModule } from '@angular/core';
import { ShareModule } from './../core/share/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

const modules = [LoginComponent]

@NgModule({
  declarations: [
    ...modules
  ],
  imports: [
    ShareModule,
    LoginRoutingModule
  ],
  exports: [...modules]
})
export class LoginModule { }
