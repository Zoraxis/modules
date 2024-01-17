import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input('label') label: string | number = 'label';
  @Input('alt') alt: string | number = 'alt';
  @Input('onClick') click = () => {};
}
