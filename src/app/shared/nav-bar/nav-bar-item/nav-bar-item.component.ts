import { NavBarService } from './../nav-bar.service';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss']
})
export class NavBarItemComponent implements OnInit {
  @Input() faIcon: IconDefinition;
  @Input() textNav: string;
  @Input() active: boolean;
  @Input() idNavBar : string;

  constructor(private _navBarService: NavBarService) {
    this.faIcon = faHome;
    this.textNav = '';
    this.active = false;
    this.idNavBar = '';
  }

  ngOnInit(): void {
  }

  onClick() {
    this._navBarService.activateItem(this.textNav);
  }

}
