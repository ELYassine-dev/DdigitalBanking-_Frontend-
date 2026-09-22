import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerImp } from '../model/Customers.model';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  host:String="http://localhost:8082/customers";

  constructor(private http: HttpClient) {}


  public getCustomers() {
    return this.http.get<CustomerImp[]>(`${this.host}`);
  }


  searchCustomer(kw: any) {
    return this.http.get<CustomerImp[]>(`${this.host}/search?searchkw=${kw}`);
  }

  saveCustomer(customer: CustomerImp) {
    return this.http.post<CustomerImp>(`${this.host}`,customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.host}/delete/`+id);
  }
}
