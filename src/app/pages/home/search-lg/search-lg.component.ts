import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-search-lg',
  imports: [],
  templateUrl: './search-lg.component.html',
  styleUrl: './search-lg.component.css'
})
export class SearchLgComponent {
  assetsUrl = environment.assetsUrl
}
