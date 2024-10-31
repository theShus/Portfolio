import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedPage: string = 'about';
  currentAnimation: string = '';
  animationType: string = 'right';
  isPanelOpen = false;

  selectPage(page: string) {
    if (this.selectedPage !== page) {
      // Randomly choose "left" or "down" animation and store it
      this.animationType = Math.random() < 0.5 ? 'right' : 'down';

      // Apply the "out" animation based on the chosen type
      this.currentAnimation = this.animationType === 'right' ? 'swipe-right-out' : 'swipe-down-out';

      // Scroll to the top of the right panel when the page changes
      const rightPanel = document.getElementById('rightPanel');
      if (rightPanel) {
        rightPanel.scrollTop = 0;
      }

      setTimeout(() => {
        // Update the selected page and apply the corresponding "in" animation
        this.selectedPage = page;
        this.currentAnimation = this.animationType === 'right' ? 'swipe-right-in' : 'swipe-down-in';
      }, 200); // Duration should match animation duration in CSS
    }
  }

  rightPanelMargin = '210px'; // Default margin when left panel is open

  toggleLeftPanel() {
    this.isPanelOpen = !this.isPanelOpen;
    this.rightPanelMargin = this.isPanelOpen ? '210px' : '0'; // Change margin based on panel state
  }

  openGit() {
    window.open("https://github.com/theShus", 'https://github.com/theShus');
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/luka-jeremic-853399248/", 'https://www.linkedin.com/in/luka-jeremic-853399248/');
  }

}
