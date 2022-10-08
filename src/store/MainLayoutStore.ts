import { makeAutoObservable } from 'mobx';
import type { ITab } from '../layouts/MainLayout/entity';

class MainLayoutStore {
  activeTab: ITab = { label: '', id: '' };
  openedTabs: ITab[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setActiveTab(tab: ITab) {
    this.activeTab = tab;
    this.addTabToOpened(tab)
  }

  addTabToOpened(tab: ITab) {
    this.openedTabs.push(tab);
  }

  removeTabFromOpened(tabId: string) {
    this.openedTabs = this.openedTabs.filter((tab) => tab.id !== tabId);
  }
}

export const mainLayoutStore = new MainLayoutStore();
