import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GamerStop';
  check=false;
  acheck=false;
  username;
  count;
  a='null';
  b='null';
  userObj;
  constructor(private router:Router) { }

  ngOnInit(): void {
     //this.username=localStorage.username
     //this.userObj=JSON.parse(localStorage.getItem(this.userObj))
  }
  onOurgamesupdate(d)
  {
    this.a=d;
    //console.log("1st me a=",this.a);
  }
  onUsername(d)
  {
    this.b=d;
  }
  onlogOut()
  {
    localStorage.clear();
    this.check=false;
    this.acheck=false;
    this.router.navigateByUrl("\home")
  }
  ngOnDestroy():void {
   this.count=null;
}
 
}
