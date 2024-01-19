import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ModuleCategory } from '../../../models/ModuleCategory';
import { NgFor } from '@angular/common';
import { BillComponent } from '../bill/bill.component';
import { ApiService } from '../../../service/apiservice/apiservice.service';
import { Observable, Subject, firstValueFrom, take } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-module-list',
  standalone: true,
  imports: [CategoryComponent, NgFor, BillComponent, HttpClientModule],
  providers: [ApiService, HttpClient, HttpClientModule],
  templateUrl: './module-list.component.html',
  styleUrl: './module-list.component.scss',
})
export class ModuleListComponent implements OnInit {
  public data$: Observable<ModuleCategory[]> = new Observable();

  constructor(private api: ApiService) {}

  categories: ModuleCategory[] = [];
  selectedCategroies: ModuleCategory[] = [];

  async ngOnInit() {
    this.data$ = this.api.getAll();
    const data = await firstValueFrom(this.data$);
    this.categories.push(...data);
    this.selectedCategroies = this.categories.map((category) => {
      return {
        title: category.title,
        modules: [],
      };
    });
  }

  selectedModuleChanged(data: any) {
    const modules = this.selectedCategroies.find(
      (c) => c.title == data.title
    )?.modules;
    if (data.isSelected) {
      modules?.push(data.module);
      localStorage.setItem(data.module.title, data.isSelected);
    } else {
      modules?.splice(modules.indexOf(data.module), 1);
      localStorage.removeItem(data.module.title);
    }
  }
}
