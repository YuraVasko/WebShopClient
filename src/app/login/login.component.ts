import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit() {
    this.userService.signOut();
  }

  signInClick() {
    this.userService.signInUser(this.email, this.password)
      .subscribe((data) => {
        localStorage.setItem("currentUser", data.access_token);
        this.userService.loggedEmmit.emit(null);
        this.router.navigate(['catalog'])
      },
        error => window.alert("Something goes wrong")
      );
  }

  email: String;
  password: String;
}
