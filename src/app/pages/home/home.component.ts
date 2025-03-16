import { Component } from '@angular/core';
import { SearchLgComponent } from "./search-lg/search-lg.component";

@Component({
  selector: 'app-home',
  imports: [SearchLgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: number[] = Array(10).map((_,idx) => idx+1)
}
