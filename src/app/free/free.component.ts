import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FreeService } from '../free.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {

  gameslist:any;
  constructor(private fSerObj:FreeService,private router:Router) { }

  ngOnInit(): void {
           this.fSerObj.getFreeGamesData().subscribe(res=>{
             console.log("hi",res);
            // this.gameslist=res;
           },err=>{
             console.log("err is ",err)
           });
  }

}
