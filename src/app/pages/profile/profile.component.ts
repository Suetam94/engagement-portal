import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private titleService: Title) {
    this.updateTitle('Engagement Portal | Profile');
  }

  updateTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

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
