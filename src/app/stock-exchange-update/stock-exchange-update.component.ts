import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchange } from '../stock-exchange';
import { StockExchangeService } from '../stock-exchange.service';

@Component({
  selector: 'app-stock-exchange-update',
  templateUrl: './stock-exchange-update.component.html',
  styleUrls: ['./stock-exchange-update.component.css']
})
export class StockExchangeUpdateComponent implements OnInit {

  stockExchange : StockExchange = new StockExchange();

  constructor(private stockExchangeService: StockExchangeService,
    private router  :Router,
    private route :ActivatedRoute) { }

    id!:number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.stockExchangeService.getStockExchangeById(this.id).subscribe(data =>{
      this.stockExchange = data;
      console.log(data);
    },error=>{
      console.log(error);
    });
  }

  
  onSubmit(){
    this.stockExchangeService.updateStockExchange(this.id,this.stockExchange).subscribe(data=>{
      console.log(data);
      this.goToStockExchangeAll();
    },error =>{
      console.log(error);
    });  
  }

  
  goToStockExchangeAll(){
    this.router.navigate(['stock-exchange-all']);

  }
}
