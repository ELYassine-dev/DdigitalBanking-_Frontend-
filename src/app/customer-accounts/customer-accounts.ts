import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Customer } from '../services/customer';
import { JsonPipe } from '@angular/common';
import { CustomerImp } from '../model/Customers.model';

@Component({
  selector: 'app-customer-accounts',
  imports: [],
  templateUrl:'./customer-accounts.html',
  styleUrl: './customer-accounts.css',
})
export class CustomerAccounts implements OnInit {
  customerid!: string;
  // customer!: CustomerImp;

  constructor(
    private routerAc: ActivatedRoute,
    private router: Router, ) {
    // this.customer = history.state.customer;

  }
  ngOnInit() {
    this.customerid = this.routerAc.snapshot.params['id'];
  }

}
