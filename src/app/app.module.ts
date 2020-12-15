import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAllComponent } from './user/user-all/user-all.component';
import { SignupComponent } from './authenticate/signup/signup.component';
import {FormsModule} from '@angular/forms';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { StockExchangeAllComponent } from './stock-exchange/stock-exchange-all/stock-exchange-all.component';
import { StockExchangeAddComponent } from './stock-exchange/stock-exchange-add/stock-exchange-add.component';
import { StockExchangeUpdateComponent } from './stock-exchange/stock-exchange-update/stock-exchange-update.component';
import { CompanyAllComponent } from './company/company-all/company-all.component';
import { CompanyAddComponent } from './company/company-add/company-add.component';
import { CompanyUpdateComponent } from './company/company-update/company-update.component';
import { IpoAllComponent } from './ipo/ipo-all/ipo-all.component';
import { IpoAddComponent } from './ipo/ipo-add/ipo-add.component';
import { IpoUpdateComponent } from './ipo/ipo-update/ipo-update.component';
import { LoginComponent } from './authenticate/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    UserAllComponent,
    SignupComponent,
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
    LoginComponent,
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
