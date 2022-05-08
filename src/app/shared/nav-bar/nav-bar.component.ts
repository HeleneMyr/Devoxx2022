import { Observable } from 'rxjs';
import { NavBarService } from './nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { NavBarItem } from './nav-bar-item.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items$: Observable<NavBarItem[]>;

  constructor(private _navBarService: NavBarService) {
    this.items$ = this._navBarService.items$.asObservable();
  }

  ngOnInit(): void {
  }

  
  identify(index: number, item: NavBarItem){
    return item.identify(); 
  }



}
