import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-header',
  templateUrl: './nav-bar-header.component.html',
  styleUrls: ['./nav-bar-header.component.scss']
})
export class NavBarHeaderComponent implements OnInit {

  @Input() titleNav: string;

  constructor() {
    this.titleNav = '';
  }

  ngOnInit(): void {
  }

}
