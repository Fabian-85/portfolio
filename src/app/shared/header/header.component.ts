import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  responsiveMenu: boolean = false;
  isEnglish: boolean = true;
  isHoveredOnCloseIcon = false;
  isHoveredOnMenuIcon = false;


  constructor(private translateService: TranslateService) {
  
  }

  changeLanguage() {
    const newLanguage = this.isEnglish ? 'de' : 'en';
    this.isEnglish = !this.isEnglish;
    this.translateService.use(newLanguage);
  }

  showResponsiveMenu() {
    this.responsiveMenu = true;
  }

  closeResponsiveMenu() {
    this.responsiveMenu = false;
  }
}
