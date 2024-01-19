import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should click',fakeAsync( () => {
    spyOn(component, 'click');
  
    let button = fixture.debugElement.nativeElement.querySelector('.button');
    button.click();
  
    tick();
  
    expect(component.click).toHaveBeenCalled();
  }));
});
