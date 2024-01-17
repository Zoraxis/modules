import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleBlockComponent } from './module-block.component';

describe('ModuleComponent', () => {
  let component: ModuleBlockComponent;
  let fixture: ComponentFixture<ModuleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
