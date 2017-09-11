import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  weather:any={};
  weatherData(resCityData){
  	this.weather = resCityData;
  }
  ngOnInit() {
  }
}
