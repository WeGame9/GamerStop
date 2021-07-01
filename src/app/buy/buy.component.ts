import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from '../buy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  p=1;
  gameslist:any=[];
  constructor(private bSerObj:BuyService,private router:Router) { }
   mySubscription:Subscription;
  ngOnInit(): void {
    this.mySubscription=this.bSerObj.getBuyGamesData().subscribe(res=>{
             console.log("hi",res);
             for(let v of res)
              {
               // this.gameslist.unshift(v);

               if(v.worth!="N/A")
                {
                  this.gameslist.push(v);
                }
              }
            //this.gameslist=res;
           },err=>{
             console.log("err is ",err)
           });

          // console.log("WOW",this.gameslist)
           //console.log("VERY GOOD GIRL")
  }
 ngOnDestroy():void {
    this.mySubscription.unsubscribe();
}
}
