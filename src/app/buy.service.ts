import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private hc:HttpClient) { }
  getBuyGamesData():Observable<any>
    {
      const headers = {
      	"x-rapidapi-key": "b117c35e83mshc494288ea2e754fp1a0ba5jsn40566619a791",
	"x-rapidapi-host": "gamerpower.p.rapidapi.com",

      };
      const params = {
      };
      //console.log("")
      return this.hc.get(
        'https://gamerpower.p.rapidapi.com/api/giveaways',
        { headers : headers}
      );
    }
    getGameById(id:any):Observable<any>{
      const headers = {
        "x-rapidapi-key": "b117c35e83mshc494288ea2e754fp1a0ba5jsn40566619a791",
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
