import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'assets/profile.png',
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Updated User:', this.user);
    void this.router.navigate(['/profile']);
  }

  cancelEdit(): void {
   void this.router.navigate(['/profile']);
  }
}
