import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageComponent } from './about-page.component';
import { LucideArrowUpRight, LucideBookOpen, LucideOctagonMinus } from '@lucide/angular';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPageComponent],
      imports:[LucideArrowUpRight, LucideBookOpen]
    });
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
