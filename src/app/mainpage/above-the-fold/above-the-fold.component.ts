import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  helloWorldText = 'Hello World';
  hover = false;
  fix = false;
  timeoutId: any;
  firstWord = 'Frontend';
  secondWord = 'Entwickler';
  firstWordAsArray: any = [];
  secondWordAsArray: any = [];

  ngOnInit() {
    this.firstWordAsArray = this.firstWord.split('').map((char) => ({
      original: char,
      display: char,
      changeLetter:false
    }));

    this.secondWordAsArray = this.secondWord.split('').map((char) => ({
      original: char,
      display: char,
      changeLetter:false
    }));
  }

  changeLetterOnFirstWorld(index: any) {
    this.firstWordAsArray[index].changeLetter=true;
    this.firstWordAsArray[index].display =
      this.firstWordAsArray[index].original ==
      this.firstWordAsArray[index].original.toUpperCase()
        ? this.firstWordAsArray[index].original.toLowerCase()
        : this.firstWordAsArray[index].original.toUpperCase();
  }

  resetLetterOnFirstWorld(index: any) {
    this.firstWordAsArray[index].changeLetter=false;
    this.firstWordAsArray[index].display =
      this.firstWordAsArray[index].original;
  }

  changeLetterOnSecondWorld(index: any) {
    this.secondWordAsArray[index].changeLetter=true;
    this.secondWordAsArray[index].display =
      this.secondWordAsArray[index].original ==
      this.secondWordAsArray[index].original.toUpperCase()
        ? this.secondWordAsArray[index].original.toLowerCase()
        : this.secondWordAsArray[index].original.toUpperCase();
  }

  resetLetterOnSecondWorld(index: any) {
    this.secondWordAsArray[index].changeLetter=false;
    this.secondWordAsArray[index].display =
      this.secondWordAsArray[index].original;
  }

  showButtonAnimation() {
    this.hover = true;
    this.timeoutId = setTimeout(() => {
      this.helloWorldText = "I'm Fabian Maier-Kumpukkattu";
      this.fix = true;
      this.hover = false;
    }, 800);
  }

  resetButtonAnimation() {
    clearTimeout(this.timeoutId);
    this.hover = false;
    this.fix = false;
    this.helloWorldText = 'Hello World';
  }

  navigateToContactSection() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView();
    }
  }
}
