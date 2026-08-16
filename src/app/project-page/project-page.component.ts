import { Component } from '@angular/core';
import { Project } from '../models/projects';

@Component({
  selector: 'app-project-page',
  standalone: false,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {

  projects: Project[] = [
    {
      id: "1",
      name: "Footprint",
      category: "Design & Engineering",
      yearDeployed: new Date("2021-07-20"),
      link: "https://github.com/",
      stack: ["Angular", "Spring Boot", "Java", "Typescript"]
    },
     {
      id: "2",
      name: "Footprint",
      category: "Design & Engineering",
      yearDeployed: new Date("2021-07-20"),
      link: "https://github.com/",
      stack: ["Angular", "Spring Boot", "Java", "Typescript"]
    },
     {
      id: "3",
      name: "Footprint",
      category: "Design & Engineering",
      yearDeployed: new Date("2021-07-20"),
      link: "https://github.com/",
      stack: ["Angular", "Spring Boot", "Java", "Typescript"]
    },
     {
      id: "4",
      name: "Footprint",
      category: "Design & Engineering",
      yearDeployed: new Date("2021-07-20"),
      link: "https://github.com/",
      stack: ["Angular", "Spring Boot", "Java", "Typescript"]
    },
  ];

  navigateToProject(url: string | null | undefined): void {
    console.log(url)
    if (!url) {
      console.warn('Project URL is missing');
      return;
    }

    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to navigate to project:', error);
    }
  }
}
