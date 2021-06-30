import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FreeService } from '../free.service';
import { Top2021Service } from '../top2021.service';

@Component({
  selector: 'app-game-details2',
  templateUrl: './game-details2.component.html',
  styleUrls: ['./game-details2.component.css']
})
export class GameDetails2Component implements OnInit {

  constructor(private ar:ActivatedRoute,private ts:Top2021Service) { }
  instru:any=[];
  h:any=[];
  a="PC";
 gameObj:any={};
 mySubscription:Subscription;
  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    //console.log("id"+id);
    console.log(id)

    this.mySubscription=this.ts.getGameById(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
        this.gameObj=obj;
        console.log(this.gameObj.screenshots)
        this.instru=this.gameObj.instructions.split('.');
        console.log("array "+typeof this.instru);
        console.log(this.instru[1])
        for (let i = 0; i < this.instru.length; i++) {
          if(this.instru[i].length<=3)
             this.instru.splice(i,1);
        }
        this.h=obj.platforms.split(',');
        console.log(typeof this.h,this.h);
        //console.log(this.h.indexOf(" Steam"))
        console.log("😎😍🥰😘");
      },
      err=>{
        console.log("err in reading post",err)
      }
    )

  }

  ngOnDestroy(): void{
    this.mySubscription.unsubscribe();
  }





 /* 
function stripHtml(html):any{
  // Create a new div element
  var temporalDivElement = document.createElement("div");
  // Set the HTML content with the providen
  temporalDivElement.innerHTML = html;
  // Retrieve the text property of the element (cross-browser support)
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

function getinstructions()
{
var htmlString= "<div><h1>Hello World</h1>\n<p>It's me, Mario</p></div>";

//Hello World
//It's me, Mario
console.log(stripHtml(htmlString));
}
*/

}
