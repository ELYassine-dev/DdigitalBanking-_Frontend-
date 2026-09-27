import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcountCustomer } from '../services/acount-customer';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-customer-accounts',
  imports: [CommonModule],
  templateUrl:'./customer-accounts.html',
  styleUrl: './customer-accounts.css',
})


export class CustomerAccounts implements OnInit {

  customerid!: any;
accounts = signal<any[]>([]);
  constructor(
    private custAccService: AcountCustomer,private cd: ChangeDetectorRef,
    private routerAc: ActivatedRoute
  ) {}

  ngOnInit() {
    this.customerid = this.routerAc.snapshot.params['id'];
    this.handleCustomerAccounts();
  }

  handleCustomerAccounts() {
    this.custAccService.getCustomerAccount(this.customerid).subscribe({
      next: data => {
       this.accounts.set(data);
        // this.accounts = data;

      },
      error: error => {
        console.log('ERROR:', error);
      }
    });
  }
}




// import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AcountCustomer } from '../services/acount-customer';
// import { CommonModule } from '@angular/common';
//
// @Component({
//   selector: 'app-customer-accounts',
//   imports: [CommonModule],
//   templateUrl: './customer-accounts.html',
//   styleUrl: './customer-accounts.css',
// })
// export class CustomerAccounts implements OnInit {
//
//   customerid!: number;
//   accounts = signal<any[]>([]);
//   constructor(
//     private custAccService: AcountCustomer,
//     private routerAc: ActivatedRoute,
//     private cd: ChangeDetectorRef
//   ) {}
//
//   ngOnInit() {
//     this.customerid = this.routerAc.snapshot.params['id'];
//
//     console.log("ID:", this.customerid);
//
//     this.custAccService.getCustomerAccount(this.customerid).subscribe({
//       next: (data) => {
//         console.log("DATA:", data);
//
//         // this.accounts = data;
//         this.accounts.set(data);
//         console.log("AFTER ASSIGN:", this.accounts.length);
//       },
//       error: (error) => {
//         console.log(error);
//       }
//     });
//   }
//
//   getAccountsCount() {
//     console.log("TEMPLATE CHECK:", this.accounts.length);
//     return this.accounts.length;
//   }
// }
