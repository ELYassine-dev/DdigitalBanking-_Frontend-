import { Routes } from '@angular/router';
import { Customers } from './customers/customers';
import { Accounts } from './accounts/accounts';
import { AddNewCustomer } from './add-new-customer/add-new-customer';
import { CustomerAccounts } from './customer-accounts/customer-accounts';

export const routes: Routes = [
  { path: 'customers', component: Customers },
  { path: 'accounts', component: Accounts },
  {path:'newCustomer', component:AddNewCustomer},
  {path:'customerAccounts/:id', component:CustomerAccounts}
];
