import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';

import { ModuleBlockComponent } from './module-block.component';
import { first } from 'rxjs';
import { ModuleStateChangedEvent } from '../category/category.component';
import { Module } from '../../../models/Module';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../../app.routes';
import { Location } from '@angular/common';

describe('ModuleBlockComponent', () => {
  let location: Location;
  let component: ModuleBlockComponent;
  let fixture: ComponentFixture<ModuleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleBlockComponent, RouterTestingModule.withRoutes(routes)],
    }).compileComponents();

    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ModuleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be clickable', fakeAsync(() => {
    spyOn(component, 'toggleSelected');

    let button = fixture.debugElement.nativeElement.querySelector('.module');
    button.click();

    tick();

    expect(component.toggleSelected).toHaveBeenCalled();
  }));

  it('should emit new state on click', fakeAsync(() => {
    const module = {
      module: new Module('test', 0, 'test'),
    };

    const selectedModule: ModuleStateChangedEvent = {
      isSelected: true,
      title: module.module.title,
    };
    const notSelectedModule: ModuleStateChangedEvent = {
      isSelected: false,
      title: module.module.title,
    };
    const button = fixture.debugElement.nativeElement.querySelector('.module');

    //wait for ngInit
    tick(1000);
    flush();

    //set is Selected to false
    component.selected = false;
    //set module
    component.module = module;
    //when module is selected
    let sub = component.onSelectedChanged
      .pipe(first())
      .subscribe((m: ModuleStateChangedEvent) => {
        //check if data was sent
        expect(m).toEqual(selectedModule);
        sub.unsubscribe();
      });
    //simulate click
    button.click();

    //when module is selected
    sub = component.onSelectedChanged
      .pipe(first())
      .subscribe((m: ModuleStateChangedEvent) => {
        //check if correct data was sent
        expect(m).toEqual(notSelectedModule);
        sub.unsubscribe();
      });
    //simulate click
    button.click();
  }));

  it('should redirect to detail page', fakeAsync(() => {
    //generate fake module
    const module = {
      module: new Module('test', 0, 'test'),
      id: 1,
      categoryId: 1,
    };
    component.module = module;

    const button = fixture.debugElement.nativeElement.querySelector('.module');
    //simulate doubleclick
    button.dispatchEvent(new Event('dblclick'));

    //wait
    tick();

    //check if client was redirected to correct page
    expect(location.path()).toBe('/1/modules/1');
  }));
});
