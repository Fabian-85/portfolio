import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  hoverOnGithubLink = false;
  hoverOnEmailLink = false;

  showGithubHoverAnimation() {
    this.hoverOnGithubLink = true;
  }

  removeGithubHoverAnimation() {
    this.hoverOnGithubLink = false;
  }

  showEmailHoverAnimation() {
    this.hoverOnEmailLink = true;
  }

  removeEmailHoverAnimation() {
    this.hoverOnEmailLink = false;
  }

  showHoverAnimation(hover:boolean) {
    hover = true;
  }

  removeHoverAnimation(hover:boolean) {
    hover = false;
  }
}
