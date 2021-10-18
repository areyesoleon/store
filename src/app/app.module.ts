import { MenuModule } from './menu/menu.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { ProviderModule } from './provider/provider.module';
import { TurnModule } from './turn/turn.module';
import { BranchModule } from './branch/branch.module';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    CustomerModule,
    ProviderModule,
    TurnModule,
    BranchModule,
    ProductModule,
    MenuModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
