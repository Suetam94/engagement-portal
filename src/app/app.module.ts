import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuickPostFormComponent } from './components/quick-post-form/quick-post-form.component';
import {FormsModule} from "@angular/forms";
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TrendingTopicsComponent } from './components/trending-topics/trending-topics.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileSectionComponent } from './components/user-profile-section/user-profile-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuickPostFormComponent,
    PostFeedComponent,
    SidebarComponent,
    TrendingTopicsComponent,
    FooterComponent,
    UserProfileSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
