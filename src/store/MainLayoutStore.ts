import { makeAutoObservable } from 'mobx';
import type { Tab } from '../layouts/MainLayout/entity';

class MainLayoutStore {
  activeTab: Tab = { label: '', id: '' };
  openedTabs: Tab[] = [{ label: 'awdad', id: '1' }, { label: 'asdsad', id: '2' }];

  constructor() {
    makeAutoObservable(this);
  }

  setActiveTab(tab: Tab) {
    this.activeTab = tab;
  }

  addTabToOpened(tab: Tab) {
    this.openedTabs.push(tab);
  }

  removeTabFromOpened(tabId: string) {
    this.openedTabs = this.openedTabs.filter((tab) => tab.id !== tabId);
  }
}

export const mainLayoutStore = new MainLayoutStore();
