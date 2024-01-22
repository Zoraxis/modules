import { ModuleCategory } from './../../../models/ModuleCategory';
import { Module } from './../../../models/Module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillComponent } from './bill.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';

describe('BillComponent', () => {
  let component: BillComponent;
  let fixture: ComponentFixture<BillComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
  });

  it('should open dialog', async () => {
    //getting initial dialogs count
    let dialogs = await loader.getAllHarnesses(MatDialogHarness);
    const initDialogsLength = dialogs.length;

    //opening 1 dialog
    fixture.componentInstance.submit();

    dialogs = await loader.getAllHarnesses(MatDialogHarness);
    //checking if there is one dialog more than at the beginning
    expect(dialogs.length).toBe(initDialogsLength + 1);
  });

  it('should close dialog', async () => {
    //getting initial dialogs count
    let dialogs = await loader.getAllHarnesses(MatDialogHarness);
    const initDialogsLength = dialogs.length;

    //opening two dialogs
    fixture.componentInstance.submit();
    fixture.componentInstance.submit();

    dialogs = await loader.getAllHarnesses(MatDialogHarness);
    //checking if there are two dialogs more than before
    expect(dialogs.length).toBe(initDialogsLength + 2);

    //closing one dialog
    await dialogs[0].close();
    dialogs = await loader.getAllHarnesses(MatDialogHarness);
    //checking if there is one dialogs more than at the beginning
    expect(dialogs.length).toBe(initDialogsLength + 1);

    //closing one more dialog
    await dialogs[0].close();
    dialogs = await loader.getAllHarnesses(MatDialogHarness);
    //checking if there are as many dialogs as at the beginning
    expect(dialogs.length).toBe(initDialogsLength);
  });

  it('should check the bill', async () => {
    //seeding bill with empty categories
    fixture.componentInstance.categories = [
      new ModuleCategory('FMEA', []),
      new ModuleCategory('Control Plan', []),
      new ModuleCategory('Fertigungsprüfung', []),
      new ModuleCategory('Reklamationsmanagment', []),
      new ModuleCategory('Maßnahmenmanagment', []),
    ];
    //checking if the bill is valid
    expect(fixture.componentInstance.checkCategorySelected()).toBe(false);

    //seeding bill with all but one category
    fixture.componentInstance.categories[0].modules.push(new Module());
    fixture.componentInstance.categories[1].modules.push(new Module());
    fixture.componentInstance.categories[2].modules.push(new Module());
    fixture.componentInstance.categories[3].modules.push(new Module());
    //checking if the bill is valid
    expect(fixture.componentInstance.checkCategorySelected()).toBe(false);

    //adding last category
    fixture.componentInstance.categories[4].modules.push(new Module());
    //checking if the bill is valid
    expect(fixture.componentInstance.checkCategorySelected()).toBe(true);
  });

  it('should calculate total price', async () => {
    //seeding bill with empty categories
    fixture.componentInstance.categories = [
      new ModuleCategory('FMEA', []),
      new ModuleCategory('Control Plan', []),
      new ModuleCategory('Fertigungsprüfung', []),
      new ModuleCategory('Reklamationsmanagment', []),
      new ModuleCategory('Maßnahmenmanagment', []),
    ];
    //checking if the total is 0
    expect(fixture.componentInstance.getTotal()).toBe(0);

    //seeding bill with all but one category
    fixture.componentInstance.categories[0].modules.push(
      new Module('FMEA', 100)
    );
    fixture.componentInstance.categories[1].modules.push(
      new Module('Control Plan', 200)
    );
    fixture.componentInstance.categories[2].modules.push(
      new Module('Fertigungsprüfung', 300)
    );
    fixture.componentInstance.categories[3].modules.push(
      new Module('Reklamationsmanagment', 400)
    );
    //checking if the total is 1000
    expect(fixture.componentInstance.getTotal()).toBe(1000);

    //adding last category
    fixture.componentInstance.categories[4].modules.push(
      new Module('Maßnahmenmanagment', 500)
    );
    //checking if the total is 1500
    expect(fixture.componentInstance.getTotal()).toBe(1500);
  });
});
