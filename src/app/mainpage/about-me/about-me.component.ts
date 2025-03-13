import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  isHeadlineDecorationVisible = false;

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
