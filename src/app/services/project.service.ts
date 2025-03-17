import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  currentProjectID: string | undefined;

  currentIndex: number = 0;

  currentProject: {
    projectID: string;
    projectName: string;
    projectSkills: string[];
    projectSkillImg: string[];
    projectDescription: string;
    projectDetails: string;
    projectImg: string;
  } = {
    projectID: 'Sharkie',
    projectName: 'Sharkie',
    projectSkillImg: ['javaScript.png', 'html.png', 'css.png'],
    projectSkills: ['JavaScript', 'HTML', 'CSS'],
    projectDescription:
      'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
    projectDetails: '',
    projectImg: 'assets/img/projects/sharkie.png',
  };

  projects = [
    {
      projectID: 'Join',
      projectName: 'Join',
      projectSkills: ['CSS', 'HTML', 'Firebase', 'JavaScript'],
      projectSkillImg: [
        'css.png',
        'html.png',
        'firebase.png',
        'javaScript.png',
      ],
      projectDescription:
        'Ein Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
      projectDetails:
        'Ein Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
      projectImg: 'assets/img/projects/join.png',
    },
    {
      projectID: 'Sharkie',
      projectName: 'Sharkie',
      projectSkills: ['JavaScript', 'HTML', 'CSS'],
      projectSkillImg: ['javaScript.png', 'html.png', 'css.png'],
      projectDescription:
        'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
      projectDetails:
        'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
      projectImg: 'assets/img/projects/sharkie.png',
    },
    {
      projectID: 'Simple-CRM',
      projectName: 'Simple CRM',
      projectSkills: ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript'],
      projectSkillImg: [
        'css.png',
        'html.png',
        'firebase.png',
        'angular.png',
        'typeScript.png',
      ],
      projectDescription:
        'Ein sehr einfaches Customer Relationship Management (CRM)-System mit grundlegender CRUD-Funktionalität.',
      projectDetails:
        'Ein sehr einfaches Customer Relationship Management (CRM)-System mit grundlegender CRUD-Funktionalität.',
      projectImg: 'assets/img/projects/simple-crm.png',
    },
    {
      projectID: 'Pokedex',
      projectName: 'Pokedex',
      projectSkills: ['Rest API', 'JavaScript', 'CSS', 'HTML'],
      projectSkillImg: ['api.png', 'javaScript.png', 'html.png', 'css.png'],
      projectDescription:
        'Eine einfache Bibliothek basierend auf der PokéAPI, die Pokémon-Informationen bereitstellt und katalogisiert.',
      projectDetails:
        'Eine einfache Bibliothek basierend auf der PokéAPI, die Pokémon-Informationen bereitstellt und katalogisiert.',
      projectImg: 'assets/img/projects/pokedex.png',
    },
    {
      projectID: 'DA-Bubble',
      projectName: 'DA Bubble',
      projectSkills: ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript'],
      projectSkillImg: [
        'css.png',
        'html.png',
        'firebase.png',
        'angular.png',
        'typeScript.png',
      ],
      projectDescription:
        'Eine Slack-Klon-App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit durch eine intuitive Benutzeroberfläche, Echtzeit-Messaging und eine effiziente Kanalorganisation.',
      projectDetails:
        'Eine Slack-Klon-App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit durch eine intuitive Benutzeroberfläche, Echtzeit-Messaging und eine effiziente Kanalorganisation.',
      projectImg: 'assets/img/projects/dabubble.png',
    },
  ];

  constructor(private router: Router) {}

  findCurrentProjectWithID() {
    for (let index = 0; index < this.projects.length; index++) {
      const project = this.projects[index];
      if (this.currentProjectID == project.projectID) {
        this.currentIndex = index;
        this.currentProject = project;
      }
    }
  }

  goToNextProject() {
    if (this.currentIndex >= this.projects.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.router.navigateByUrl(
      '/project/' + this.projects[this.currentIndex].projectID
    );
  }
}
