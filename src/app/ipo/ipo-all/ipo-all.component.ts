import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPODetails } from '../../entity/ipo-details';
import { IpoDetailsService } from '../../service/ipo-details.service';

@Component({
  selector: 'app-ipo-all',
  templateUrl: './ipo-all.component.html',
  styleUrls: ['./ipo-all.component.css']
})
export class IpoAllComponent implements OnInit {

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
  
  addIpo(){
    this.router.navigate(['ipo-add']);
  }

  updateIpo(id:number){
  
  }
  deleteIpo(id:number){
    this.ipoService.deleteIpoById(id).subscribe(data =>{
      console.log(data);
      this.getAllIpo();
    },error=>{
      console.log(error);
    });
  }

}
