import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-post-form',
  templateUrl: './quick-post-form.component.html',
  styleUrls: ['./quick-post-form.component.scss']
})
export class QuickPostFormComponent {
  postContent = '';

  onSubmit(): void {
    if (this.postContent.trim()) {
      console.log('Post submitted:', this.postContent);
      // Add logic to send the post to a service or backend
      this.clearPost();
    }
  }

  clearPost(): void {
    this.postContent = '';
  }
}
