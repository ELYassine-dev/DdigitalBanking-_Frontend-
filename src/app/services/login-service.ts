import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http:HttpClient, private router:Router) { }
isAuthenticated: boolean =false;
  roles :any;
  username:any;
  accessToken!:any;


  public login(username:string, password:string) {
    let params= new HttpParams()
      .set('username', username).set('password', password);
    let options={
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    }
    return this.http.post('http://localhost:8082/auth/login',params,options);
  }


  loadProfile(result: any) {
    this.isAuthenticated=true;
    this.accessToken = result['access-token'];
    let decodeJwt = jwtDecode<JwtPayload>(this.accessToken);

    this.username=decodeJwt.sub;
    this.roles=decodeJwt.scope;
    // window.localStorage.setItem('jwt-token',this.accessToken);




  }

  logout() {
    this.isAuthenticated=false;
    this.accessToken=undefined;
    this.username=undefined;
    this.roles=undefined;
    // window.localStorage.removeItem('access-token');
    this.router.navigate(['/login']);

  }

  loadjwttokenfromlocalstorage() {
    let token:any = window.localStorage.getItem('jwt-token');
    if(token) {
      this.loadProfile({"access-token":token });
      this.router.navigate(['/admin/customers']);
    }
  }
}
