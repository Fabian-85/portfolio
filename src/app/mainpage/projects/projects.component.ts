import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      projectName: 'Join',
      projectSkills: ['JavaScript', 'HTML', 'CSS'],
      projectDescription:
        'Ein Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
      projectImg: 'assets/img/projects/join.png',
    },
    {
      projectName: 'Sharkie',
      projectSkills: ['JavaScript', 'HTML', 'CSS'],
      projectDescription:
        'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
      projectImg: 'assets/img/projects/sharkie.png',
    },
    {
      projectName: 'Simple CRM',
      projectSkills: ['Angular', 'Firebase'],
      projectDescription:
        'Ein sehr einfaches Customer Relationship Management (CRM)-System mit grundlegender CRUD-Funktionalität.',
      projectImg: 'assets/img/projects/simple-crm.png',
    },
    {
      projectName: 'Pokedex',
      projectSkills: ['JavaScript', 'HTML', 'CSS'],
      projectDescription:
        'Eine einfache Bibliothek basierend auf der PokéAPI, die Pokémon-Informationen bereitstellt und katalogisiert.',
      projectImg: 'assets/img/projects/pokedex.png',
    },
    {
      projectName: 'DA Bubble',
      projectSkills: ['Angular', 'Typescript', 'Firebase'],
      projectDescription:
        'Eine Slack-Klon-App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit durch eine intuitive Benutzeroberfläche, Echtzeit-Messaging und eine effiziente Kanalorganisation.',
      projectImg: 'assets/img/projects/dabubble.png',
    }
  ];
}
