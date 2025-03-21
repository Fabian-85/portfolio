import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  helloWorldTextMobile = 'Hello World';
  helloWorldTextDesktop = 'Hello World';
  hoverOnWelcomeButtonOnDesktop = false;
  endOfHandAnimationOnDesktop = false;
  hoverOnWelcomeButtonOnMobile = false;
  endOfHandAnimationOnMobile = false;
  timeoutId: any;
  firstWord = 'Frontend';
  secondWord = 'DEVELOPER';
  firstWordAsArray: any = [];
  secondWordAsArray: any = [];
  profilImageHover = false;
  profilImageName = 'Fabian :)';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.loadFirstWord();
    this.loadSecondWord();

    this.translateService.onLangChange.subscribe(() => {
      this.loadSecondWord();
    });
  }

  loadFirstWord() {
    this.firstWordAsArray = this.firstWord.split('').map((char) => ({
      original: char,
      display: char,
      changeLetter: false,
    }));
  }

  loadSecondWord() {
    this.translateService
      .get('above-the-fold.DEVELOPER')
      .subscribe((translation: string) => {
        this.secondWord = translation;

        this.secondWordAsArray = this.secondWord.split('').map((char) => ({
          original: char,
          display: char,
          changeLetter: false,
        }));
      });
  }

  changeLetterOnFirstWorld(index: any) {
    this.firstWordAsArray[index].changeLetter = true;
    this.firstWordAsArray[index].display =
      this.firstWordAsArray[index].original ==
      this.firstWordAsArray[index].original.toUpperCase()
        ? this.firstWordAsArray[index].original.toLowerCase()
        : this.firstWordAsArray[index].original.toUpperCase();
  }

  resetLetterOnFirstWorld(index: any) {
    this.firstWordAsArray[index].changeLetter = false;
    this.firstWordAsArray[index].display =
      this.firstWordAsArray[index].original;
  }

  changeLetterOnSecondWorld(index: any) {
    this.secondWordAsArray[index].changeLetter = true;
    this.secondWordAsArray[index].display =
      this.secondWordAsArray[index].original ==
      this.secondWordAsArray[index].original.toUpperCase()
        ? this.secondWordAsArray[index].original.toLowerCase()
        : this.secondWordAsArray[index].original.toUpperCase();
  }

  resetLetterOnSecondWorld(index: any) {
    this.secondWordAsArray[index].changeLetter = false;
    this.secondWordAsArray[index].display =
      this.secondWordAsArray[index].original;
  }

  showButtonAnimationOnDesktop() {
    this.hoverOnWelcomeButtonOnDesktop = true;
    this.timeoutId = setTimeout(() => {
      this.helloWorldTextDesktop = "I'm Fabian Maier-Kumpukkattu";
      this.endOfHandAnimationOnDesktop = true;
      this.hoverOnWelcomeButtonOnDesktop = false;
    }, 400);
  }

  resetButtonAnimationOnDesktop() {
    clearTimeout(this.timeoutId);
    this.hoverOnWelcomeButtonOnDesktop = false;
    this.endOfHandAnimationOnDesktop = false;
    this.helloWorldTextDesktop = 'Hello World';
  }

  showButtonAnimationOnMobile() {
    if (this.endOfHandAnimationOnMobile == false) {
      this.hoverOnWelcomeButtonOnMobile = true;
      setTimeout(() => {
        this.helloWorldTextMobile = "I'm Fabian";
        this.endOfHandAnimationOnMobile = true;
        this.hoverOnWelcomeButtonOnMobile = false;
      }, 400);
    }
  }

  removeFilterOnProfilImage() {
    this.profilImageHover = true;
    setTimeout(() => {
      this.profilImageHover = false;
    }, 100);

    setTimeout(() => {
      this.profilImageHover = true;
    }, 200);
  }

  addFilterOnProfilImage() {
    this.profilImageHover = false;
    setTimeout(() => {
      this.profilImageHover = true;
    }, 100);
    setTimeout(() => {
      this.profilImageHover = false;
    }, 200);
  }

  changeProfilName() {
    this.profilImageName = 'Fabian :D';
    setTimeout(() => {
      this.profilImageName = 'Fabian :)';
    }, 100);
    setTimeout(() => {
      this.profilImageName = 'Fabian :D';
    }, 200);
  }

  resetProfilName() {
    this.profilImageName = 'Fabian :)';
    setTimeout(() => {
      this.profilImageName = 'Fabian :D';
    }, 100);
    setTimeout(() => {
      this.profilImageName = 'Fabian :)';
    }, 200);
  }

  navigateToContactSection() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView();
    }
  }
}
