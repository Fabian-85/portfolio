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
  
  navigateToContactSection(){
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView();
      }
    
  }
}
