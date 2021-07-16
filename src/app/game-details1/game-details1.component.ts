import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActionSequence } from 'selenium-webdriver';
import { BuyService } from '../buy.service';

@Component({
  selector: 'app-game-details1',
  templateUrl: './game-details1.component.html',
  styleUrls: ['./game-details1.component.css']
})
export class GameDetails1Component implements OnInit {

  constructor(private ar:ActivatedRoute,private fs:BuyService) { }
  gameObj:any=[];
  mySubscription:Subscription;
   ngOnInit(): void {
     let id=this.ar.snapshot.params.id;
     //console.log("id"+id);
    // console.log(id)
 
     this.mySubscription=this.fs.getGameById(id).subscribe(
       obj=>{
         //console.log("obj is ",obj)
         this.gameObj=obj;
         //console.log(this.gameObj.screenshots)
       },
       err=>{
         console.log("err in reading post",err)
       }
     )
 
   }
   ngOnDestroy(): void{
     this.mySubscription.unsubscribe();
   }
   

}
