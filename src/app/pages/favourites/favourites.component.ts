import { Component, inject, OnInit } from '@angular/core';
import { NavbarService } from '../../shared/services/navbar.service';

@Component({
  selector: 'app-favourites',
  imports: [],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnInit {
  navService = inject(NavbarService)

  ngOnInit(): void {
    this.navService.setBg("#141414")
  }
}
