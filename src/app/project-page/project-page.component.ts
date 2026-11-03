import { Component, inject } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-project-page',
  standalone: false,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent{
  private readonly globalService = inject(GlobalService);

  readonly projects$ = this.globalService.projects$;

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
