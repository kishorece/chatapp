import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from './../../app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:any
  public password:any
  constructor(public appService: AppService,public router: Router){}
    ngOnInit() {}

public goto:any= () =>
    {
      this.router.navigate(['/sign'])
    }

    public signinFunction:any=()=>
    {
      let data = {
        email: this.email,
        password: this.password
      }
      this.appService.signinFunction(data).subscribe(
        (data)=>
        {
          if (data.status === 200) {
            console.log(data)
            Cookie.set("authtoken",data.data.authToken)
            Cookie.set("receiverId",data.data.userDetails.userId)
            Cookie.set("receiverName",data.data.userDetails.firstName + ' ' + data.data.userDetails.lastName)
            this.appService.setUserInfoFromLocalStorage(data.data.userDetails)
            this.router.navigate(['/chat']);
          } 
        },
        (err)=>
        {
          console.log("there is an error")
        }
      )
    }
  }
