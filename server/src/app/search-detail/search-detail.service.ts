import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchDetailService {
	constructor(private http: Http){}

	saveData(weather:any, city: string): Observable<any>{
		const url = "http://localhost:1337/users";
		var mergeData:any={};
		mergeData.img = weather.day.condition.icon;
		mergeData.date = weather.date;
		mergeData.city =  city;
		mergeData.min_temp = weather.day.mintemp_c;
		mergeData.max_temp = weather.day.maxtemp_c;
		mergeData.humidity = weather.day.avghumidity;
		mergeData.real_feel = weather.day.avgtemp_c;
		mergeData.cloud =weather.day.condition.text;
		return this.http
		.post(url,mergeData)
		.map((res :Response) => {<any[]>res.json()}
			,(error)=>{
				return error.json()
			}
			);
	}
}
