import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/entity/company';
import { StockExchange } from 'src/app/entity/stock-exchange';
import { CompanyService } from 'src/app/service/company.service';
import { StockExchangeService } from 'src/app/service/stock-exchange.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {
  company:Company = new Company();
  stockExchangeDetails :StockExchange[] = [];

    constructor(private companyService :CompanyService,  
      private router: Router ,
      private route:ActivatedRoute,private stockExchangeService:StockExchangeService) { }
    id!: number;
  
    ngOnInit(): void {
      this.getAllExchange();
      this.id = this.route.snapshot.params['id'];
      this.companyService.getCompanyById(this.id).subscribe(data => {
        this.company = data;
      },error => {
        console.log("Error Here")
        console.log(error);
      });
    }
  
    getAllExchange(){
      this.stockExchangeService.getStockExchangeList().subscribe(data=>{
        this.stockExchangeDetails =data;
      });
    }
  
    goToCompanyAll(){
      this.router.navigate(['company-all']);
    }
  
    onSubmit(){
  
      this.companyService.updateCompany(this.id, this.company).subscribe(data =>{
        this.goToCompanyAll();
      });
  
  
    }

}
