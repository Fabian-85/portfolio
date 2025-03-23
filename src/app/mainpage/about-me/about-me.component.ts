import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InViewDirective } from './../../in-view.directive';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule,TranslateModule,InViewDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  isHeadlineDecorationVisible = false;

  constructor() {}

  navigateToContactSection() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView();
    }
  }

  handleInView(isVisible: any): void {
   if (isVisible) {
      this.isHeadlineDecorationVisible = true;
    }else{
      this.isHeadlineDecorationVisible = false;
    }
  }
}
