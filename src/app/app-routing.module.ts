import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyAddComponent } from './company/company-add/company-add.component';
import { CompanyAllComponent } from './company/company-all/company-all.component';
import { CompanyUpdateComponent } from './company/company-update/company-update.component';
import { IpoAddComponent } from './ipo/ipo-add/ipo-add.component';
import { IpoAllComponent } from './ipo/ipo-all/ipo-all.component';
import { IpoUpdateComponent } from './ipo/ipo-update/ipo-update.component';
import { StockExchangeAddComponent } from './stock-exchange/stock-exchange-add/stock-exchange-add.component';
import { StockExchangeAllComponent } from './stock-exchange/stock-exchange-all/stock-exchange-all.component';
import { StockExchangeUpdateComponent } from './stock-exchange/stock-exchange-update/stock-exchange-update.component';
import { SignupComponent} from './authenticate/signup/signup.component';
import { UserAllComponent } from './user/user-all/user-all.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { LoginComponent } from './authenticate/login/login.component';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';

const routes: Routes = [
  {path: 'user-all', component: UserAllComponent },
  {path:'signup',component: SignupComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'user-update/:id' , component:UserUpdateComponent},
  {path:'stock-exchange-all',component:StockExchangeAllComponent},
  {path:'stock-exchange-add',component : StockExchangeAddComponent},
  {path:'stock-exchange-update/:id',component : StockExchangeUpdateComponent},
  {path:'company-all',component: CompanyAllComponent},
  {path:'company-add',component :CompanyAddComponent},
  {path:'company-update/:id',component : CompanyUpdateComponent},
  {path:'ipo-all',component: IpoAllComponent},
  {path:'ipo-add',component :IpoAddComponent},
  {path:'ipo-update/:id',component : IpoUpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'user-landing-page',component:UserLandingPageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
