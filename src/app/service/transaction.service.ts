import { Injectable } from '@angular/core';
import Store from '../models/Store';
import { Transaction } from '../models/transaction';
import { environment } from '../../environments/environment';
import ApiService from '../models/ApiService';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends Store<Transaction[]>{
  protected readonly endpoint = environment.backendUrl + '/transactions';
  protected transactionList: Transaction[] = [];

  constructor(private apiService: ApiService<Transaction>) {
    super([]);
  }

   async getAllTransactions(): Promise<Transaction[]> {
     const response = await fetch(environment.backendUrl + '/transactions')
     return await response.json();
  }

  createTransaction(form: Transaction) {
    return this.apiService.create(this.endpoint, form)
  }
}
