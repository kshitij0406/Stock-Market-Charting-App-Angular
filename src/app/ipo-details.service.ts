import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPODetails } from './ipo-details';

@Injectable({
  providedIn: 'root'
})
export class IpoDetailsService {

  private baseURL ='http://localhost:8080/ipo';
  constructor(private httpClient: HttpClient) { }

 

  getIpoList(): Observable<IPODetails[]>{
    return this.httpClient.get<IPODetails[]>(`${this.baseURL + "/all"}`);
  }

  addIpo(ipo :IPODetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+ "/add"}`, ipo);
  }

  getIpoById(id :number): Observable<IPODetails>{
    return this.httpClient.get<IPODetails>(`${this.baseURL}/${id}`);
  }

  updateIpo(id:number , ipo: IPODetails) :Observable<Object>{
    return this.httpClient.put(`${this.baseURL   +"/update"}/${id}`,ipo);
  }

  deleteIpoById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL + "/delete"}/${id}`);
  }
}
