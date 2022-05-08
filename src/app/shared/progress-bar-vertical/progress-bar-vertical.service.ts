import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarVerticalService {
  sizeScroll = (1/3) * window.innerHeight;

  progressVertical$: Subject<number>;

  constructor() {
    this.progressVertical$ = new Subject();
    
    this.progressVertical$.next(this.sizeScroll);
  }

  sendRequestCalculProgressBarVertical() {
    this.progressVertical$.next(this.sizeScroll);
  }
}
