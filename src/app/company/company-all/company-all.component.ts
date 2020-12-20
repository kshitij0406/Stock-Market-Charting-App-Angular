import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../entity/company';
import { CompanyAddComponent } from '../company-add/company-add.component';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-company-all',
  templateUrl: './company-all.component.html',
  styleUrls: ['./company-all.component.css']
})
export class CompanyAllComponent implements OnInit {

  company : Company[] = [];
  constructor(private companyService: CompanyService  , private router:Router) { }

  ngOnInit(): void {
    this.getAllCompany();
  }

  homePage(){
    this.router.navigate(['admin-landing-page']);
  }
  
  public getAllCompany(){
    this.companyService.getCompanyList().subscribe(data => {

      this.company = data;
    });
  }
  
  addCompany(){
    this.router.navigate(['company-add']);
  }

  updateCompany(id:number){

  }
  deleteCompany(id:number){
    this.companyService.deleteCompanyById(id).subscribe(data =>{
      console.log(data);
      this.getAllCompany();
    },error=>{
      console.log(error);
    });
  }



}
