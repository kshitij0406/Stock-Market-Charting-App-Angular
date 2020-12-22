import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AuthenticateService } from 'src/app/service/authenticate.service';
import { User } from '../../entity/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User = new User();
  constructor(private authenticateService: AuthenticateService,private router:Router){} 

  ngOnInit(): void {
  }
  saveUser(){
    this.authenticateService.signup(this.user).subscribe(data => {
      console.log(data);
      this.goToUserAll();
      
    },
    error => console.log(error));
  }

  goToUserAll(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
