import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAdmin: boolean = false;
  isInstructor: boolean = false;
  isBidder: boolean = true;
  isLoading: boolean = false;

  toggleSidebar() {
    console.log('toggle');
  }

  Logout() {
    console.log("log out ");
    
    localStorage.clear();
  }
}
