import { ProgressBarVerticalModule } from '../progress-bar-vertical/progress-bar-vertical.module';
import { SubsectionComponent } from './subsection/subsection.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';



@NgModule({
  declarations: [
    SectionComponent,
    SubsectionComponent
  ],
  imports: [
    CommonModule,
    ProgressBarVerticalModule
  ],
  exports: [
    SectionComponent
  ]
})
export class SectionModule { }
