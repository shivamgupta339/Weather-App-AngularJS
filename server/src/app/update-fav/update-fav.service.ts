import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UpdateFavService {

	constructor(private http: Http) { }
	updateFav(favelist:any,real_feel:number,min_temp:number,max_temp:number,humidity:number) : Observable<any>{
		const url = "http://localhost:1337/updates/"+favelist.date+"/"+favelist.city+"/"+real_feel+"/"+min_temp+"/"+max_temp+"/"+humidity;
		return this.http
		.put(url,favelist)
		.map((res :Response) => <any[]>res.json());

	}
}
