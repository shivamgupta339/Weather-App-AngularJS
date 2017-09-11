import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class FavouritesDisplayService {

	
	private expressurl = "http://localhost:1337";
	constructor(private http: Http) {}

	getData(){
		return this.http.get(this.expressurl)
		.map((response:Response)=> {console.log();
			return response.json()
		});
	}

	removeData(favlist:any){
		return this.http.delete(this.expressurl+'/deletes/'+favlist.date+'/'+favlist.city)
		.map((res :Response) =>{ console.log(res.json());
			if(res.json().n==1){
				alert('Deleted Succesfully');
			}
			return <any[]>res.json()
		},(error)=>{
			return error.json()
		});
	}
	updateData(favlist:any){
		return 1;
	}
}
