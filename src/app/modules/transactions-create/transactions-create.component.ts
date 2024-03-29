import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { TransactionService } from '../../service/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transactions-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './transactions-create.component.html',
  styleUrl: './transactions-create.component.css'
})
export class TransactionsCreateComponent {
  transactionService = inject(TransactionService);
  form = new FormBuilder()

  transactionCreateForm = this.form.group({
    type: ['', Validators.required],
    source: ['', Validators.required],
    destination: ['', Validators.required],
    amount: ['', [Validators.required, Validators.min(0)]],
    category: ['', Validators.required],
    description: ['', Validators.required],
    //balance: ['', [Validators.required, Validators.min(0)]],
    //date: ['', [Validators.required, Validators.min(0)]],
  });

  async onSubmit() {
    if (this.transactionCreateForm.valid) {
      try {
        this.transactionService
          .createTransaction(this.convertFormToFormData(this.transactionCreateForm))
          .subscribe();
      } catch (error: any) {
        alert('El servidor no está disponible. Intente más tarde. ' + error.message)
      } finally {
        // habilitar botón
      }
    }
  }

  convertFormToFormData(form: FormGroup) {
    const formValue = form.getRawValue();
    return formValue as Transaction// Cast object to Product
  }
}
