import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  hover = false;
  currentLanguage: string = 'en';
  @Input()
  project: {
    projectID: string;
    projectName: string;
    projectDescription: { de: string; en: string };
    projectImg: string;
  } = {
    projectID: 'Sharkie',
    projectName: 'Sharkie',
    projectDescription: {
      de: 'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharky, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
      en: 'A simple jump-and-run game with an object-oriented approach. Help Sharky collect coins and poison bottles to fight the killer whale.',
    },
    projectImg: 'assets/img/projects/sharkie.png',
  };

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.currentLanguage =
      this.translateService.currentLang || this.translateService.getDefaultLang();
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

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
