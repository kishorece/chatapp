import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";


@Injectable()
export class AppService {
  private url="https://chatapi.edwisor.com"
  constructor(private http:HttpClient)
  {

  }
  public getUserInfoFromLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem('userInfo'));
  }
  public setUserInfoFromLocalStorage = (data)=>{
    localStorage.setItem("userInfo",JSON.stringify(data))
  }

  public signupFunction(data):Observable<any>
  {
    
    return this.http.post(`${this.url}/api/v1/users/signup`,data);

  }

  public signinFunction(data):Observable<any>
  {
  const par = new HttpParams()
  .set("email",data.email)
  .set("password",data.password);
  return this.http.post(`${this.url}/api/v1/users/login`,par)
  }

  public logout():Observable<any>
  {
    const par = new HttpParams()
    par.set("authToken",Cookie.get("authToken"))
    return this.http.post(`${this.url}/api/v1/users/logout`,par)

    
  }
  private handleError(err:HttpErrorResponse)
  {
    let errorMessage = '';
    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}


