import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ProjectPageComponent } from './project-page.component';
import { Project } from '../models/projects';
import { RestService } from '../rest-service/rest.service';
import { ClientData } from '../models/clientData';
import { SharedIconsModule } from '../shared-icons.module';

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;
  const projects: Project[] = [
    {
      id: '1',
      name: 'Profile Page',
      category: 'Web',
      yearDeployed: new Date('2024-01-01'),
      link: 'https://example.com',
      stack: ['Angular'],
      image: 'profile-page.png',
    },
  ];
  const clientData: ClientData = {
    userDetails: {
      id: 'user-1',
      firstName: 'Test',
      lastName: 'User',
      mainText: 'Main',
      subText: 'Sub',
    },
    projects,
    books: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectPageComponent],
      imports: [SharedIconsModule],
      providers: [
        { provide: RestService, useValue: { getClientDetails: () => of(clientData) } },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose projects from the client data', () => {
    let result: Project[] | undefined;
    component.projects$.subscribe(projectsValue => result = projectsValue);

    expect(result).toEqual(projects);
  });

  it('should open a project URL in a new window', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    component.navigateToProject('https://example.com');

    expect(openSpy).toHaveBeenCalledWith(
      'https://example.com',
      '_blank',
      'noopener,noreferrer'
    );

    openSpy.mockRestore();
  });

  it('should not open a window when the project URL is missing', () => {
    const openSpy = vi.spyOn(window, 'open');
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    component.navigateToProject(null);

    expect(openSpy).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledWith('Project URL is missing');

    openSpy.mockRestore();
    warnSpy.mockRestore();
  });

  it('should log an error when opening the project URL fails', () => {
    const error = new Error('Unable to open window');
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => {
      throw error;
    });
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    component.navigateToProject('https://example.com');

    expect(errorSpy).toHaveBeenCalledWith('Failed to navigate to project:', error);

    openSpy.mockRestore();
    errorSpy.mockRestore();
  });
});
