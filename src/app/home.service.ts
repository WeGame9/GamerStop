import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private hc:HttpClient) { }

  getSpecialOffers():Observable<any>
  {
    return this.hc.get("/home/getSpecialOffers");
  }

  getRecentlyAdded():Observable<any>
  {
    return this.hc.get("/home/getRecentlyAddedGames")
  }
  getfeaturedGames():Observable<any>
  {
    return this.hc.get("/home/getFeaturedGames")
  }
  getrecommendedGames():Observable<any>
  {
    return this.hc.get("/home/getRecommendedGames");
  }

}
