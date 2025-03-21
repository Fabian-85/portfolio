import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  isHeadlineDecorationVisible = true;

  navigateToContactSection() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView();
    }
  }
  /*
  intervalId:any;
  ngOnInit(): void {
    this.intervalId=setInterval(() => {
      this.isHeadlineDecorationVisible = !this.isHeadlineDecorationVisible;
      console.log('dd');
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }*/
}
