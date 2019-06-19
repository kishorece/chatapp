import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //public firstName:any;
  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;
  
  constructor(public appService: AppService,public router: Router)
  {

  }
  ngOnInit() {
  }
public goToSignIn:any=()=>{
  this.router.navigate(["/"])
}
public signupFunction: any = () => {

let data:any = {
  firstName: this.firstName,
  lastName: this.lastName,
  mobile: this.mobile,
  email: this.email,
  password: this.password,
  apiKey: this.apiKey,
}
console.log(data.apiKey)

this.appService.signupFunction(data).subscribe(
  (data)=>
  {
    
      console.log(data)

      if (data.status === 200)
      {
        console.log(data)

        setTimeout(() => {

          this.goToSignIn();

        }, 2000); 
        console.log("This request made")
      }
      
  },
  (err)=>
  {
console.log("some error occured");
  }
)
}
  }
