import { Component, Output, EventEmitter } from '@angular/core'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchService} from './search.service';

@Component({
  selector: 'weather-search',
  templateUrl: './search.component.html',
  outputs : [`childWeather`],
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  @Output() childWeather = new EventEmitter();
  city=[];
  name='';
  constructor(private cityservice: SearchService){}
  searchCity(name){ 
    if(this.name === "")
    {
      alert("City Name cannot be empty");
    }
    else{
      this.cityservice.getData(this.name)
      .subscribe(resCityData => this.childWeather.emit(resCityData));
    }
  }
}

