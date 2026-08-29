import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ProjectPageComponent } from './project-page.component';
import { Project } from '../models/projects';

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectPageComponent],
      providers: [
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('should create', () => {
    fixture.detectChanges();
    httpTesting.expectOne('assets/public/projects.json').flush([]);

    expect(component).toBeTruthy();
  });

  it('should expose projects returned by the API', () => {
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

    let result: Project[] | undefined;
    fixture.detectChanges();
    component.projects$.subscribe(projectsValue => result = projectsValue);

    httpTesting.expectOne('assets/public/projects.json').flush(projects);

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
