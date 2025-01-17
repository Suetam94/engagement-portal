import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private titleService: Title) {
    this.updateTitle('Engagement Portal | Register User');
  }

  updateTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  onSubmit(): void {
    console.log('User Registered:', this.user);
  }
}
