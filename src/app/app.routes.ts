import { Routes } from '@angular/router';
import { Customers } from './customers/customers';
import { Accounts } from './accounts/accounts';
import { AddNewCustomer } from './add-new-customer/add-new-customer';
import { CustomerAccounts } from './customer-accounts/customer-accounts';
import { Login } from './login/login';
import { AdminTemplate } from './admin-template/admin-template';
import { authenticationGuard } from './guards/authentication-guard';
import { authorizationGuard } from './guards/authorization-guard';
import { NotAuthorization } from './not-authorization/not-authorization';

export const routes: Routes = [

  {path:'login', component:Login},
  {path:'',redirectTo:'/login', pathMatch:'full'},

  {path:'admin', component:AdminTemplate,canActivate:[authenticationGuard],
    children: [
      { path: 'customers', component: Customers },
      { path: 'accounts', component: Accounts },
      {path:'newCustomer', component:AddNewCustomer, canActivate:[authorizationGuard],
    data: {role:"ADMIN"},},
      {path:'customerAccounts/:id', component:CustomerAccounts},
      {path:'notAuthorized', component:NotAuthorization},

    ]},
];
