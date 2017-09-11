import { Component, OnInit } from '@angular/core';
import {FavouritesDisplayService} from './favourites-display.service'
@Component({
  selector: 'app-favourites-display',
  templateUrl: './favourites-display.component.html',
  styleUrls: ['./favourites-display.component.css'],
  providers: [FavouritesDisplayService]
})
export class FavouritesDisplayComponent implements OnInit{

  constructor(private favouriteservice:FavouritesDisplayService) { }
  p: number = 1;
  city=[];
  delete = [];
  update:any;

  displayFavourites(){
    this.favouriteservice.getData()
    .subscribe(resCityData => this.city = resCityData);
  }

  delFav(favlist:any){
  	this.favouriteservice.removeData(favlist)
  	.subscribe(resCityData => {this.delete = resCityData;
      this.displayFavourites();
      return this.delete;
    });
  }
  updateFav(favlist:any){
    this.update = favlist;
  }
  ngOnInit(){
    this.displayFavourites();
  }
}
