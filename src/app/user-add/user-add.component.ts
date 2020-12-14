import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user : User = new User();
  constructor(private userService: UserService,private router:Router){} 

  ngOnInit(): void {
  }
  saveUser(){
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUserAll();
    },
    error => console.log(error));
  }

  goToUserAll(){
    this.router.navigate(['/user-all']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
