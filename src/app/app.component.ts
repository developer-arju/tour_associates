import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'my-app';
  @ViewChild('navbar', { static: false }) navbarElement!: ElementRef;
  navbarHeight: number = 0;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.navbarElement) {
      this.navbarHeight = this.navbarElement.nativeElement.offsetHeight;
      console.log('Navbar height:', this.navbarHeight);
    } else {
      console.log('Navbar element still not available');
    }
  }
}
