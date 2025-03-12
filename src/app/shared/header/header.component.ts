import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  responsiveMenu: boolean = false;
  isEnglish: boolean = false;
  isHoveredOnCloseIcon = false;
  isHoveredOnMenuIcon = false;

  changeLanguage() {
    this.isEnglish = !this.isEnglish;
  }

  showResponsiveMenu() {
    this.responsiveMenu = true;
  }

  closeResponsiveMenu() {
    this.responsiveMenu = false;
  }
}
