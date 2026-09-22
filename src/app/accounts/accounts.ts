import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Account } from '../services/account';
import { catchError, Observable, tap } from 'rxjs';
import { AccountDetails } from '../model/Account.model';
import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [ReactiveFormsModule, AsyncPipe, DecimalPipe, DatePipe],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts implements OnInit {

  formgroup!: FormGroup;
  currentpage: number = 0;
  size: number = 5;
  accountObservable!: Observable<AccountDetails>;
  totalpages:number=0;
  operationformgroup!:FormGroup;
  errormessage!:string;


  constructor(
    private formBuilder: FormBuilder,
    private accountservice: Account,
  ) {}
  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      accountid: [''],
    });
    this.operationformgroup = this.formBuilder.group({
      operationType:[null],
      amount: ['0'],
      description: [null],
      accountdestination:[null],


    })

  }

  handlesearch() {
    let a: string = this.formgroup.value.accountid;
    this.accountObservable = this.accountservice.getaccount(a, this.currentpage, this.size)
      .pipe(tap(data=>
      this.totalpages=data.totalPage));
  }


  loadCustomers() {
this.handlesearch()
  }


  handleAccountOperation() {

    console.log(this.formgroup.value.accountid);
    console.log(this.operationformgroup.value);

let accountid:string = this.formgroup.value.accountid;
let operationType=this.operationformgroup.value.operationType;
let  description:string=this.operationformgroup.value.description;
let  amount:number=this.operationformgroup.value.amount;
let accountdestination:string=this.operationformgroup.value.accountdestination


if(operationType=='DEBIT'){
this.accountservice.debit(accountid,amount,description).subscribe({
  next: (data)=>{
    alert("success operation debit");
    this.operationformgroup.reset();

    this.handlesearch();

  },
  error: (error)=>{
    console.log("error operation debit")
  }
})
}
else if(operationType=='TRANSFER'){
  this.accountservice.transfer(accountid,accountdestination,amount,description).subscribe({
    next: ()=>{
      alert("success operation transfer");
      this.operationformgroup.reset();
      this.handlesearch();

    },error: (error)=>{
      console.log("error operation transfer")
    }
  })
}
else if(operationType=='CREDIT'){

  this.accountservice.credit(accountid,amount,description).subscribe({
    next: (data)=>{
      alert("success operation credit");
      this.operationformgroup.reset();
      this.handlesearch();

    },error: (error)=>{
      console.log("error operation credit")
    }
  })
}


  }
}
