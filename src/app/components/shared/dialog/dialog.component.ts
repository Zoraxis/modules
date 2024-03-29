import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

export interface DialogData {
  title: string;
  descr: string;
  btn: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    ButtonComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  close = () => {
    this.dialogRef.close();
  };
}
