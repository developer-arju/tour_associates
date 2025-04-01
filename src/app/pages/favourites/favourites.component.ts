import { Component, OnInit } from '@angular/core';
import { ListItemOneComponent } from "../../shared/component/list-item-one/list-item-one.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourites',
  imports: [ListItemOneComponent, CommonModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnInit {
  items:string[] = Array(4).fill("_")
 
  ngOnInit(): void {
  }

  trackByFn(idx:any, val:any) {
    console.log(val)
    return idx+val
  }
}
