import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [FooterComponent, CommonModule, FormsModule],
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

  mailTest = true;

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
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.privacyPolicy = false;
            this.showSendAnimation();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      this.showSendAnimation();
      ngForm.resetForm();
      this.privacyPolicy = false;
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
}
