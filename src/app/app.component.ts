import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  main = viewChild.required<ElementRef>("main");

  title = 'my-app';
  pageWrapperBottom!: string;

  setPaddingBottom($event: number) {
    console.log($event, "footer height")
    this.main().nativeElement.style.paddingBottom = `${$event}px`
  }

  setPaddingTop($event: number) {
    console.log($event, "nav bar height")
    this.main().nativeElement.style.paddingTop = `${$event}px`;
  }
}
