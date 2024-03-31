import { Component, inject  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import  Account  from '../../models/account';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  accountList: any;
  accountService: ProfileService = inject(ProfileService);

  constructor() {
  }

  async ngOnInit() {
    try {
      this.accountList = await this.accountService.getInfoProfile();
    } catch (error: any) {
      alert(error.message)
    }
  }
}
