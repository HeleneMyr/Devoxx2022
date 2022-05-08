import { NavBarItem } from './nav-bar-item.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  items$: BehaviorSubject<NavBarItem[]>;

  constructor() {
    this.items$ = new BehaviorSubject<NavBarItem[]>([]);
  }

  addItems(items: NavBarItem[]) {
    this.items$.next(items);
  }

  activateItem(itemName: string) {
    this.items$.subscribe({
      next: (items) => {
        items.forEach((item: NavBarItem) => {
          item.activeNavBar(itemName);
        })
      }
    });
  }
}
