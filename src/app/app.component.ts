import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModuleListComponent } from './components/modules/module-list/module-list.component';
import { ApiService } from './service/apiservice/apiservice.service';
import { TransitionComponent } from './components/shared/transition/transition.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ModuleListComponent, TransitionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService],
})
export class AppComponent {
  title = 'modules';
}
