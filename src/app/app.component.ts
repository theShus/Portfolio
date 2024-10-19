import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPage: string = 'about';

  selectPage(page: string) {
    this.selectedPage = page;
  }

  openGit() {
    window.open("https://github.com/theShus", 'https://github.com/theShus');
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/luka-jeremic-853399248/", 'https://www.linkedin.com/in/luka-jeremic-853399248/');
  }


}
