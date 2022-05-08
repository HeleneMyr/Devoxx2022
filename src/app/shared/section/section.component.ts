import { Section } from './section.model';
import { Component, OnInit, Input } from '@angular/core';
import { Subsection } from './subsection/subsection.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: Section;

  constructor() {
    this.section = new Section('', false, '');
  }

  ngOnInit(): void {
  }


}
