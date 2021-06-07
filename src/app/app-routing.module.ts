import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { FreeComponent } from './free/free.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameDetails1Component } from './game-details1/game-details1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { Top2021Component } from './top2021/top2021.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"top2021",component:Top2021Component},
  {path:"free",component:FreeComponent},
  {path:"buy",component:BuyComponent},
  {path:"search",component:SearchComponent},
  {path:"login",component:LoginComponent},
  {path:"game-details/:id",component:GameDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
