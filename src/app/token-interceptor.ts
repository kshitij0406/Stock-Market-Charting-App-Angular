import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, switchMap, take, filter } from 'rxjs/operators';
import { AuthenticateService } from './service/authenticate.service';
import { LoginResponse } from './entity/login-response';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(public authService: AuthenticateService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

           if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
                return next.handle(req);
            }
            const jwtToken = this.authService.getJwtToken();
    
            if (jwtToken) {
                return next.handle(this.addToken(req, jwtToken)).pipe(catchError(error => {
                    if (error instanceof HttpErrorResponse
                        && error.status === 403) {
                            console.log("Error Here");
                        return this.handleAuthErrors(req, next);
                    } else {
                        return throwError(error);
                    }
                }));
            }
            return next.handle(req);
        

      /*  if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
        }
        console.log('Inside Interceptor');
        const jwtToken = this.authService.getJwtToken();
        if (jwtToken) {
            this.addToken(req, jwtToken);
            console.log("jwtToken is not null");
        }

        return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse
                && error.status === 403) {
                    console.log("Error Here ");
                return this.handleAuthErrors(req, next);
            } else {
                return throwError(error);
            }
        }));

*/
    }

    private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap((refreshTokenResponse: LoginResponse) => {
                    this.isTokenRefreshing = false;
                    this.refreshTokenSubject
                        .next(refreshTokenResponse.authenticationToken);
                    return next.handle(this.addToken(req,
                        refreshTokenResponse.authenticationToken));
                })
            )
        } else {
            return this.refreshTokenSubject.pipe(
                filter(result => result !== null),
                take(1),
                switchMap((res) => {
                    return next.handle(this.addToken(req,
                        this.authService.getJwtToken()))
                })
            );
        }
    }

    addToken(req: HttpRequest<any>, jwtToken: any) {
        return req.clone({
            headers: req.headers.set('Authorization',
                'Bearer ' + jwtToken)
        });
    }

}