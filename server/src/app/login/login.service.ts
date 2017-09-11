import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

	vl:any;

  private url = "http://localhost:1337/signIn";
  constructor(private http: Http) { }

  signIn(details:any){
  	return this.http.post(this.url,details)
  	.map(res => {
  		if(res.json()[0]==undefined){
  			this.vl= 0;
      }
      else{
        this.vl=1;
      }
    },(error)=>{
      return error.json()
    });
  }
}
