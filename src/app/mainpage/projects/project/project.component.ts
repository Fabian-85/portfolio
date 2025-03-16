import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  hover = false;

  @Input()
  project: {
    projectID: string;
    projectName: string;
    projectSkills: string[];
    projectDescription: string;
    projectImg: string;
  } = {
    projectID: 'Sharkie',
    projectName: 'Sharkie',
    projectSkills: ['JavaScript', 'HTML', 'CSS'],
    projectDescription:
      'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
    projectImg: 'assets/img/projects/sharkie.png',
  };
  constructor(private router: Router) {}

  showProjectDetailsButton() {
    this.hover = true;
  }

  removeProjectDetailsButton() {
    this.hover = false;
  }

  navigateToSingleProject(projectID: string) {
    this.router.navigateByUrl('/project/' + projectID);
  }
}
