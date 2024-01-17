import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isSearchVisible = false;
  isLoginFormVisible = false;
  isFeaturedLinkActive = false;
  isDiscountLinkActive = false;
  isReviewsLinkActive = false;
  isHomeLinkActive = true;
  isNewLinkActive = false;

  selectedTheme: string = localStorage.getItem('selected-theme') || 'light';
  selectedIcon: string = localStorage.getItem('selected-icon') || 'ri-sun-line';

  constructor(private router: Router){  }

  ngOnInit(): void {
    this.applyTheme();
  }

  getCurrentTheme(): string {
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  }

  getCurrentIcon(): string {
    return this.selectedIcon;
  }

  applyTheme(): void {
    document.body.classList.toggle(darkTheme, this.getCurrentTheme() === 'dark');
    // You may need to add/remove other theme-related classes if necessary
  }

  toggleTheme(): void {
    this.selectedTheme = this.getCurrentTheme() === 'light' ? 'dark' : 'light';
    this.selectedIcon = this.getCurrentIcon() === 'ri-sun-line' ? 'ri-moon-line' : 'ri-sun-line';

    // Toggle dark theme
    document.body.classList.toggle(darkTheme, this.selectedTheme === 'dark');
    // You may need to add/remove other theme-related classes if necessary

    // Save the theme and icon in local storage
    localStorage.setItem('selected-theme', this.selectedTheme);
    localStorage.setItem('selected-icon', this.selectedIcon);
  }


  showSearch(): void {
    console.log('Show search method called');
    this.isSearchVisible = true;
  }

  closeSearch(): void {
    console.log('Close search method called');
    this.isSearchVisible = false;
  }


  showLoginForm(): void {
    this.router.navigate(['/login_form']);
  }

  activateLink(link: string) {
    if(link == 'featured'){
      this.isFeaturedLinkActive = true;
      this.isHomeLinkActive = false;
      this.isDiscountLinkActive = false;
      this.isNewLinkActive = false;
      this.isReviewsLinkActive = false;
    }else if(link == 'home'){
      this.isFeaturedLinkActive = false;
      this.isHomeLinkActive = true;
      this.isDiscountLinkActive = false;
      this.isNewLinkActive = false;
      this.isReviewsLinkActive = false;
    }else if(link == 'reviews'){
      this.isFeaturedLinkActive = false;
      this.isHomeLinkActive = false;
      this.isDiscountLinkActive = false;
      this.isNewLinkActive = false;
      this.isReviewsLinkActive = true;
    }else if(link == 'new'){
      this.isFeaturedLinkActive = false;
      this.isHomeLinkActive = false;
      this.isDiscountLinkActive = false;
      this.isNewLinkActive = true;
      this.isReviewsLinkActive = false;
    }else if(link == 'discount'){
      this.isFeaturedLinkActive = false;
      this.isHomeLinkActive = false;
      this.isDiscountLinkActive = true;
      this.isNewLinkActive = false;
      this.isReviewsLinkActive = false;
    }

  }

}
