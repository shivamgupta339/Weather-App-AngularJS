import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

	private url = "http://localhost:1337/users/register";

  constructor(private http:Http) { }

  addDetails(details:any){
  	return this.http
    .post(this.url,details)
    .map((res :Response) => <any[]>res.json()
      ,(error)=>{
        return error.json()
      });
  }
}
