import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  editProfileForm!: FormGroup;
  submitted = false;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(
    private router: Router,
    private titleService: Title,
    private fb: FormBuilder,
  ) {
    this.updateTitle('Engagement Portal | Edit Profile');
  }

  updateTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.editProfileForm.invalid) {
      return;
    }

    console.log('Updated User:', this.editProfileForm);
    void this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      profilePicture: [null],
    });

    this.editProfileForm.patchValue({
      name: 'John Doe',
      email: 'johndoe@example.com',
    });
  }

  get f() {
    return this.editProfileForm.controls;
  }

  cancelEdit(): void {
    void this.router.navigate(['/profile']);
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
