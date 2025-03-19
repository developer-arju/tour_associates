import {
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { NewsLetterComponent } from '../news-letter/news-letter.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [NewsLetterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  footer = viewChild.required<ElementRef>('footer');
  hMax = output<number>();
  assetsUrl = environment.assetsUrl;

  ngOnInit(): void {
    let maxTop =
      this.footer().nativeElement.clientHeight +
      this.footer().nativeElement.clientHeight / 2;
    this.hMax.emit(maxTop);
  }
}
