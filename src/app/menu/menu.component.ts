import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService,) { }

  ngOnInit() {
    this.userService.loggedEmmit.subscribe(() => {
      this.setUpUserMenu();
    });
  }

  setUpUserMenu() {
    this.userRole = this.userService.getUserRoleFromToken();
    this.isAuthorize = this.userRole != undefined
  }
  
  userRole: String;
  isAuthorize: Boolean;
}
