import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingPageComponent } from './shopping-page.component';
import { MaintenancePageComponent } from '../maintenance-page/maintenance-page.component';
import { SharedIconsModule } from '../shared-icons.module';
import { LucideWrench } from '@lucide/angular';

describe('ShoppingPageComponent', () => {
  let component: ShoppingPageComponent;
  let fixture: ComponentFixture<ShoppingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingPageComponent, MaintenancePageComponent],
      imports: [LucideWrench]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
