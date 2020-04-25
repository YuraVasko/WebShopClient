import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-about-account',
  templateUrl: './ask-about-account.component.html',
  styleUrls: ['./ask-about-account.component.css']
})
export class AskAboutAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  registerButtonClick(){
    this.router.navigate(['/register']);
  }
}
