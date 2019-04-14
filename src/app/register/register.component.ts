import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/models/userRegister';
import {UserService} from 'src/app/services/user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService,
    private router: Router) { }

  newUser = new UserRegister();

  ngOnInit() {
  }

  registerClick() {
    this.userService.registerUser(this.newUser).subscribe((data)=>{this.router.navigate(['/login'])},(error)=>{"Fail"});
  }
}
