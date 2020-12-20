import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/entity/stock-exchange';
import { StockExchangeService } from 'src/app/service/stock-exchange.service';
import { Company } from '../../entity/company';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  company:Company = new Company();
  stockExchangeDetails :StockExchange[] = [];
  
  constructor(private companyService: CompanyService,private router:Router,private stockExchangeService:StockExchangeService){} 

  ngOnInit(): void {
    this.getAllExchange();
  }
  saveUser(){
    this.companyService.addCompany(this.company).subscribe(data => {
      console.log(data);
      this.goToCompanyAll();
    },
    error => console.log(error));
  }



  getAllExchange(){
    this.stockExchangeService.getStockExchangeList().subscribe(data=>{
      this.stockExchangeDetails =data;
    });



  }

  

  goToCompanyAll(){
    this.router.navigate(['/company-all']);
  }

  onSubmit(){
    console.log(this.company);
    this.saveUser();
  }

}
