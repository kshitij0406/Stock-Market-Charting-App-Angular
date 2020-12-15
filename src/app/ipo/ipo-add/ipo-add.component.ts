import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPODetails } from '../../entity/ipo-details';
import { IpoDetailsService } from '../../service/ipo-details.service';

@Component({
  selector: 'app-ipo-add',
  templateUrl: './ipo-add.component.html',
  styleUrls: ['./ipo-add.component.css']
})
export class IpoAddComponent implements OnInit {

  ipo: IPODetails = new IPODetails();
  constructor(private ipoService: IpoDetailsService,private router:Router){} 

  ngOnInit(): void {
  }
  saveUser(){
    this.ipoService.addIpo(this.ipo).subscribe(data => {
      console.log(data);
      this.goToIpoAll();
    },
    error => console.log(error));
  }

  goToIpoAll(){
    this.router.navigate(['ipo-all']);
  }

  onSubmit(){
    console.log(this.ipo);
    this.saveUser();
  }
}
