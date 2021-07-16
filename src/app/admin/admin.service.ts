import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) { }

  addgameToCollection(game):Observable<any>{
    return this.hc.post("/admin/addgame",game);
  }

  getuserList():Observable<any>
  {
    return this.hc.get("/admin/getusersdata")
  }

  deleteUserdetails(username):Observable<any>
  {
    console.log("admin serbhjkff",username)
    return this.hc.delete(`/admin/deleteuser/${username}`)
  }

}
