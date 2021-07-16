import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddtocartService } from '../addtocart.service';
import { AppComponent } from '../app.component';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  p=1;
  searchTerm:string;
  gameslist:any=[];
  mySubscription:Subscription;
  constructor(private SerchSerObj:SearchService,public App:AppComponent,private As:AddtocartService) { }

  ngOnInit(): void {
    this.App.a='null';
    this.mySubscription=this.SerchSerObj.getSearchGamesData().subscribe(res=>{
     // console.log("hi",res);
      for(let v of res)
       {
        // this.gameslist.unshift(v);
       // if(v.worth!="N/A")
         //{
      this.gameslist=res;
          // this.gameslist.push(v);
        // }
       }
      // console.log("gameslist",this.gameslist)
     //this.gameslist=res;
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

  ngOnDestroy():void {
    this.mySubscription.unsubscribe();
   // this.App.a='null';
}

}
