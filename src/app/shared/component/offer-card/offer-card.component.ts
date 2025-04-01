import { Component, input, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-offer-card',
  imports: [],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})
export class OfferCardComponent {
  assetsUrl = environment.assetsUrl
  category = input.required<string>();
  path = input.required<string>();
  title = input.required<string>();
  info = input.required<string>();
}
