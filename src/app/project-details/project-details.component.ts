import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  isHeadlineDecorationVisible = true;
  projectService = inject(ProjectService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.route.params.subscribe((param) => {
      this.projectService.currentProjectID = param['projectName'];
    this.projectService.findCurrentProjectWithID();
    });
   
  }
}
