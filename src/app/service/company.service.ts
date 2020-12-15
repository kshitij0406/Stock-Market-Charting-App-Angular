import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../entity/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseURL ='http://localhost:8080/company';
  constructor(private httpClient: HttpClient) { }

  

  getCompanyList(): Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.baseURL + "/all"}`);
  }

  addCompany(company :Company): Observable<Object>{
    return this.httpClient.post(`${this.baseURL   + "/add"}`, company);
  }

  getCompanyById(id :number): Observable<Company>{
    return this.httpClient.get<Company>(`${this.baseURL}/${id}`);
  }

  updateCompany(id:number , company: Company) :Observable<Object>{
    return this.httpClient.put(`${this.baseURL   +"/update"}/${id}`,company);
  }

  deleteCompanyById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL + "/delete"}/${id}`);
  }
 
}
