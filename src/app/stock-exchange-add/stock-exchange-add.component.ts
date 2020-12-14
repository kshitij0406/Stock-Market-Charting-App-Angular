import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from '../stock-exchange';
import { StockExchangeService } from '../stock-exchange.service';

@Component({
  selector: 'app-stock-exchange-add',
  templateUrl: './stock-exchange-add.component.html',
  styleUrls: ['./stock-exchange-add.component.css']
})
export class StockExchangeAddComponent implements OnInit {

  stockExchange: StockExchange = new StockExchange();

  constructor(private stockExchangeService : StockExchangeService , private router : Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.stockExchange);
    this.saveStockExchange();
  }
  saveStockExchange() {
    this.stockExchangeService.addStockExchange(this.stockExchange).subscribe(data=>{
      console.log(data);
      this.goToStockExchangeAll();
    },error=>{
      console.log(error);
    })
  }

  goToStockExchangeAll(){
    this.router.navigate(['stock-exchange-all']);

  }
}