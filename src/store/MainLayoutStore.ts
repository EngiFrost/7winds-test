import { makeAutoObservable } from 'mobx';
import type { ITab } from '../model/tab';

class MainLayoutStore {
  activeTab: ITab = { label: '', id: '' };
  openedTabs: ITab[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setActiveTab(tab: ITab) {
    if (this.activeTab.id !== tab.id) {
      this.activeTab = tab;
    }

    if (this.openedTabs.findIndex((t) => t.id === tab.id) === -1) {
      this.addTabToOpened(tab);
    }
  }

  addTabToOpened(tab: ITab) {
    this.openedTabs.push(tab);
  }

  removeTabFromOpened(tabId: string) {
    const newOpenedTabs = this.openedTabs.filter((tab) => tab.id !== tabId);
    this.openedTabs = newOpenedTabs;
    this.activeTab = newOpenedTabs.pop() || { label: '', id: '' };
  }
}

export const mainLayoutStore = new MainLayoutStore();
