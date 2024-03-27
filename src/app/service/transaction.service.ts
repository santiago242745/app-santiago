import { Injectable } from '@angular/core';

import { Transaction } from '../models/transaction';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  protected transactionList: Transaction[] = [];

  constructor() { }

   async getAllTransactions(): Promise<Transaction[]> {
     const response = await fetch(environment.backendUrl + '/transactions')
     return await response.json();
  }
}
