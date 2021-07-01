import { Component, OnInit } from '@angular/core';
import { FreeService } from '../free.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fS:FreeService) { }

  ngOnInit(): void {
  }
  data
  onadd(value)
  {
    
    console.log(value)
    this.fS.getGameById(value.id).subscribe(res=>{
      console.log("hi",res);
      this.data=res;
      console.log("hello",res);
    })
     this.onadd1();
  }

  onadd1()
  {
    this.fS.addRowItems(this.data).subscribe(
      res=>{
           console.log("in component .ts",this.data)
          if(res.message=="succesfully inserted the row item")
          {
            alert(res.message)
            console.log("element added")
          }
      }
    )
  }

  onaddRA(value)
  {
    console.log(value)
    this.fS.getGameById(value.id).subscribe(res=>{
      console.log("hi",res);
      this.data=res;
      console.log("hello",res);
    })
     this.onadd1RA();
  }
  onadd1RA()
  {

  }

}
