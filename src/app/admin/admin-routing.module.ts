import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AddgameComponent } from './addgame/addgame.component';
import { AddhomepageComponent } from './addhomepage/addhomepage.component';
import { AdminComponent } from './admin.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'addhomepage',component:AddhomepageComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'add',component:AddComponent,children:[
    {path:'addgame',component:AddgameComponent},
    {path:'addhomepage',component:AddhomepageComponent},
    
    {path:'',redirectTo:'addgame',pathMatch:'full'}
  ]},
  //{ path: '', component: AdminComponent },
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
