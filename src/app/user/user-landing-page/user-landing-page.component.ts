import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  constructor(private router: Router, private authenticateService: AuthenticateService) { }


  username: string = this.authenticateService.getUserName();

  ngOnInit(): void {
  }

  companyAll() {
    this.router.navigate(['company-all-user']);
  }
  
  homePage(){
    this.router.navigate(['user-landing-page']);
  }
  logout() {
    this.authenticateService.logout();
    this.router.navigate(['']);
  }
  ipoAll() {
    this.router.navigate(['ipo-all-user']);
  }

  compareCompanies() { }

  compareSectors() { }
}
