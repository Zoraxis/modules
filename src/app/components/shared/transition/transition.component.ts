import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transition',
  standalone: true,
  imports: [NgClass],
  templateUrl: './transition.component.html',
  styleUrl: './transition.component.scss'
})
export class TransitionComponent {
  isLeft = true;

  toggle = () => {
    this.isLeft = !this.isLeft;
  }
}
