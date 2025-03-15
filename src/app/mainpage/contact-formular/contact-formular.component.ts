import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './contact-formular.component.html',
  styleUrl: './contact-formular.component.scss',
})
export class ContactFormularComponent {
  hoverOnFirstInput = false;
  hoverOnSecondInput = false;
  hoverOnTextField = false;

  highlightOnFirstInput() {
    this.hoverOnFirstInput = true;
  }

  removeHighlightingFromFirstInput() {
    this.hoverOnFirstInput = false;
  }

  highlightOnSecondInput() {
    this.hoverOnSecondInput = true;
  }

  removeHighlightingFromSecondInput() {
    this.hoverOnSecondInput = false;
  }

  highlightOnTextfield() {
    this.hoverOnTextField = true;
  }

  removeHighlightingFromTextfield() {
    this.hoverOnTextField = false;
  }
}
