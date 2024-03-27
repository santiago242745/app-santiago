import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
