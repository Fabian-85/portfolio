import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {

  isHeadlineDecorationVisible = true;
  
  skillsIcons = [
    { name: 'HTML', icon: 'html.png' },
    { name: 'CSS', icon: 'css.png' },
    { name: 'JavaScript', icon: 'javaScript.png' },
    { name: 'TypeScript', icon: 'typeScript.png' },
    { name: 'Angular', icon: 'angular.png' },
    { name: 'Firebase', icon: 'firebase.png' },
    { name: 'Git', icon: 'git.png' },
    { name: 'Rest API', icon: 'api.png' },
    { name: 'Scrum', icon: 'scrum.png' },
    { name: 'Material Design', icon: 'material-design.png' },
  ];
}
