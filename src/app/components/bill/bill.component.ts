import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModuleCategory } from '../../models/ModuleCategory';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [NgFor, NgIf, DialogComponent, ButtonComponent],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.scss',
})
export class BillComponent {
  @Input('categories') categories = [new ModuleCategory()];
  constructor(public dialog: MatDialog) {}

  total: number = this.getTotal();

  getTotal() {
    this.total = this.categories
      .map((c) => c.modules)
      .reduce((acc, curr) => {
        return acc + curr.reduce((acc, curr) => acc + curr.price, 0);
      }, 0);
    return this.total;
  }

  checkBill() {
    for (const cateogory of this.categories) {
      if (cateogory.modules.length === 0) {
        return false;
      }
    }
    return true;
  }

  submit = () => {
    let dialogProps = {};
    if (this.checkBill()) {
      dialogProps = {
        data: {
          title: 'COOL',
          descr: 'Thanks for your purchase!',
          btn: 'WOW',
        },
      };
    } else {
      dialogProps = {
        data: {
          title: 'Error',
          descr: 'Please select at least one module of each category',
          btn: 'Close',
        },
      };
    }
    const dialogRef = this.dialog.open(DialogComponent, dialogProps);
  };
}
