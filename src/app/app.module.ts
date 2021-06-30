import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import{NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Top2021Component } from './top2021/top2021.component';
import { FreeComponent } from './free/free.component';
import { BuyComponent } from './buy/buy.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameDetails2Component } from './game-details2/game-details2.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    Top2021Component,
    FreeComponent,
    BuyComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    GameDetailsComponent,
    GameDetails2Component,
    FooterComponent
  ],
  exports:[NgxPaginationModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    /*RouterModule.forRoot(
      appRoutes
    )*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
