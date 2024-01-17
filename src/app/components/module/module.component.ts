import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/apiservice/apiservice.service';
import { Module } from '../../models/Module';
import { Observable, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ApiService, HttpClient, HttpClientModule],
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss',
})
export class ModuleComponent implements OnInit {
  public data$: Observable<Module> = new Observable();

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  module: Module = new Module();
  ngOnInit() {
    this.getSlugParameters();
  }

  getSlugParameters() {
    const paramMap = this.route.snapshot.paramMap;
    const id = paramMap.get('module');
    const categoryId = paramMap.get('category');
    const prop = paramMap.get('prop');
    this.data$ = this.api.getAll(`${categoryId}/${prop}/${id}`);
    this.data$.pipe(take(1)).subscribe((value) => {
      this.module = value;
    });
  }
}
