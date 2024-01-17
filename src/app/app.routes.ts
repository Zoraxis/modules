import { Routes } from '@angular/router';
import { ModuleComponent } from './components/modules/module/module.component';
import { ModuleListComponent } from './components/modules/module-list/module-list.component';

export const routes: Routes = [
   { path: '', component: ModuleListComponent},
   { path: ':category/:prop/:module', component: ModuleComponent, },
];
