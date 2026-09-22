import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { CustomerImp } from '../model/Customers.model';
import { Customer } from '../services/customer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [ReactiveFormsModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  customers: CustomerImp[] = [];
  errorMessage: any;
  formgroup!: FormGroup;

  constructor(
    private customerService: Customer,
    private fb: FormBuilder,  private cd: ChangeDetectorRef,
    private router:Router

  ) {}

  ngOnInit(): void {
    this.formgroup = this.fb.group({
      searchkw: [''],
    });
    this.getCustomers();

    // this.handleSearch();
  }

  // getCustomers() {
  //   this.customerService.getCustomers().subscribe({
  //     next: (data: any) => {
  //       this.customers = data;
  //     },
  //     error: (error: any) => {
  //       this.errorMessage = error.error.message;
  //     },
  //   });
  // }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (data: CustomerImp[]) => {

        console.log('BEFORE:', this.customers.length);

        this.customers = data;

        console.log('AFTER:', this.customers.length);

        this.cd.detectChanges();
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.error?.message;
      }
    });
  }



  handleSearch() {
    let kw = this.formgroup.value.searchkw;
    this.customerService.searchCustomer(kw).subscribe({
      next: (data: any) => {
        this.customers = data;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  handleDelete(customer: CustomerImp) {
    let conf = confirm('Are you sure you want to delete this customer?');
    if (!conf) return;
    this.customerService.deleteCustomer(customer.id).subscribe({
      next: () => {
        // this.customers = data;
        this.customers = this.customers.filter((c) => c.id !== customer.id);
        this.cd.detectChanges();

      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  handeleCustomerAccounts(customer: CustomerImp) {

    this.router.navigateByUrl("/customerAccounts/"+customer.id,{state:customer});
  }
}
