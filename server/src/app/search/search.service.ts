import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SearchService{
	private url: string ="http://api.apixu.com/v1/forecast.json?key=ac4a996c7d384a84ae8123707170609&q=";
	constructor(private http: Http){}
	getData(name:string){
		return this.http.get(this.url+`${name}`+'&days=10')
		.map((response:Response)=> 
			<any[]> response.json()
			,(error)=>{
				return error.json()
			});
	}
}

