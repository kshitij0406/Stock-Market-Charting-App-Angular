import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/entity/login-details';
import { User } from 'src/app/entity/user';
import { AuthenticateService } from 'src/app/service/authenticate.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginDetails: LoginDetails = new LoginDetails;
  user: User = new User();
  constructor(private authenticateService: AuthenticateService, private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authenticateService.login(this.loginDetails).subscribe(data => {
      console.log("Login Successful");

      this.userService.getUserByUsername(this.loginDetails.username).subscribe(data =>{
        this.user = data;
        if(this.user.type == 'user'){
          this.userLandingPage();
        }
        else{
          this.adminLandingPage();
        }
      })
      
    }, error => {
      console.log(error);
    });

  }

  signup() {
    this.router.navigate(['/signup']);
  }
  userLandingPage() {
    this.router.navigate(['/user-landing-page']);
  }
  adminLandingPage(){
    this.router.navigate(['/admin-landing-page']);
  }

}
