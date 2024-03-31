import { Component, inject  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import  User  from '../../models/user';
import { ProfileService } from '../../service/profile.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  infoProfile: any;
  user$: Observable<User | undefined> = new Observable<User>();
  profileService: ProfileService = inject(ProfileService);

  constructor() {
  }

  async ngOnInit() {
    try {
      console.log("entra")
      this.infoProfile = await this.profileService.getInfoProfile();
      console.log(this.infoProfile)
    } catch (error: any) {
      alert(error.message)
    }
  }
}
