import { Routes } from '@angular/router';
import { authGuard } from './models/auth-guard';
import { AccountsComponent } from './modules/accounts/accounts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { TransactionsComponent } from './modules/transactions/transactions.component';
import { LoginComponent } from './modules/login/login.component';
import { TransactionsCreateComponent } from './modules/transactions-create/transactions-create.component';

export const routeConfig: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Home page'
  },
  {
    path: 'accounts',
    canActivate: [authGuard],
    component: AccountsComponent,
    title: 'Accounts'
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    component: ProfileComponent,
    title: 'Profile'
  },
  {
    path: 'transactions',
    canActivate: [authGuard],
    component: TransactionsComponent,
    title: 'Transactions'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    title: 'SignUp'
  },
  {
    path: 'transactionCreate',
    canActivate: [authGuard],
    component: TransactionsCreateComponent,
    title: 'SignUp'
  },
];

export default routeConfig;
