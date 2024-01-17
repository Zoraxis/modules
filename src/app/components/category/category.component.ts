import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModuleBlockComponent } from '../module-block/module-block.component';
import { NgClass, NgFor } from '@angular/common';
import { Module } from '../../models/Module';

export type ModuleStateChangedEvent = {
  isSelected: boolean;
  title: string;
};

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, NgClass, ModuleBlockComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input('title') title = 'Default';
  @Input('id') id: number = 0;
  @Input('modules') modules = [new Module()];

  @Output() onSelectedModuleChanged = new EventEmitter<any>();

  selectedModules: Array<string> = [];

  moduleSelectedChanged(data: ModuleStateChangedEvent) {
    if (data.isSelected) {
      this.selectedModules.push(data.title);
    } else {
      this.selectedModules.splice(this.selectedModules.indexOf(data.title), 1);
    }

    const module = this.modules.find((m) => m.title === data.title);

    this.onSelectedModuleChanged.emit({
      module: module,
      isSelected: data.isSelected,
      title: this.title,
    });
  }
}
