import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private bgSubject = new BehaviorSubject<string>("");
  backgroundColor = this.bgSubject.asObservable();



  setBg(color: string) {
    this.bgSubject.next(color)
  }
}
