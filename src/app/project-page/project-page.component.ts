import { Component, inject } from '@angular/core';
import { Project } from '../models/projects';
import { RestService } from '../rest-service/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-page',
  standalone: false,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent{
  projects: Project[];
  private readonly restService = inject(RestService);

  projects$: Observable<Project[]> = this.restService.getProjects();

  navigateToProject(url: string | null | undefined): void {
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
