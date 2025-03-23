import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { TranslateModule } from '@ngx-translate/core';
import { InViewDirective } from './../../in-view.directive';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, CommonModule,TranslateModule,InViewDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  isHeadlineDecorationVisible = true;
  projectService = inject(ProjectService);

  handleInView(isVisible: any): void {
    if (isVisible) {
       this.isHeadlineDecorationVisible = true;
     }else{
       this.isHeadlineDecorationVisible = false;
     }
   }
}
