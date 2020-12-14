import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
user:User = new User();

  constructor(private userService :UserService,  
    private router: Router ,
    private route:ActivatedRoute) { }
  id!: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    },error => {
      console.log("Error Here")
      console.log(error);
    });
  }

  goToUserAll(){
    this.router.navigate(['user-all']);
  }

  onSubmit(){

    this.userService.updateUser(this.id, this.user).subscribe(data =>{
      this.goToUserAll();
    });


  }
}
