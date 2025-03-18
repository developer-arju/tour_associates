import { Component, inject, OnInit } from '@angular/core';
import { NavbarService } from '../../shared/component/navbar/navbar.service';
import { ListItemOneComponent } from "../../shared/component/list-item-one/list-item-one.component";

@Component({
  selector: 'app-favourites',
  imports: [ListItemOneComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnInit {
  navService = inject(NavbarService)

  ngOnInit(): void {
    this.navService.setBg("#141414")
  }
}
