import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from '../../entity/stock-exchange';
import { StockExchangeService } from '../../service/stock-exchange.service';

@Component({
  selector: 'app-stock-exchange-all',
  templateUrl: './stock-exchange-all.component.html',
  styleUrls: ['./stock-exchange-all.component.css']
})
export class StockExchangeAllComponent implements OnInit {

  constructor(private stockExchangeService : StockExchangeService , private router : Router) { }
  
  stockExchanges : StockExchange[] = [];

  ngOnInit(): void {
    this.getAllStockExchange();
  }
  addExchange(){
    this.router.navigate(['stock-exchange-add']);
  }
  homePage(){
    this.router.navigate(['admin-landing-page']);
  }

  getAllStockExchange(){
    this.stockExchangeService.getStockExchangeList().subscribe(data =>{
      this.stockExchanges = data;
    },error=>{
      console.log(error);
    })
  }

  updateStockExchange(id:number){
    this.router.navigate(['stock-exchange-update',id]);
  }


  deleteStockExchange(id:number){
    this.stockExchangeService.deletetockExchangeById(id).subscribe(data =>{
      console.log(data);
      this.getAllStockExchange();
    },error =>{
      console.log(error);
    });
  }

}

