import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, CommonModule,TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  isHeadlineDecorationVisible = true;
  projectService = inject(ProjectService);
}
