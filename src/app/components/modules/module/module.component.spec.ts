import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleComponent } from './module.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModuleComponent', () => {
  let component: ModuleComponent;
  let fixture: ComponentFixture<ModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleComponent, RouterTestingModule ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
