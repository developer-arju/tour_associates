import {
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { NewsLetterComponent } from '../news-letter/news-letter.component';

@Component({
  selector: 'app-footer',
  imports: [NewsLetterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  footer = viewChild.required<ElementRef>('footer');
  hMax = output<number>();

  ngOnInit(): void {
    let maxTop =
      this.footer().nativeElement.clientHeight +
      this.footer().nativeElement.clientHeight / 2;
    this.hMax.emit(maxTop);
  }
}
