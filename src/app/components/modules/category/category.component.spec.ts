import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { Module } from '../../../models/Module';
import { first } from 'rxjs';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should use data', () => {
    component.title = 'test';
    component.id = 0;
    for (let i = 0; i < 10; i++) {
      component.modules.push(new Module('test', i * 100, 'test'));
    }

    expect(component).toBeTruthy();
  });

  it('should pass state data', () => {
    //seed data
    component.modules.push(new Module('test1', 0, 'test'));
    component.modules.push(new Module('test2', 0, 'test'));
    component.modules.push(new Module('test3', 0, 'test'));
    component.title = "test"
    component.id = 0;

    //set up expected data
    const expected = {
      isSelected: true,
      title: 'test',
      module: new Module('test1', 0, 'test'),
    };

    //subscribe to event
    let sub = component.onSelectedModuleChanged
      .pipe(first())
      .subscribe((m: any) => {
        //check if data was sent correctly
        expect(m).toEqual(expected);
        sub.unsubscribe();
      });
    //simulate event
    component.moduleSelectedChanged({
      isSelected: true,
      title: 'test1',
    });
  });
});
