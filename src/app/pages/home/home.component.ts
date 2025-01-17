import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.updateTitle('Engagement Portal | Home');
  }

  updateTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
