import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/entity/stock';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {


  stocks: Stock[] = [];


  constructor(private stockService: StockService  , private router:Router) {
  }

  ngOnInit(): void {
    this.getAllStocks();
  }

  public getAllStocks() {
    this.stockService.getStocksList().subscribe(data => {

      this.stocks = data;
    },error =>{
      console.log(error);
      alert("Could not fetch data. Please Login. Click on Ok to continue ");

    });
  }
}
