import { CommonModule } from '@angular/common';
import { Component, input, Input, output, Output, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  imports: [CommonModule],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {
  @Input() place: string = ""
  @Input() path: string = ""
  @Input() amenities: string[] = []


}