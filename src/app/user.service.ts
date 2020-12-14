import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseURL ='http://localhost:8080/users';
  constructor(private httpClient: HttpClient) { }

 

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL + "/all"}`);
  }

  addUser(user :User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL   + "/add"}`, user);
  }

  getUserById(id :number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id:number , user: User) :Observable<Object>{
    return this.httpClient.put(`${this.baseURL   +"/update"}/${id}`,user);
  }

  deleteUserById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL + "/delete"}/${id}`);
  }
}
