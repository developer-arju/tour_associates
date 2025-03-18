import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  imports: [],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})
export class OfferCardComponent {
  category = input.required<string>();
  path = input.required<string>();
  title = input.required<string>();
  info = input.required<string>();
}
