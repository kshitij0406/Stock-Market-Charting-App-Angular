import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../entity/user';
import { UserService } from '../../service/user.service';

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
    },error =>{
      console.log(error);
      alert("Update Failed. Click on Ok to continue ");

    });
  }

  goToUserAll(){
    this.router.navigate(['user-all']);
  }

  onSubmit(){

    this.userService.updateUser(this.id, this.user).subscribe(data =>{
      this.goToUserAll();
    },error =>{
      console.log(error);
      alert("Update Failed. Click on Ok to continue ");

    });


  }
}
