import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/entity/company';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company-all-user',
  templateUrl: './company-all-user.component.html',
  styleUrls: ['./company-all-user.component.css']
})
export class CompanyAllUserComponent implements OnInit {

  company : Company[] = [];
  constructor(private companyService: CompanyService  , private router:Router) { }

  ngOnInit(): void {
    this.getAllCompany();
  }

  
  public getAllCompany(){
    this.companyService.getCompanyList().subscribe(data => {

      this.company = data;
    },error =>{
      alert("Could not fetch Data. Please Login. Click on Ok to continue ");

    });
  }


}
