import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddtocartService } from '../addtocart.service';
import { AppComponent } from '../app.component';
import { Top2021Service } from '../top2021.service';

@Component({
  selector: 'app-top2021',
  templateUrl: './top2021.component.html',
  styleUrls: ['./top2021.component.css']
})
export class Top2021Component implements OnInit {

  p=1
  gameslist:any=[];
  platform:any=[];
  platformTypes:any=['pc', 'steam', 'epic-games-store', 'uplay', 'gog', 'icthio', 'ps4', 'xbox-one', 'switch', 'android', 'ios', 'vr', 'battlenet']
  typeTypes=['game', 'loot', 'beta']
  h:any;
  a:string="pc";
  b:string="game";
  constructor(public tSerObj:Top2021Service,private router:Router,public App:AppComponent,private As:AddtocartService) { }
   mySubscription:Subscription;
  ngOnInit(): void {
      this.App.a='null';
    //console.log("initialize",this.tSerObj.a," ",this.tSerObj.b)
    this.mySubscription=this.tSerObj.getTop2021GamesData(this.tSerObj.a,this.tSerObj.b).subscribe(res=>{
            // console.log("hi",res);
             for(let v of res)
              {
               /* if(v.worth!="N/A")
                {*/
                this.gameslist.push(v);
                this.h=v.platforms.split(',');
                //console.log(this.h)
                this.platform.push(this.h);
               // }
              }
            //this.gameslist=res;
           },err=>{
             console.log("err is here ",err)
           });

           //console.log("WOW",this.platform)
           //console.log("VERY GOOD GIRL")
  }
 ngOnDestroy():void {
  this.tSerObj.a=this.a;
  this.tSerObj.b=this.b;
    this.mySubscription.unsubscribe();
 
 }
 getdataA(a){
   this.p=1
   this.a=a;
   this.tSerObj.a=a;
   this.gameslist=[];
  // console.log("this is get a");
  // console.log("hi hello"," ",this.a,"*",this.b);
   this.mySubscription=this.tSerObj.getTop2021GamesData(a,this.tSerObj.b).subscribe(res=>{
     //console.log("this is res i got",res)
    for(let v of res)
     {
       this.gameslist.push(v);
       this.h=v.platforms.split(',');
       //console.log(this.h)
       this.platform.push(this.h);
     }
    //console.log("fhsdj",this.gameslist)
  },err=>{
    console.log("err is ",err)
  });


 }
 getdataB(b)
 {
   this.b=b;
   this.p=1
   this.gameslist=[];
   this.tSerObj.b=b;
   this.mySubscription=this.tSerObj.getTop2021GamesData(this.tSerObj.a,b).subscribe(res=>{
    for(let v of res)
     {
       this.gameslist.push(v);
       this.h=v.platforms.split(',');
       //console.log(this.h)
       this.platform.push(this.h);
     }
  },err=>{
    console.log("err is ",err)
  });
 }
 

 addtocart(games)
 {
   //console.log("On ADD TO CART")
   let username=localStorage.getItem("username");
     let newuserObj={username,games}
     this.As.addGameToCart(newuserObj).subscribe(res=>{
       alert(res.message)
       this.App.count=this.App.count+1;
       
     },
     err=>{
       console.log("some thin error in adding the cart obj")
     })
 }

}
