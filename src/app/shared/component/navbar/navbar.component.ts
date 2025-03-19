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

  paddingInline = "2rem";
  paddingBlock = "1.5rem";

  ngOnInit(): void {
    this.navBar().nativeElement.style.paddingInline = this.paddingInline;
    this.navBar().nativeElement.style.paddingBlock = this.paddingBlock  ;

    this.navService.backgroundColor.subscribe(val => {
      this.navBar().nativeElement.style.backgroundColor = val;
    })

  }

  ngAfterViewInit(): void {
    let height = this.navBar().nativeElement.offsetHeight + 16;
    console.log(height)
    this.navHeight.emit(height)
    this.navService.setHeight(height)
  }

}
