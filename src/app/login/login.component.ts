import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from '../addtocart.service';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private App:AppComponent,private uS:UserService,private router:Router,private As:AddtocartService) { }

  ngOnInit(): void {
    this.App.a='null';
   // this.App.check=true;
  }

first=0
h4;
  onLogin(data)
  {
    //console.log("login data : ",data.value);
    //data.reset();
    let checkuser=false;
     this.uS.checkAdminLogin(data.value).subscribe(
      res=>{
           if(res.message=="Invalid user")
           {
             checkuser=true;
             this.checkloginuser(data.value);
           }
           else
           {
                
            if(res.message!=="login successfull")
            {
              alert(res.message)
              if(this.first==0)
              {
              let divElement=document.querySelector(".parent")
              this.h4=document.createElement("h4")
              this.first=1;
              this.h4.textContent=res.message;
              this.h4.style.backgroundColor="#d8d9db";
              this.h4.style.color="#FF5733"
              divElement.appendChild(this.h4)
              //console.log("first",this.h4)
              //console.log(divElement.appendChild(this.h4))
              }
              else
              {
                this.h4.textContent=res.message;
                [this.h4.style.backgroundColor,this.h4.style.color]=[this.h4.style.color,this.h4.style.backgroundColor]
              }
              //console.log(this.h4)
              //divElement.appendChild()  
            }
            else{
              this.App.acheck=true;
              localStorage.setItem("token",res.token)
              localStorage.setItem("username",res.username)
              localStorage.setItem("userObj",JSON.stringify(res.userObj))
              alert(res.message)
              this.router.navigateByUrl("/admin")
               
            }



           }
      }
    )
 /* if(checkuser)
  {
    this.checkloginuser(data.value) 
  }*/

  }

  checkloginuser(data)
  {
    //console.log("entered into the check userlogin")
    this.uS.checkUserLogin(data).subscribe(res=>{

      if(res.message!=="login successfull")
      {
        alert(res.message)
        if(this.first==0)
        {
        let divElement=document.querySelector(".parent")
        this.h4=document.createElement("h4")
        this.first=1;
        this.h4.textContent=res.message;
        this.h4.style.backgroundColor="#d8d9db";
        this.h4.style.color="#FF5733"
        divElement.appendChild(this.h4)
        //console.log("first",this.h4)
        //console.log(divElement.appendChild(this.h4))
        }
        else
        {
          this.h4.textContent=res.message;
          [this.h4.style.backgroundColor,this.h4.style.color]=[this.h4.style.color,this.h4.style.backgroundColor]
        }
        //console.log(this.h4)
        //divElement.appendChild()  
      }
      else{
        this.App.check=true;
        localStorage.setItem("token",res.token)
        localStorage.setItem("username",res.username)
        localStorage.setItem("userObj",JSON.stringify(res.userObj))
        this.App.userObj=res.userObj;
        this.App.username=res.username
        this.getusercartCount()
        alert(res.message)
        this.router.navigateByUrl("/home")
        
      }

    },
    err=>{
      console.log(err)
      alert("something went wrong in getting response ")
    }
    )
  }
   getusercartCount()
   {
    let username=localStorage.getItem("username")
    this.As.getCartObj(username).subscribe(
      res=>{
        if(res.message=="cart is empty")
             {
               this.App.count=0;
             }
        else{
            this.App.count=res.usercartObj['count'];
         }
      }
    )   
   }

}
