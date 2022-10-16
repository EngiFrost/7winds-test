import { makeAutoObservable } from 'mobx';
import type { ITab } from '../model/tab';

const EMPTY_TAB = { abbreviation: '', id: '', label: '' };
class MainLayoutStore {
  activeTab: ITab = EMPTY_TAB;
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
    this.activeTab = newOpenedTabs.pop() || EMPTY_TAB;
  }
}

export const mainLayoutStore = new MainLayoutStore();

export const sidebarItems: ITab[] = [
  { id: 'item1', abbreviation: 'По проекту', label: 'По проекту' },
  { id: 'item2', abbreviation: 'Объекты', label: 'Объекты' },
  { id: 'item3', abbreviation: 'РД', label: 'Рабочая документация' },
  { id: 'item4', abbreviation: 'МТО', label: 'Материально-техническое обеспечение' },
  { id: 'item5', abbreviation: 'СМР', label: 'Строительно-монтажные работы' },
  { id: 'item6', abbreviation: 'График', label: 'График' },
  { id: 'item7', abbreviation: 'МиМ', label: 'Маркетинг и менеджмент' },
  { id: 'item8', abbreviation: 'Рабочие', label: 'Рабочие' },
  { id: 'item9', abbreviation: 'Капвложения', label: 'Капвложения' },
  { id: 'item10', abbreviation: 'Бюджет', label: 'Бюджет' },
  { id: 'item11', abbreviation: 'Финансирование', label: 'Финансирование' },
  { id: 'item12', abbreviation: 'Панорамы', label: 'Панорамы' },
  { id: 'item13', abbreviation: 'Камеры', label: 'Камеры' },
  { id: 'item14', abbreviation: 'Поручения', label: 'Поручения' },
  { id: 'item15', abbreviation: 'Контрагенты', label: 'Контрагенты' },
];
