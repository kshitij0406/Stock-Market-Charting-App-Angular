import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyAllComponent } from './company-all/company-all.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { IpoAddComponent } from './ipo-add/ipo-add.component';
import { IpoAllComponent } from './ipo-all/ipo-all.component';
import { IpoUpdateComponent } from './ipo-update/ipo-update.component';
import { StockExchangeAddComponent } from './stock-exchange-add/stock-exchange-add.component';
import { StockExchangeAllComponent } from './stock-exchange-all/stock-exchange-all.component';
import { StockExchangeUpdateComponent } from './stock-exchange-update/stock-exchange-update.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserAllComponent } from './user-all/user-all.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path: 'user-all', component: UserAllComponent },
  {path:'user-add',component: UserAddComponent},
  {path:'', redirectTo:'stock-exchange-all', pathMatch:'full'},
  {path:'user-update/:id' , component:UserUpdateComponent},
  {path:'stock-exchange-all',component:StockExchangeAllComponent},
  {path:'stock-exchange-add',component : StockExchangeAddComponent},
  {path:'stock-exchange-update/:id',component : StockExchangeUpdateComponent},
  {path:'company-all',component: CompanyAllComponent},
  {path:'company-add',component :CompanyAddComponent},
  {path:'company-update/:id',component : CompanyUpdateComponent},
  {path:'ipo-all',component: IpoAllComponent},
  {path:'ipo-add',component :IpoAddComponent},
  {path:'ipo-update/:id',component : IpoUpdateComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
