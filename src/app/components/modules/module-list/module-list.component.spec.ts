import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';

import { ModuleListComponent } from './module-list.component';
import { firstValueFrom } from 'rxjs';
import { ModuleCategory } from '../../../models/ModuleCategory';
import { Module } from '../../../models/Module';

describe('ModuleListComponent', () => {
  let component: ModuleListComponent;
  let fixture: ComponentFixture<ModuleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should use data', async () => {
    for (let i = 0; i < 10; i++) {
      fixture.componentInstance.categories.push(
        new ModuleCategory(`test${i}`, [new Module('test', i * 100, 'test')])
      );
    }

    expect(component).toBeTruthy();
  });

  it('should recieve new module state', async () => {
    //seed data
    component.categories.push(
      new ModuleCategory('testc1', [new Module('test1', 0, 'test')])
    );
    component.categories.push(
      new ModuleCategory('testc2', [new Module('test2', 0, 'test')])
    );
    component.categories.push(
      new ModuleCategory('testc3', [new Module('test3', 0, 'test')])
    );
    component.categories.push(
      new ModuleCategory('testc4', [new Module('test4', 0, 'test')])
    );

    //set up selected array
    component.selectedCategroies = component.categories.map((category) => {
      return {
        title: category.title,
        modules: [],
      };
    });

    //set up expected data
    const expected = [
      ...component.selectedCategroies.slice(0, 3),
      {
        title: 'testc4',
        modules: [
          new Module('test4', 0, 'test'),
        ],
      },
    ]

    //generate event data
    const stateChange = {
      isSelected: true,
      title: 'testc4',
      module: new Module('test4', 0, 'test'),
    };

    //simulate event
    component.selectedModuleChanged(stateChange);

    //check if data was sent correctly
    expect(component.selectedCategroies).toEqual(expected);
  });
});
