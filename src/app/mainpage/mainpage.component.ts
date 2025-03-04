import { Component } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { ContactFormularComponent } from "./contact-formular/contact-formular.component";
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [AboutMeComponent, AboveTheFoldComponent, ContactFormularComponent, SkillSetComponent, ProjectsComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
