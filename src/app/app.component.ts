import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookify';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  private hasScrolledUpManually = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollUp = this.el.nativeElement.querySelector('#scroll-up');
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= 350 && !this.hasScrolledUpManually) {
      this.renderer.addClass(scrollUp, 'show-scroll');
    } else {
      this.renderer.removeClass(scrollUp, 'show-scroll');
    }
  }

  scrollToTop() {
    // Function to scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update the flag to indicate that the user has scrolled up manually
    this.hasScrolledUpManually = true;
  }
}
