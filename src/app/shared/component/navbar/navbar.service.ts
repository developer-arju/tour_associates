import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private bgSubject = new BehaviorSubject<string>("");
  private heightSubject = new BehaviorSubject<string>("")
  backgroundColor = this.bgSubject.asObservable();
  height = this.heightSubject.asObservable()



  setBg(color: string) {
    this.bgSubject.next(color)
  }


  setHeight(height: string) {
    this.heightSubject.next(height)
  }
}
