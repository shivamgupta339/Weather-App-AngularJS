import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
	ref:any;
	details:any={};

  constructor(private loginService: LoginService,private router:Router) {

  }


  login(flag:number){
    if(flag==1){
      this.router.navigateByUrl("/search");
    }
    else{
      alert("Invalid Credentails");
    }
  }

  signIn(){
    if(this.details.emailId === undefined || this.details.password === undefined){
      alert("Fields can't be empty");
    }
    else{
      this.loginService.signIn(this.details)
      .subscribe(ref=>{
        this.ref=ref
        this.login(this.loginService.vl);
      });
    }
  }
  ngOnInit() {
  }

}
