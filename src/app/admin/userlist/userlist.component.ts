import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private As:AdminService) { }

  users=[]
  ngOnInit(): void {
    
    this.As.getuserList().subscribe(
      res=>{
        if(res.message=="no user found")
        {
            alert(res.message)
        }
        else
        {
            this.users=res.users
        }
      },
      err=>{
        console.log("error in getting the users data")
      }
    )

  }

  onDeleteuser(i)
  {
   
    //console.log(this.users[i])
    this.As.deleteUserdetails(this.users[i].username).subscribe(
      res=>{
        
        if(res.message=="user not existed")
        {
          alert(res.message)
        }
        else{
           alert(res.message)
           this.users.splice(i,1)
        }

      },
      err=>{
        console.log("error in deleting the users data")
      }
    )
    
  }

}
