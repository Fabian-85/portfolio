import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  isHeadlineDecorationVisible = false;
  currentLanguage: string = 'en';
  projectService = inject(ProjectService);

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.isHeadlineDecorationVisible = false;
    this.subscribeRouteParams();
    this.setLanguage();
    setTimeout(() => {
      this.underlinedHeadline();
    }, 1000);
  }

  subscribeRouteParams(): void {
    this.route.params.subscribe((param) => {
      this.projectService.currentProjectID = param['projectName'];
      this.projectService.findCurrentProjectWithID();
    });
  }

  setLanguage(): void {
    this.currentLanguage =
      this.translateService.currentLang ||
      this.translateService.getDefaultLang();
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  underlinedHeadline(): void {
    this.isHeadlineDecorationVisible = true;
  }
}
