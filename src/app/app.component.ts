import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  router = inject(Router);
  main = viewChild.required<ElementRef>("main");
  isActivated = false;

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

  ngOnInit(): void {
    this.router.events.subscribe(ev => {
      if(ev instanceof NavigationEnd) {
        this.isActivated = true
      }
    })
  }

}
