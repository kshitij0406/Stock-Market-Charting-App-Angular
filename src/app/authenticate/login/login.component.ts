import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor() { }
  
  ngOnInit(): void {
  }

  onSubmit(){}

}
