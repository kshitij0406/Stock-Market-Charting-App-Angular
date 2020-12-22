import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IPODetails } from 'src/app/entity/ipo-details';
import { StockExchange } from 'src/app/entity/stock-exchange';
import { IpoDetailsService } from 'src/app/service/ipo-details.service';
import { StockExchangeService } from 'src/app/service/stock-exchange.service';

@Component({
  selector: 'app-ipo-update',
  templateUrl: './ipo-update.component.html',
  styleUrls: ['./ipo-update.component.css']
})
export class IpoUpdateComponent implements OnInit {
  ipo: IPODetails = new IPODetails();
  stockExchangeDetails: StockExchange[] = [];

  constructor(private ipoService: IpoDetailsService,
    private router: Router,
    private route: ActivatedRoute,
    private stockExchangeService: StockExchangeService) { }
  id!: number;

  ngOnInit(): void {
    this.getAllExchange();
    this.id = this.route.snapshot.params['id'];
    this.ipoService.getIpoById(this.id).subscribe(data => {
      this.ipo = data;
    }, error =>{
      console.log(error);
      alert("Update Failed. Click on Ok to continue ");

    });
  }
  getAllExchange() {
    this.stockExchangeService.getStockExchangeList().subscribe(data => {
      this.stockExchangeDetails = data;
    });
  }
  goToUserAll() {
    this.router.navigate(['ipo-all']);
  }

  onSubmit() {

    this.ipoService.updateIpo(this.id, this.ipo).subscribe(data => {
      this.goToUserAll();
    },error =>{
      console.log(error);
      alert("Update Failed. Click on Ok to continue ");

    });


  }

}
