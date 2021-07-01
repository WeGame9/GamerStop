import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreeService  {

  constructor(private hc:HttpClient) {  }

    getFreeGamesData():Observable<any>
    {
      const headers = {
      	"x-rapidapi-key": "2ff7a0eaa0mshaee6f7187507ddfp1d2804jsn05f309075f92",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",

      };
      const params = {
      };
      //console.log("")
      return this.hc.get(
        'https://free-to-play-games-database.p.rapidapi.com/api/games',
        { headers : headers}
      );
    }
    
    getGameById(id:any):Observable<any>{
      const headers = {
        "x-rapidapi-key": "2ff7a0eaa0mshaee6f7187507ddfp1d2804jsn05f309075f92",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",

      };
      const params = {
       "id":id,
      };
      //console.log("")
      return this.hc.get(
        'https://free-to-play-games-database.p.rapidapi.com/api/game',
        { headers : headers, params: params}
      );
    }

    addRowItems(data):Observable<any>{
      console.log("data came to service",data)
     return this.hc.post("/addHomeRow",data);
    }

}
