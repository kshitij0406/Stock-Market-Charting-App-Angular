import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../entity/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL ='http://localhost:8080/stockprice';
  constructor(private httpClient: HttpClient) { }

 

  getStocksList(): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(`${this.baseURL + "/all"}`);
  }
}
