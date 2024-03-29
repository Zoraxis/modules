import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModuleBlockComponent } from '../module-block/module-block.component';
import { NgClass, NgFor } from '@angular/common';
import { Module } from '../../../models/Module';
import { CategoryModuleStateChangedEvent, ModuleStateChangedEvent } from '../../../types/ModuleStateChanged';

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

  @Output() onSelectedModuleChanged = new EventEmitter<CategoryModuleStateChangedEvent>();

  selectedModules: Array<string> = [];

  moduleSelectedChanged(data: ModuleStateChangedEvent) {
    //TODO: this actually would be great in an service, which can be even unit tested
    if (data.isSelected) {
      this.selectedModules.push(data.title);
    } else {
      this.selectedModules.splice(this.selectedModules.indexOf(data.title), 1);
    }

    const module = this.modules.find((m) => m.title === data.title);

    if (!module) return;

    this.onSelectedModuleChanged.emit({
      module: module,
      isSelected: data.isSelected,
      title: this.title,
    });
  }
}
