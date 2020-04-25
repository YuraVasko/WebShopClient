import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/models/userRegister';
import {UserService} from 'src/app/services/user/user.service'
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService,
    private router: Router) { }

  newUser = new UserRegister();
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confimedPassword = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  
  ngOnInit() {
  }

  registerClick() {
    this.newUser.lastName = this.lastName.value;
    this.newUser.firstName = this.firstName.value;
    this.newUser.login = this.email.value;
    this.newUser.password = this.password.value;
    this.newUser.confirmedPassword = this.confimedPassword.value;
    this.userService.registerUser(this.newUser).subscribe((data)=>{this.router.navigate(['/login'])},(error)=>{"Fail"});
  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
