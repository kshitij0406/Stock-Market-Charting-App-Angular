import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockExchange } from '../entity/stock-exchange';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  constructor(private httpClient : HttpClient) { }

  private baseURL ='http://localhost:8080/stockexchange';

  getStockExchangeList(): Observable<StockExchange[]>{
    return this.httpClient.get<StockExchange[]>(`${this.baseURL  + "/all"}`);
  }

  addStockExchange(stockExchange : StockExchange): Observable<Object> {
    return this.httpClient.post(`${this.baseURL  + "/add"}`,stockExchange);
}

getStockExchangeById(id :number): Observable<StockExchange>{
  return this.httpClient.get<StockExchange>(`${this.baseURL}/${id}`);
}

deletetockExchangeById(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL + "/delete"}/${id}`);
}

updateStockExchange(id:number , stockExchange: StockExchange) : Observable<Object>{
  return this.httpClient.put(`${this.baseURL   +"/update"}/${id}`,stockExchange);
}



}
