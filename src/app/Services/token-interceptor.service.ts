import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenReq = req.clone(
      {
        setHeaders:
        {
          Authorization: 'Bearer xx.yy.zz'
        }
      }
    )
    return next.handle(tokenReq);
  }
}