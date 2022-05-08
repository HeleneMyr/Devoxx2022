import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionModule } from '../shared/section/section.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarModule } from './../shared/nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    MatSidenavModule,
    SectionModule,
    FontAwesomeModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
