import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountDetails } from '../model/Account.model';

@Injectable({
  providedIn: 'root',
})
export class Account {
  host:string="http://localhost:8082/bankaccounts";
  constructor(private http: HttpClient) {
  }

  getaccount(accountId:string,page:number,size:number):Observable<AccountDetails> {
    return this.http.get<AccountDetails>(`${this.host}/${accountId}/pageoperations?page=${page}&size=${size}`);
  }

  debit(accountid:string,amount:number,description:string) {
    return this.http.post(`${this.host}/debit`,
      {accountid:accountid,amount:amount,description:description} );
  }


  credit(accountid:string,amount:number,description:string) {
    return this.http.post(`${this.host}/credit`,
      {accountid:accountid,amount:amount,description:description} );
  }


  transfer(accountSource:string,accountDestination:string,amount:number,description:string) {
   let data={accountSource,accountDestination,amount,description};
    return this.http.post(`${this.host}/transfer`,data );
  }

}
