import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AcountCustomer {

  constructor(private http: HttpClient) {
  }

  getCustomerAccount(id:number){
    return this.http.get<any>("http://localhost:8082/bankaccounts/customer/"+id);
  }

}
