import { Component } from '@angular/core';

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

  onSubmit(): void {
    console.log('User Registered:', this.user);
  }
}
