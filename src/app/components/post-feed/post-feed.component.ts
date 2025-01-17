import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.scss'],
})
export class PostFeedComponent implements OnInit {
  posts: { author: string; timestamp: Date; content: string }[] = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    // Mock data for demonstration; replace this with API integration
    this.posts = [
      {
        author: 'John Doe',
        timestamp: new Date(),
        content: 'This is the first post in the feed.',
      },
      {
        author: 'Jane Smith',
        timestamp: new Date(),
        content: 'Another great post to read!',
      },
      {
        author: 'Alex Johnson',
        timestamp: new Date(),
        content: 'Learning Angular is fun!',
      },
    ];
  }
}
