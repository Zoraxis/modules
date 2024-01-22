import { Module } from '../models/Module';

export type ModuleStateChangedEvent = {
  isSelected: boolean;
  title: string;
};

export type CategoryModuleStateChangedEvent = {
  module: Module;
  isSelected: boolean;
  title: string;
};
