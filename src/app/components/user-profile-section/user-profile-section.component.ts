import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-section',
  templateUrl: './user-profile-section.component.html',
  styleUrls: ['./user-profile-section.component.scss'],
})
export class UserProfileSectionComponent  {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'assets/profile.png', // Placeholder image
  };


}
