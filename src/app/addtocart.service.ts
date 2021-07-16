import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  constructor(private hc:HttpClient) { }
  addGameToCart(data):Observable<any>{
    return this.hc.post("/user/addtocart",data)
  }

  getCartObj(username):Observable<any>{
    return this.hc.get(`/user/getcartObj/${username}`)
  }

  updateCartObj(usercartObj):Observable<any>{
      return this.hc.post("/user/updatecart",usercartObj)
  }
}
