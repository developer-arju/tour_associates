import { Component, inject, input, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  backgroundColor!: string;
  navService = inject(NavbarService)
  
  ngOnInit(): void {
    this.navService.backgroundColor.subscribe(val => {
      this.backgroundColor = val;
    })
  }
}
