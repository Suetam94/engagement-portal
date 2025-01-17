import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'assets/profile.png',
  };
  showDeleteModal = false;

  openModal(): void {
    this.showDeleteModal = true;
  }

  closeModal(): void {
    this.showDeleteModal = false;
  }

  handleDeleteAccount(): void {
    console.log('Account deleted');
    this.closeModal();
  }
}
