import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  addNewuser(newUser):Observable<any>
  {
    //console.log("data came to user service",newUser)
    return this.hc.post("/user/register",newUser); 
  } 
 checkUserLogin(user):Observable<any>
 {
  return this.hc.post("/user/login",user)
 }
 checkAdminLogin(admin):Observable<any>{
   //console.log("in user service admin data",admin)
   return this.hc.post("/admin/login",admin)
 }
  getAdminsdetails():Observable<any>{
    return this.hc.get("/admin/getadmindata")
  }

}
