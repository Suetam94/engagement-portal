import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(private titleService: Title) {
    this.updateTitle('Engagement Portal | Login');
  }

  updateTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  onSubmit(): void {
    console.log('Login Data:', this.loginData);
  }
}
