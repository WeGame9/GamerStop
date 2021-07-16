import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  countries:any=['Afghanistan','Armenia','Azerbaijan','Bahrain','Bangladesh','Bhutan','Brunei','Cambodia','China','Cyprus','Georgia',
  'India','Indonesia','Iran','Iraq','Israel','Japan','Jordan','Kazakhstan','Kuwait','Kyrgyzstan','Laos','Lebanon','Malaysia','Maldives',
  'Mongolia','Myanmar','Nepal','North Korea','Oman','Pakistan','Palestine','Philippines','Qatar','Russia','Saudi Arabia','Singapore',
  'South Korea','Sri Lanka','Syria','Taiwan','Tajikistan','Thailand','Timor-Leste','Turkey','Turkmenistan','United Arab Emirates',
  'Uzbekistan','Vietnam','Yemen']

  constructor(private uS:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  file:File;
  selectFile(event)
  {
    this.file=event.target.files[0];
    // console.log(this.file);
  }

first=0
h4;
onRegister(userObj)
{
  let userformData=new FormData();
    userformData.append("photo",this.file,this.file.name)
    userformData.append("userObj",JSON.stringify(userObj.value))
    //console.log(userObj.value," ",formData);
  //console.log(userformData)
  this.uS.addNewuser(userformData).subscribe(
    res=>{
        if(res.message=="registration successfull")
        {
          alert(res.message)
          this.router.navigateByUrl("/login")
        }
        else
        {
          userObj.reset();
          //alert(res.message)
          if(this.first==0)
          {
          let divElement=document.querySelector(".parent")
          this.h4=document.createElement("h4")
          this.first=1;
          this.h4.textContent=res.message;
          this.h4.style.backgroundColor="white"
          this.h4.style.color="#FF5733 "
          divElement.appendChild(this.h4)
          //console.log("first",this.h4)
          //console.log(divElement.appendChild(this.h4))
          }
          else
          {
            this.h4.textContent=res.message;
            [this.h4.style.backgroundColor,this.h4.style.color]=[this.h4.style.color,this.h4.style.backgroundColor]
          }
         
        }

    },err=>{
      alert("error in adding user data")
    })
}

}
