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
    projectDescription: { de: string; en: string };
    projectDetails: { de: string; en: string };
    projectImg: string;
    gitHubUrl: string;
    testingUrl: string;
  } = {
    projectID: 'Sharkie',
    projectName: 'Sharkie',
    projectSkillImg: ['javaScript.png', 'html.png', 'css.png'],
    projectSkills: ['JavaScript', 'HTML', 'CSS'],
    projectDescription: {
      de: 'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
      en: 'A simple jump-and-run game with an object-oriented approach. Help Sharkie collect coins and poison bottles to fight the killer whale.',
    },
    projectDetails: {
      de: 'In diesem Projekt sammelte ich erste Erfahrungen in objektorientierter Programmierung mit JavaScript. Ich implementierte Bewegungsmechaniken für Spieler, Feinde und Objekte sowie Animationen, Soundeffekte und eine Kollisionserkennung für ein flüssiges Gameplay.',
      en: 'In this project, I gained my first experience in object-oriented programming with JavaScript. I implemented movement mechanics for players, enemies, and objects, as well as animations, sound effects, and collision detection for smooth gameplay.',
    },
    projectImg: 'assets/img/projects/sharkie.png',
    gitHubUrl: 'https://github.com/Fabian-85/sharky',
    testingUrl: 'https://sharky.fabian-maier-kumpukkattu.de',
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
      projectDescription: {
        de: 'Ein Task-Manager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
        en: 'A task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. A task manager inspired by the Kanban system. Create and organize tasks by drag-and-drop, assign users and categories.',
      },

      projectDetails: {
        de: 'Bei diesem Gruppenprojekt konnte ich erste Erfahrungen mit Firebase und Git sammeln. Ich war für die Erstellung und Darstellung von Aufgaben verantwortlich und implementierte die Drag-and-Drop-Funktionalität, um eine effiziente Aufgabenorganisation zu gewährleisten.',
        en: 'In this group project, I gained my first experience with Firebase and Git. I was responsible for creating and displaying tasks, and I implemented drag-and-drop functionality to ensure efficient task organization.',
      },
      projectImg: 'assets/img/projects/join.png',
      gitHubUrl: 'https://github.com/Fabian-85/join',
      testingUrl: 'https://join.fabian-maier-kumpukkattu.de',
    },

    {
      projectID: 'Sharkie',
      projectName: 'Sharkie',
      projectSkills: ['JavaScript', 'HTML', 'CSS'],
      projectSkillImg: ['javaScript.png', 'html.png', 'css.png'],
      projectDescription: {
        de: 'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Sharky, Münzen und Giftflaschen zu sammeln, um gegen den Killerwal zu kämpfen.',
        en: 'A simple jump-and-run game with an object-oriented approach. Help Sharky collect coins and poison bottles to fight the killer whale.',
      },

      projectDetails: {
        de: 'In diesem Projekt sammelte ich erste Erfahrungen in objektorientierter Programmierung mit JavaScript. Ich implementierte Bewegungsmechaniken für Spieler, Feinde und Objekte sowie Animationen, Soundeffekte und eine Kollisionserkennung für ein flüssiges Gameplay.',
        en: 'In this project, I gained my first experience in object-oriented programming with JavaScript. I implemented movement mechanics for players, enemies, and objects, as well as animations, sound effects, and collision detection for smooth gameplay.',
      },
      projectImg: 'assets/img/projects/sharkie.png',
      gitHubUrl: 'https://github.com/Fabian-85/Sharkie',
      testingUrl: 'https://sharkie.fabian-maier-kumpukkattu.de',
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
      projectDescription: {
        de: 'Ein einfaches Customer Relationship Management (CRM)-System mit grundlegender CRUD-Funktionalität.',
        en: 'A simple Customer Relationship Management (CRM) system working with CRUD functionality.',
      },
      projectDetails: {
        de: 'Dieses Projekt wurde als Angular-Anwendung umgesetzt. Es handelt sich um ein einfaches CRM-System mit vollständiger CRUD-Funktionalität.',
        en: 'This project was implemented as an Angular application. It is a simple CRM system with full CRUD functionality.',
      },
      projectImg: 'assets/img/projects/simple-crm.png',
      gitHubUrl: 'https://github.com/Fabian-85/',
      testingUrl: 'https://simple-crm.fabian-maier-kumpukkattu.de',
    },

    {
      projectID: 'Pokedex',
      projectName: 'Pokedex',
      projectSkills: ['Rest API', 'JavaScript', 'CSS', 'HTML'],
      projectSkillImg: ['api.png', 'javaScript.png', 'html.png', 'css.png'],
      projectDescription: {
        de: 'Eine einfache Bibliothek basierend auf der PokéAPI, die Pokémon-Informationen bereitstellt und katalogisiert.',
        en: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      },
      projectDetails: {
        de: 'Dieses Projekt ermöglichte mir erste Erfahrungen mit einer externen API in JavaScript. Mithilfe der PokéAPI werden relevante Daten abgerufen, um Pokémon-Informationen übersichtlich und ansprechend darzustellen. Eine responsive Benutzeroberfläche mit dynamischen Suchfunktionen optimiert das Nutzererlebnis.',
        en: 'This project gave me my first experience using an external API in JavaScript. With the help of the PokéAPI, relevant data is retrieved to display Pokémon information in a clear and appealing way. A responsive user interface with dynamic search functions further optimizes the user experience.',
      },
      projectImg: 'assets/img/projects/pokedex.png',
      gitHubUrl: 'https://github.com/Fabian-85/pokedex',
      testingUrl: 'https://pokedex.fabian-maier-kumpukkattu.de ',
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
      projectDescription: {
        de: 'Eine Slack-Klon-App. Sie revolutioniert die Teamkommunikation und -zusammenarbeit durch eine intuitive Benutzeroberfläche, Echtzeit-Messaging und eine effiziente Kanalorganisation.',
        en: 'This App is a Slack clone app. It revolutionizes team communication and collaboration  with its intuitive interface, real-time messaging, and robust channel organization.',
      },
      projectDetails: {
        de: 'Dieses Projekt nutzt Firebase Firestore für die Datenbankverwaltung und Firebase Authentication für die Benutzeranmeldung. Es ermöglicht zudem Echtzeitkommunikation und eine robuste Kanalorganisation zur Optimierung der Teamzusammenarbeit.',
        en: 'This project uses Firebase Firestore for database management and Firebase Authentication for user sign-in. It also enables real-time communication and robust channel organization to optimize team collaboration.',
      },
      projectImg: 'assets/img/projects/dabubble.png',
      gitHubUrl: 'https://github.com/Fabian-85/dabubble',
      testingUrl: 'https://dabubble.fabian-maier-kumpukkattu.de ',
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
