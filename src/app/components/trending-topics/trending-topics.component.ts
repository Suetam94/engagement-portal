import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-topics',
  templateUrl: './trending-topics.component.html',
  styleUrls: ['./trending-topics.component.scss'],
})
export class TrendingTopicsComponent implements OnInit {
  topics: { name: string; count: number }[] = [];

  ngOnInit(): void {
    this.loadTrendingTopics();
  }

  loadTrendingTopics(): void {
    // Mock data; replace with API integration
    this.topics = [
      { name: '#Angular', count: 120 },
      { name: '#WebDevelopment', count: 98 },
      { name: '#TypeScript', count: 76 },
      { name: '#Frontend', count: 45 },
      { name: '#Programming', count: 30 },
    ];
  }
}
