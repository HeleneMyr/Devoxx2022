import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarHeaderComponent } from './nav-bar-header/nav-bar-header.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';


@NgModule({
  declarations: [
    NavBarComponent,
    NavBarHeaderComponent,
    NavBarItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    FontAwesomeModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
