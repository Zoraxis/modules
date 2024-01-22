import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/apiservice/apiservice.service';
import { Module } from '../../../models/Module';
import { Observable, take } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GoogleIconComponent } from '../../shared/google-icon/google-icon.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [
    HttpClientModule,
    GoogleIconComponent,
    ButtonComponent,
    RouterModule,
    NgIf,
    NgClass,
  ],
  providers: [ApiService, HttpClient, HttpClientModule],
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss',
})
export class ModuleComponent implements OnInit {
  public data$: Observable<Module> = new Observable();

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit()  {
    await this.getSlugParameters();
    const paramMap = this.route.snapshot.paramMap;
  };
  module: Module = new Module();

  private createModuleURL = (categoryId: string, prop: string, id: string) =>
    `${categoryId}/${prop}/${id}`;

  private getModuleURL = () => {
    const paramMap = this.route.snapshot.paramMap;
    const categoryId = paramMap.get('category');
    const prop = paramMap.get('prop');
    const id = paramMap.get('module');

    if (categoryId === null || prop === null || id === null) return;

    return this.createModuleURL(categoryId, prop, id);
  };

  getSlugParameters = async () => {
    const url = this.getModuleURL();
    this.module = (await this.api.fetchModules(url)) as Module;
  };

  choose = () => {
    localStorage.setItem(this.module.title, 'true');
    this.router.navigate(['/']);
  };

  turned = false;

  turn = () => {
    this.turned = !this.turned;
  };
}
