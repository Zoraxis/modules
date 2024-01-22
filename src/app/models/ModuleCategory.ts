import { Module } from './Module';

export class ModuleCategory {
  title: string;
  modules: Module[];

  //TODO: avoid using default values
  constructor(title: string = 'Category', modules: Module[] = []) {
    this.title = title;
    this.modules = modules;
  }
}
