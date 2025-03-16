import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {

  projectService = inject(ProjectService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.route.params.subscribe((param) => {
      this.projectService.currentProjectID = param['projectName'];
    this.projectService.findCurrentProjectWithID();
    });
   
  }
}
