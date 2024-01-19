import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ModuleComponent } from './module.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { routes } from '../../../app.routes';
import { Module } from '../../../models/Module';

describe('ModuleComponent', () => {
  let component: ModuleComponent;
  let fixture: ComponentFixture<ModuleComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ModuleComponent,
        RouterTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
    }).compileComponents();

    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be choosable', fakeAsync(() => {
    //creating fake module
    const module = new Module('test', 0, 'test');
    component.module = module;

    let button = fixture.debugElement.nativeElement.querySelector('.button');
    //simulating button press
    button.click();

    tick();

    //getting saved module
    const saveSelected = localStorage.getItem('test');

    //checking if the module was saved
    expect(location.path()).toBe('/');
    //checking if client was redirected to home page
    expect(saveSelected).toBe("true");

    //cleaning up
    localStorage.removeItem('test');
  }));
});
