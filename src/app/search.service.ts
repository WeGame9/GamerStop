import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private hc:HttpClient) { }

  getSearchGamesData():Observable<any>
  {
    const headers = {
      'x-rapidapi-key': '2ff7a0eaa0mshaee6f7187507ddfp1d2804jsn05f309075f92',
      'x-rapidapi-host': 'gamerpower.p.rapidapi.com'

    };
    const params = {
      'sort-by': 'value'
    };
    //console.log("")
    return this.hc.get(
      'https://gamerpower.p.rapidapi.com/api/giveaways',
      { headers : headers,params:params}
    );
  }

}
