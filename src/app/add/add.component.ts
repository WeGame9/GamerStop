import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FreeService } from '../free.service';
import { Top2021Service } from '../top2021.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  /*mySubscription:Subscription;
  mySubscription1:Subscription;
  mySubscription2:Subscription;
  mySubscription3:Subscription;
  mySubscription4:Subscription;
  mySubscription5:Subscription;
  mySubscription6:Subscription;
  mySubscription7:Subscription;  */

  constructor(private fS:FreeService,private tS:Top2021Service) { }

  ngOnInit(): void {
  }
  /*
  data
  onadd(value)
  {
    
    //console.log(value)
    this.mySubscription=this.fS.getGameById(value.id).subscribe(res=>{
      //console.log("hi",res);
      this.data=res;
      //console.log("hello",res);
    })
     this.onadd1();
  }

  onadd1()
  {
    this.mySubscription1=this.fS.addRowItems(this.data).subscribe(
      res=>{
           console.log("in component .ts",this.data)
          if(res.message=="succesfully inserted the row item")
          {
            alert(res.message)
            console.log("element added")
          }
      }
    )
  }
  
  onaddRar(value)
  {
    //console.log("on addRA",value)
    this.mySubscription2=this.tS.getGameById(value.id).subscribe(res=>{
      //console.log("hi",res);
      this.data=res;
      //console.log("hello",res);
    })
     this.onadd1RA();
  }
  onadd1RA()
  {
    this.mySubscription3=this.fS.addRecentlyAdded(this.data).subscribe(
         res=>{
            alert(res.message)
            //console.log("recently added elements added")
         },
         err=>{
           console.log("something went wrong in the recently added")
         }
       )
  }
  onaddFg(value)
  {
   // console.log(value)
   this.mySubscription4=this.tS.getGameById(value.id).subscribe(res=>{
     // console.log("hi",res);
      this.data=res;
      //console.log("hello",res);
    })
    this.onaddFg1();
  }
  onaddFg1()
  {
    this.mySubscription5=this.fS.addFeaturedGames(this.data).subscribe(
       res=>{
           alert(res.message)
     },
     err=>{
        alert("error in the adding featured games")
     }
     )
  }
  onaddRe(value)
  {
   // console.log(value)
   this.mySubscription7=this.fS.getGameById(value.id).subscribe(res=>{
     // console.log("hi",res);
      this.data=res;
      //console.log("hello",res);
    })
    this.onaddRe1();
  }
  onaddRe1()
  {
    this.mySubscription6=this.fS.addRecommendedGames(this.data).subscribe(
       res=>{
           alert(res.message)
     },
     err=>{
        alert("error in the adding featured games")
     }
     )
  }

  ngOnDestroy():void {
    this.mySubscription.unsubscribe();
    this.mySubscription1.unsubscribe();
    this.mySubscription2.unsubscribe();
    this.mySubscription3.unsubscribe();
    this.mySubscription4.unsubscribe();
    this.mySubscription5.unsubscribe();
    this.mySubscription6.unsubscribe();
    this.mySubscription7.unsubscribe();
}*/
}
