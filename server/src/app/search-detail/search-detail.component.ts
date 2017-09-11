import { Component, OnInit, Input } from '@angular/core';
import {SearchDetailService} from './search-detail.service';
@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers:[SearchDetailService]
})
export class SearchDetailComponent{
	@Input() weatherdata:any;
  constructor(private cityservice :SearchDetailService) { }
  ref:any;
  saveFav(weather:any, city: string){
  	this.cityservice.saveData(weather,city)
    .subscribe(ref=>{this.ref=ref
      if(this.ref===undefined){
        alert('Favourite Added');
      }
      else{
        alert("Already Added");
      }
    }); 
  }

}
