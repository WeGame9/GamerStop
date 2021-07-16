import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { FreeService } from '../free.service';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private fs:FreeService) { }
 gameObj:any=[];
 mySubscription:Subscription;
  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    //console.log("id"+id);
    //console.log(id)

    this.mySubscription=this.fs.getGameById(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
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
