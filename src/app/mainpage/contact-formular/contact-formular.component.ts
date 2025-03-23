import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { InViewDirective } from './../../in-view.directive';
@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    FormsModule,
    TranslateModule,
    InViewDirective
  ],
  templateUrl: './contact-formular.component.html',
  styleUrl: './contact-formular.component.scss',
})
export class ContactFormularComponent {
  http = inject(HttpClient);

  hoverOnFirstInput = false;
  hoverOnSecondInput = false;
  hoverOnTextField = false;
  sendMessageAnimation = false;
  removeSendMessageContainer = false;
  privacyPolicy = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  arrowAnimation = false;

  post = {
    endPoint: 'sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showSendAnimation();
            ngForm.resetForm();
            this.privacyPolicy = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      ngForm.control.markAllAsTouched();
    }
  }

  showSendAnimation() {
    this.sendMessageAnimation = true;
    setTimeout(() => {
      this.removeSendMessageContainer = true;
    }, 1500);

    setTimeout(() => {
      this.removeSendMessageContainer = false;
      this.sendMessageAnimation = false;
    }, 3500);
  }

  handleInView(isVisible: any): void {
    if (isVisible) {
      this.arrowAnimation = true;
    } else {
      this.arrowAnimation = false;
    }
  }
}
