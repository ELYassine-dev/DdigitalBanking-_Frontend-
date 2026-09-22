import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerImp } from '../model/Customers.model';
import { Customer } from '../services/customer';
import { Router } from 'express';

@Component({
  selector: 'app-add-new-customer',
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-customer.html',
  styleUrl: './add-new-customer.css',
})
export class AddNewCustomer implements OnInit {
  formgroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private customerService: Customer,
              ) {}

  ngOnInit() {
    this.formgroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.minLength(10)],[Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      adresse: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  saveCustomer() {
 let customer:CustomerImp=this.formgroup.value;
 this.customerService.saveCustomer(customer).subscribe({
   next: ()=>{
   alert("Customer has been saved");
   // this.route.navigateByUrl("/customers");
     this.formgroup.reset();
   },
   error: error=>{
     console.log(error);
   }
 })

  }
}
