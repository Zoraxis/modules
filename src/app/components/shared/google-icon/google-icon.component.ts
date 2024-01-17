import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-google-icon',
  standalone: true,
  imports: [],
  templateUrl: './google-icon.component.html',
  styleUrl: './google-icon.component.scss'
})
export class GoogleIconComponent {
  @Input() size: '18' | '24' | '36' | '48' | '96' | '512' = '512';
  @Input() icon: string = 'face';
}
