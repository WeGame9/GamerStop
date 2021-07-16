import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Top2021Service {

  constructor(private hc:HttpClient) { }

  a:string="pc";
  b:string="game";

  getTop2021GamesData(platform:string,type:string):Observable<any>
  {
    if(type=="")
       {
         type="game";
       }
    if(platform=="")
    {
      platform="pc";
    }
   /* else{
      type=this.b;
      platform=this.a;
      console.log("HAMMAYA1"," ",platform," ",type);
    } */
    console.log("came here")
    //console.log("HAMMAYA     999"," ",platform," ",type);
    /*if(this.a=="")
        this.a=platform
    if(this.b=="")
      this.b=type
    if(platform!="")
       this.a=platform
    if(type!="")
       this.b=type */
    console.log("a= ",this.a,"b= ",this.b);
    const headers = {
      "x-rapidapi-key": "2ff7a0eaa0mshaee6f7187507ddfp1d2804jsn05f309075f92",
      "x-rapidapi-host": "gamerpower.p.rapidapi.com",

    };
    const params = {
      "platform": this.a,
      "type": this.b,
      "sort-by": "popularity"
    };
    //console.log("BADGIRL",platform," ",type)
    return this.hc.get(
      'https://gamerpower.p.rapidapi.com/api/giveaways',
      { headers : headers,params:params}
    );
  }


  getGameById(id:any):Observable<any>{
    //console.log("i came here with id:happy ",id);
    const headers = {
      "x-rapidapi-key": "2ff7a0eaa0mshaee6f7187507ddfp1d2804jsn05f309075f92",
      "x-rapidapi-host": "gamerpower.p.rapidapi.com",

    };
    const params = {
     "id":id,
    };
    //console.log("")
    return this.hc.get(
      'https://gamerpower.p.rapidapi.com/api/giveaway',
      { headers : headers, params: params}
    );
  }

}
