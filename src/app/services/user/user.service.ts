import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {environment} from 'src/environments/environment'

import { UserRegister } from 'src/app/models/userRegister';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signInUser(email: String, password: String) : Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'password');
    urlSearchParams.set('username', email.toString());
    urlSearchParams.set('password', password.toString());

    let body = urlSearchParams.toString();

    return this.http.post(environment.serverDomain + 'oauth2/token', body, { headers: headers });    
  }

  registerUser(newUser : UserRegister) {  
    let body = newUser;

    return this.http.post(environment.serverDomain + 'user/register', body);
  }

  signOut() {
    localStorage.currentUser = null;
    this.loggedEmmit.emit(null);
  }

  getUserNameFromToken() {
    let jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(localStorage.getItem("currentUser")).id;
  }

  getUserRoleFromToken() {
    try
    {
      let jwtHelper = new JwtHelperService();
      return jwtHelper.decodeToken(localStorage.getItem("currentUser")).role;
    }
    catch (Exception)
    {
      return undefined;
    }
  }

  @Output() loggedEmmit: EventEmitter<any> = new EventEmitter();
}
