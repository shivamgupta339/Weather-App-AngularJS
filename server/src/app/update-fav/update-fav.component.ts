import { Component, OnInit , Input} from '@angular/core';
import {UpdateFavService} from './update-fav.service'
@Component({
  selector: 'app-update-fav',
  templateUrl: './update-fav.component.html',
  styleUrls: ['./update-fav.component.css'],
  providers: [UpdateFavService]
})
export class UpdateFavComponent implements OnInit {
	@Input() favlist:any;
  real_feel:number;
  min_temp:number;
  max_temp:number;
  humidity:number;
  constructor(private updatefavservice : UpdateFavService) { }
  ref:any;
  ngOnInit() {

  }

  updateFav(favlist:any){
  	this.updatefavservice.updateFav(favlist,this.real_feel,this.min_temp,this.max_temp,this.humidity)
    .subscribe(ref=>this.ref=ref);
    alert("Data Updated Successfully");
  }

}
