import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../addtocart.service';
import { AppComponent } from '../app.component';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})

  /* @media screen and (max-width: 490px) {
  .logo{
    width: 30vh;
  }
}
@media screen and (min-width: 491px) {
  .logo{
    display: none;
  }
}
@HostListener("window:resize",[])
onResize()
{
  var width = window.innerWidth;
  this.mobile = width < 992;
} */
export class UsercartComponent implements OnInit {
 

  constructor(private As:AddtocartService,private App:AppComponent) { }
  count;
  totalcost=0;
  games=[]
  flag=0
  userCartObj
  mobile=window.screen.width;
  ngOnChange():void{
    this.mobile=window.screen.width;
  }
  ngOnInit(): void {
    this.mobile=window.screen.width;
       let username=localStorage.getItem("username")
     this.As.getCartObj(username).subscribe(
       res=>{
         if(res.message=="cart is empty")
            alert(res.message)
         else{
             this.count=res.usercartObj['count']
             this.games=res.usercartObj['games'];
             this.userCartObj=res.usercartObj
             //console.log(this.games)
             for(let v in this.games)
             {
               // this.totalcost=this.totalcost+v.worth*v.count;
             }
          }
       }
     )   
  }

  addgame(i)
  {
     //console.log(i)
     this.games[i].count=this.games[i].count+1
     this.count=this.count+1
     this.App.count=this.count;
     //console.log(this.games[i])
     this.flag=1
  }
  removegame(i)
  {
    this.games[i].count=this.games[i].count-1
    this.count=this.count-1
    this.App.count=this.count;
    this.flag=1
    if(this.games[i].count==0)
         this.games.splice(i,1)
  }
  deletegame(i)
  {
    this.count=this.count-this.games[i].count
     this.games.splice(i,1)
     this.App.count=this.count;
     this.flag=1
  }

  ngOnDestroy():void {
   
    this.userCartObj['games']=this.games
    this.userCartObj['count']=this.count  
    //console.log(this.games,this.count,this.userCartObj)
    if(this.flag==1)
    {
      this.As.updateCartObj(this.userCartObj).subscribe(
          res=>{
             alert(res.message)
             }
           ,
        err=>{
           console.log("something went wrong in updating cart")
           }
        )
    }
  }

  isMobile() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 768;
  }
}
