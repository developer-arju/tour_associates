import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headings',
  imports: [],
  templateUrl: './headings.component.html',
  styleUrl: './headings.component.css'
})
export class HeadingsComponent {
  @Input() heading: string = "";
  @Input() subHeading: string = "";
}
