import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { }
  user;
  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem("userObj"))
  }

}
