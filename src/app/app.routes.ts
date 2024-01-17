import { Routes } from '@angular/router';
import { ModuleComponent } from './components/module/module.component';
import { ModuleListComponent } from './components/module-list/module-list.component';

export const routes: Routes = [
   { path: '', component: ModuleListComponent},
   { path: ':category/:prop/:module', component: ModuleComponent, },
];
