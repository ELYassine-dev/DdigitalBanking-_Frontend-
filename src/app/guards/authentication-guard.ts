import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login-service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authservice=inject(LoginService);
  const router=inject (Router);

  if(authservice.isAuthenticated) {
    return true;
  }else {
    router.navigateByUrl('/login');
    return false;
  }};
