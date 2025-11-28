
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();
  let newReq: HttpRequest<any> = req;
  if (token) {
    newReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(newReq);
};
