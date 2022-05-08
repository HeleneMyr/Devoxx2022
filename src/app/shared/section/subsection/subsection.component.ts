import { NavBarService } from '../../nav-bar/nav-bar.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Subsection } from './subsection.model';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss']
})
export class SubsectionComponent implements OnInit {
  @Input() menu: string;
  @Input() showProgressBar: boolean;
  @Input() item: Subsection;

  constructor(private _navBarService: NavBarService) {
    this.menu = '';
    this.showProgressBar = true;
    this.item = new Subsection('', [], '', '');
  }

  ngOnInit(): void {
  }

  onChangeFlagActiveProgressBar() {
      this._navBarService.activateItem(this.menu);
  }

  existsTitleSubsection() {
    return !!this.item.titleSubsection;
  }

  existsImg() {
    return !!this.item.srcImg;
  }

  isText(text: string) {
    return !this.isBr(text) && !this.isList(text) && !this.isTitle(text);
  } 

  isList(text: string) {
    return text.startsWith('<li>');
  }

  list(text: string) {
    return text.split('<li>').filter(t => !!t);
  }

  isTitle(text: string) {
    return text.startsWith('<t>');
  }

  isBr(text: string) {
    return text === '';
  }

}
