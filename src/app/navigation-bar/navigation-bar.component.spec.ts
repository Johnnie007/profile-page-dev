import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import { RouterModule } from '@angular/router';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationBarComponent],
      imports: [ RouterModule.forRoot([]) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the mobile navigation and expose its state', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.menu-toggle');
    const navigation: HTMLElement = fixture.nativeElement.querySelector('#primary-navigation');

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(navigation.classList.contains('mobile-menu-open')).toBe(false);

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.getAttribute('aria-label')).toBe('Close navigation menu');
    expect(navigation.classList.contains('mobile-menu-open')).toBe(true);

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(navigation.classList.contains('mobile-menu-open')).toBe(false);
  });

  it('should close the menu after selecting a navigation link', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    const projectsLink: HTMLAnchorElement = fixture.nativeElement.querySelector(
      'a[routerLink="/projects"]'
    );
    projectsLink.click();
    fixture.detectChanges();

    expect(component.isMenuOpen).toBe(false);
    expect(fixture.nativeElement.querySelector('#primary-navigation').classList.contains('mobile-menu-open')).toBe(false);
  });
});
