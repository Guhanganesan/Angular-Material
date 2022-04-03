import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:any, next:any){
    //step2 
    let auth_service = this.injector.get(AuthService);

    //step1
    let tokenizedReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${auth_service.getToken()}`
        }
    })
    return next.handle(tokenizedReq);
  }

}
