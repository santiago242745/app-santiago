import { Routes } from '@angular/router';

import { AccountsComponent } from './modules/accounts/accounts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { TransactionsComponent } from './modules/transactions/transactions.component';

const routeConfig: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Home page'
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    title: 'Accounts'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile'
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    title: 'Transactions'
  },
];

export default routeConfig;
