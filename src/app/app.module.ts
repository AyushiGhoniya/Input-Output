import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-master/product-details/product-details.component';
import { StockStatusComponent } from './product-master/stock-status/stock-status.component';
import { ProductMasterComponent } from './product-master/product-master.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    StockStatusComponent,
    ProductMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
