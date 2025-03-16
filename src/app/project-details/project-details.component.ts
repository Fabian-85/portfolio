import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  project: {
    projectName: string;
    projectSkills: string[];
    projectDescription: string;
    projectImg: string;
  } = {
    projectName: 'Sharkie',
    projectSkills: ['JavaScript', 'HTML', 'CSS'],
    projectDescription:
      'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
    projectImg: 'assets/img/projects/sharkie.png',
  };
}
