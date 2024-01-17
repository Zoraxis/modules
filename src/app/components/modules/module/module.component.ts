import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/apiservice/apiservice.service';
import { Module } from '../../../models/Module';
import { Observable, take } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GoogleIconComponent } from '../../shared/google-icon/google-icon.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [
    HttpClientModule,
    GoogleIconComponent,
    ButtonComponent,
    RouterModule,
    NgIf
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

  ngOnInit() {
    this.getSlugParameters();
  }
  module: Module = new Module();

  getSlugParameters() {
    const paramMap = this.route.snapshot.paramMap;
    const categoryId = paramMap.get('category');
    const prop = paramMap.get('prop');
    const id = paramMap.get('module');
    this.data$ = this.api.getAll(`${categoryId}/${prop}/${id}`);
    this.data$.pipe(take(1)).subscribe((value) => {
      this.module = value;
    });
  }

  choose = () => {
    localStorage.setItem(this.module.title, 'true');
    this.router.navigate(['/']);
  };
}
