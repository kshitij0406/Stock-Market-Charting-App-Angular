import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/entity/login-details';
import { User } from 'src/app/entity/user';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type!:string;
  loginDetails:LoginDetails = new LoginDetails;
  constructor(private authenticateService: AuthenticateService,private router:Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.authenticateService.login(this.loginDetails).subscribe(data =>{
      console.log("Login Successful");
    },error => {
      console.log(error);
    });

  }

  signup(){
    this.router.navigate(['/signup']);
  }

}
