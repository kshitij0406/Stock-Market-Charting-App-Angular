import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/entity/stock-exchange';
import { StockExchangeService } from 'src/app/service/stock-exchange.service';
import { IPODetails } from '../../entity/ipo-details';
import { IpoDetailsService } from '../../service/ipo-details.service';

@Component({
  selector: 'app-ipo-add',
  templateUrl: './ipo-add.component.html',
  styleUrls: ['./ipo-add.component.css']
})
export class IpoAddComponent implements OnInit {

  ipo: IPODetails = new IPODetails();
  stockExchangeDetails :StockExchange[] = [];
  constructor(private ipoService: IpoDetailsService,
    private router:Router,
    private stockExchangeService:StockExchangeService){} 

  ngOnInit(): void {
    this.getAllExchange();
  }
  saveUser(){
    this.ipoService.addIpo(this.ipo).subscribe(data => {
      console.log(data);
      this.goToIpoAll();
    },
    error => {
      console.log(error);
      alert("Failed to Add Ipo");
    });
  }

  getAllExchange(){
    this.stockExchangeService.getStockExchangeList().subscribe(data=>{
      this.stockExchangeDetails =data;
    });
  }
  goToIpoAll(){
    this.router.navigate(['ipo-all']);
  }

  onSubmit(){
    console.log(this.ipo);
    this.saveUser();
  }
}
