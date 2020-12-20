import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(private router : Router, private authenticateService : AuthenticateService) { }

  username:string = this.authenticateService.getUserName();
  ngOnInit(): void {
  }

  importData(){

  }

  manageCompany(){
    this.router.navigate(['company-all']);
  }

  manageExchange(){
    this.router.navigate(['stock-exchange-all']);
  } 

  manageIpo(){
    this.router.navigate(['ipo-all']);
  }

}
