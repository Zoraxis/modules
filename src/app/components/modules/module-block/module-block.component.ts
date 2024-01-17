import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Module } from '../../../models/Module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-block',
  standalone: true,
  imports: [NgClass],
  templateUrl: './module-block.component.html',
  styleUrl: './module-block.component.scss',
})
export class ModuleBlockComponent implements OnInit {
  constructor(private router: Router) {}
  @Input('module') module: any;

  @Output() onSelectedChanged = new EventEmitter<any>();

  selected: boolean = false;

  toggleSelected() {
    this.selected = !this.selected;
    this.onSelectedChanged.emit({
      isSelected: this.selected,
      title: this.module.module.title,
    });
  }

  moduleInfo() {
    this.router.navigate([
      `/${this.module.categoryId}/modules/${this.module.id}`,
    ]);
  }

  ngOnInit() {
    if (!localStorage.getItem(this.module.module.title)) return;
    this.toggleSelected();
  }
}
