import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

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
import { AddComponent } from './add/add.component';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './search.pipe';
import { UsercartComponent } from './usercart/usercart.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AuthorizationService } from './authorization.service';
import { AvatarModule } from 'ngx-avatar';


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
    FooterComponent,
    AddComponent,
    RegisterComponent,
    SearchPipe,
    UsercartComponent,
    UserAccountComponent
  ],
  exports:[NgxPaginationModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    AvatarModule,
    /*RouterModule.forRoot(
      appRoutes
    )*/
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationService,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
