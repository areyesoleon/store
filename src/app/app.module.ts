import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchModule } from './branch/branch.module';
import { BuyModule } from './buy/buy.module';
import { CustomerModule } from './customer/customer.module';
import { InventoryModule } from './inventory/inventory.module';
import { MenuModule } from './menu/menu.module';
import { ProductModule } from './product/product.module';
import { ProviderModule } from './provider/provider.module';
import { SaleModule } from './sale/sale.module';
import { TurnModule } from './turn/turn.module';
import { UserModule } from './user/user.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    InventoryModule,
    SaleModule,
    BuyModule,
    MenuModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
