import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  responsiveMenu: boolean = false;
  isEnglish: boolean = true;
  isHoveredOnCloseIcon = false;
  isHoveredOnMenuIcon = false;
  isFixed: boolean = false;
  private lastScrollY: number = 0;
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    const currentLanguage = this.getLanguageFromLocalStorage();
    if (currentLanguage) {
      this.translateService.use(currentLanguage);
      this.isEnglish = currentLanguage === 'en';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollY < this.lastScrollY && currentScrollY > 50) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
    this.lastScrollY = currentScrollY;
  }

  changeLanguage() {
    const newLanguage = this.isEnglish ? 'de' : 'en';
    this.isEnglish = !this.isEnglish;
    this.translateService.use(newLanguage);
    this.saveLanguageInLocalStorage(newLanguage);
  }

  showResponsiveMenu() {
    this.responsiveMenu = true;
  }

  closeResponsiveMenu() {
    this.responsiveMenu = false;
  }

  saveLanguageInLocalStorage(language: string) {
    localStorage.setItem('language', language);
  }

  getLanguageFromLocalStorage() {
    return localStorage.getItem('language');
  }
}
