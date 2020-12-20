import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from '../entity/login-details';
import { LoginResponse } from '../entity/login-response';
import { User } from '../entity/user';
import { LocalStorageService } from 'ngx-webstorage';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  private baseURL ='http://localhost:8080/auth';

  signup(user :User): Observable<any>{
    return this.httpClient.post(`${this.baseURL   + "/signup"}`, user,{responseType: 'text'});
  }

  login(loginDetails:LoginDetails): Observable<boolean>{
    return this.httpClient.post<LoginResponse>(`${this.baseURL   + "/login"}`, loginDetails).
    pipe(map(data => {
      this.localStorage.store('authenticationToken',data.authenticationToken);
      this.localStorage.store('username',data.username);
      this.localStorage.store('refreshToken',data.refreshToken);
      this.localStorage.store('expiesAt',data.expiesAt);
      return true;

    }));

}
}
