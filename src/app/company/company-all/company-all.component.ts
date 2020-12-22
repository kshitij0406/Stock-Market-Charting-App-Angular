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

  company: Company[] = [];
  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCompany();
  }


  addCompany() {
    this.router.navigate(['company-add']);
  }
  public getAllCompany() {
    this.companyService.getCompanyList().subscribe(data => {

      this.company = data;
    },error => {
      alert("Could not fetch data. Please Login. Click on OK to continue");

    });
  }



  updateCompany(id: number) {
    this.router.navigate(['company-update',id]);
  }
  deleteCompany(id: number) {
    this.companyService.deleteCompanyById(id).subscribe(data => {
      console.log(data);
      this.getAllCompany();
    }, error => {
      console.log(error);
      alert("Delete Failed. Click on OK to continue");
    });
  }



}
