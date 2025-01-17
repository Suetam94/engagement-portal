import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: '', // Placeholder for the uploaded file's URL
  };
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router, private titleService: Title) {
    this.updateTitle('Engagement Portal | Edit Profile');
  }

  updateTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  onSubmit(): void {
    console.log('Updated User:', this.user);
    void this.router.navigate(['/profile']);
  }

  cancelEdit(): void {
   void this.router.navigate(['/profile']);
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result; // Set the preview URL
      };
      reader.readAsDataURL(file); // Read the file as a Data URL for preview
    }
  }
}
