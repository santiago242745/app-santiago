import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../service/transaction..service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transactionsList: Transaction[] = [];
  transactionService: TransactionService = inject(TransactionService);

  constructor() {
  }

  async ngOnInit() {
    try {
      this.transactionsList = await this.transactionService.getAllTransactions();
    } catch (error: any) {
      alert(error.message)
    }
  }
}
