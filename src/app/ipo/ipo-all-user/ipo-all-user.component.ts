import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPODetails } from 'src/app/entity/ipo-details';
import { IpoDetailsService } from 'src/app/service/ipo-details.service';

@Component({
  selector: 'app-ipo-all-user',
  templateUrl: './ipo-all-user.component.html',
  styleUrls: ['./ipo-all-user.component.css']
})


export class IpoAllUserComponent implements OnInit {

  ipo: IPODetails[] = [];
  constructor(private ipoService: IpoDetailsService  , private router:Router) { }

  ngOnInit(): void {
    this.getAllIpo();
  }

  public getAllIpo(){
    this.ipoService.getIpoList().subscribe(data => {

      this.ipo = data;
    });
  }
  
  homePage(){
    this.router.navigate(['user-landing-page']);
  }

}
