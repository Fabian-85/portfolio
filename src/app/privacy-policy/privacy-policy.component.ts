import { Component } from '@angular/core';
import { EnglishPrivacyPolicyComponent } from './english-privacy-policy/english-privacy-policy.component';
import { GermanPrivacyPolicyComponent } from './german-privacy-policy/german-privacy-policy.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    EnglishPrivacyPolicyComponent,
    GermanPrivacyPolicyComponent,
    TranslateModule,
    CommonModule,
    FooterComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {


    currentLanguage: string = 'en';
   

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.currentLanguage =
      this.translateService.currentLang ||
      this.translateService.getDefaultLang();
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }
}
