import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { FreeService } from '../free.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {

  p=1;
  gameslist:any=[];
  constructor(private fSerObj:FreeService,private router:Router,private App:AppComponent) { }
   mySubscription:Subscription;
  ngOnInit(): void {
    this.mySubscription=this.fSerObj.getFreeGamesData().subscribe(res=>{
             //console.log("hi",res);
             for(let v of res)
              {
                this.gameslist.unshift(v);
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
    //this.App.a='null';
    //console.log("comeout from free")
}

}
