import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddgameComponent } from './addgame/addgame.component';
import { AddhomepageComponent } from './addhomepage/addhomepage.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserlistComponent,
    AddgameComponent,
    AddhomepageComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
