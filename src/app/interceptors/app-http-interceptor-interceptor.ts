import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login-service';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

export const appHttpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const logservice =inject(LoginService);


  if(!req.url.includes("/auth/login")){
    let newrequest = req.clone({
      // headers:req.headers.set('Authorization','Bearer'+logservice.accessToken)
      headers: req.headers.set(
        'Authorization','Bearer ' + logservice.accessToken )
    });  return next(newrequest);

  }
    else{
    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          logservice.logout();
        }

        return throwError(() => error);
      })
    );

  }
};
