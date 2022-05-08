import { Observable } from 'rxjs';
import { ProgressBarVerticalService } from './progress-bar-vertical.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
let progressbarId = 0;

@Component({
  selector: 'app-progress-bar-vertical',
  templateUrl: './progress-bar-vertical.component.html',
  styleUrls: ['./progress-bar-vertical.component.scss']
})
export class ProgressBarVerticalComponent implements OnInit {

  @ViewChild('section', { static: false }) private section: any;
  @Output() activeProgressBar: EventEmitter<boolean>;

  heightProgressVertical$: Observable<number>;

  @Input() bufferValue: number = 0;
  @Input() show: boolean = true;
  progressbarId = `mat-progress-bar-${progressbarId++}`;

  constructor(private _progressBarVertical: ProgressBarVerticalService) { 
    progressbarId++;
    this.heightProgressVertical$ = this._progressBarVertical.progressVertical$.asObservable();
    this.activeProgressBar = new EventEmitter();
  }
  
  ngOnInit(): void {
    this.heightProgressVertical$.subscribe((sizeLimitScroll) => {
      this._setValuesByProgressBarHeight(sizeLimitScroll);
    });
  }
  
  _setValuesByProgressBarHeight(sizeLimitScroll: number) {
    this.bufferValue = this._calcProgressBarValue(sizeLimitScroll);
    if (this.bufferValue > 0 && this.bufferValue < 100) {
      this.activeProgressBar.emit();
    }
  }

  _calcProgressBarValue(sizeLimitScroll: number) : number {
    const rect = this.section.nativeElement.getBoundingClientRect();

    if (rect.top < sizeLimitScroll) {
      const diffLimitTop = sizeLimitScroll - rect.top;
      const completeSize = rect.height; 
      const percent = diffLimitTop / completeSize * 100; 
      return Math.min(100, percent);
    }
    return 0;
  }

}
