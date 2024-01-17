import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModuleListComponent } from './components/modules/module-list/module-list.component';
import { ApiService } from './service/apiservice/apiservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ModuleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService],
})
export class AppComponent {
  title = 'modules';
}
