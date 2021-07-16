import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Hs:HomeService,private App:AppComponent) { }
  specialOffers;
  recentlyAdded;
  featuredGames;
  recomendGames;

  ngOnInit(): void {
    this.App.a='null';
    this.Hs.getSpecialOffers().subscribe(data=>{
      this.specialOffers=data.specialOffers;
     // console.log("special offer data",this.specialOffers)
    },
    err=>{
      alert("error in getting special offers data")
    }
    )

    this.Hs.getRecentlyAdded().subscribe(data=>{
      this.recentlyAdded=data.recentlyAdded;
      //console.log("recently added games data",this.recentlyAdded)
    },
    err=>{
      alert("error in getting recently data")
    }
    )

    this.Hs.getfeaturedGames().subscribe(data=>{
      this.featuredGames=data.featuredGames;
      //console.log("featured games data",this.featuredGames)
    },
    err=>{
      alert("error in getting featured games data")
    }
    )

    this.Hs.getrecommendedGames().subscribe(data=>{
      this.recomendGames=data.recomendGames;
      //console.log("recommended games data",this.recomendGames)
    },
    err=>{
      alert("error in getting recommended games data")
    }
    )

  }


}
