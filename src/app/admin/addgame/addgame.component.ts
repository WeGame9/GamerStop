import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {

  constructor(private As:AdminService) { }

  ngOnInit(): void {
  }
  file:File;
  selectFile(event)
  {
    this.file=event.target.files[0];
    // console.log(this.file);
  }
  onAddgame(ref)
  {
     //console.log(ref.value)
     this.As.addgameToCollection(ref.value).subscribe(
       res=>{
           alert(res.message)
       }
     )
       
  }

}
