import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../entity/user'
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent implements OnInit {
  users: User[] = [];


  constructor(private userService: UserService  , private router:Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getUsersList().subscribe(data => {

      this.users = data;
    });
  }


  updateUser(id: number){
    this.router.navigate(['user-update',id]);

  }

  deleteUser(id:number){
    this.userService.deleteUserById(id).subscribe(data =>{
      console.log(data);
      this.getUsers();
    },error=>{
      console.log(error);
    });
  }

}
