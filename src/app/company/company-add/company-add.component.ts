import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../entity/company';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  company:Company = new Company();
  constructor(private companyService: CompanyService,private router:Router){} 

  ngOnInit(): void {
  }
  saveUser(){
    this.companyService.addCompany(this.company).subscribe(data => {
      console.log(data);
      this.goToCompanyAll();
    },
    error => console.log(error));
  }

  goToCompanyAll(){
    this.router.navigate(['/company-all']);
  }

  onSubmit(){
    console.log(this.company);
    this.saveUser();
  }

}
