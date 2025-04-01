import { AfterViewInit, Component, ElementRef, inject, input, OnInit, output, viewChild } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, AfterViewInit {
  navService = inject(NavbarService)

  navBar = viewChild.required<ElementRef>("nav")

  navHeight = output<number>()

  ngOnInit(): void {
    this.navService.backgroundColor.subscribe(val => {
      this.navBar().nativeElement.style.backgroundColor = val;
    })

  }

  ngAfterViewInit(): void {
    let height = this.navBar().nativeElement.offsetHeight;
    this.navHeight.emit(height)
    this.navService.setHeight(height)
  }


  imgLoadHandler(ev:Event) {
    let height = this.navBar().nativeElement.offsetHeight;
    this.navHeight.emit(height)
    this.navService.setHeight(height)
  }
}
