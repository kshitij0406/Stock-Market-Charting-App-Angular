import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAllComponent } from './user-all/user-all.component';
import { UserAddComponent } from './user-add/user-add.component';
import {FormsModule} from '@angular/forms';
import { UserUpdateComponent } from './user-update/user-update.component';
import { StockExchangeAllComponent } from './stock-exchange-all/stock-exchange-all.component';
import { StockExchangeAddComponent } from './stock-exchange-add/stock-exchange-add.component';
import { StockExchangeUpdateComponent } from './stock-exchange-update/stock-exchange-update.component';
import { CompanyAllComponent } from './company-all/company-all.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { IpoAllComponent } from './ipo-all/ipo-all.component';
import { IpoAddComponent } from './ipo-add/ipo-add.component';
import { IpoUpdateComponent } from './ipo-update/ipo-update.component';
@NgModule({
  declarations: [
    AppComponent,
    UserAllComponent,
    UserAddComponent,
    UserUpdateComponent,
    StockExchangeAllComponent,
    StockExchangeAddComponent,
    StockExchangeUpdateComponent,
    CompanyAllComponent,
    CompanyAddComponent,
    CompanyUpdateComponent,
    IpoAllComponent,
    IpoAddComponent,
    IpoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
