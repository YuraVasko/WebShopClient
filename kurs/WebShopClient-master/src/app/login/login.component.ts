import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service'
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
    this.userService.signOut();
  }

  loginClick() {
    if (this.email.valid && this.password.valid) {
      this.userService.signInUser(this.email.value, this.password.value)
        .subscribe((data) => {
          localStorage.setItem("currentUser", data.access_token);
          this.userService.loggedEmmit.emit(null);
          this.router.navigate(['/main/page'])
        },
          error => window.alert("Something goes wrong")
        );
    }
  }
}
