import { Injectable } from '@angular/core';
import { TopTab } from '../../models/toptab';

@Injectable({ providedIn: 'root' })
export class TopTabService {
  tabList: TopTab[] = [];
  constructor() {
    this.tabList = [
      {
        name: 'Dashboard',
        image: null,
        url: '',
        canClose: false,
        active: true,
      },
      /*{
        name: 'Test1',
        image: '',
        url: '/',
        canClose: true,
        active: true
      },
      {
        name: 'Test2',
        image: '',
        url: '/',
        canClose: true,
        active: true
      },
      {
        name: 'Test3',
        image: '',
        url: '/',
        canClose: true,
        active: true
      },
      {
        name: 'Test4',
        image: '',
        url: '/',
        canClose: true,
        active: true
      },
      {
        name: 'Test5',
        image: '',
        url: '/',
        canClose: true,
        active: true
      },
      {
        name: 'Test6',
        image: '',
        url: '/',
        canClose: true,
        active: true
      },*/
    ];
  }

  getTabs(): TopTab[] {
    return this.tabList;
  }

  addTab(tab: TopTab): void {
    // console.log(tab);
    this.tabList.push(tab);
    this.activateTab(tab);
  }

  findTabByUrl(url: string): boolean {
    let found = false;
    this.tabList.forEach((tab, idx, arr) => {
      if (tab.url === url) {
        found = true;
      }
    });
    return found;
  }

  activateTab(tab: TopTab): void {
    this.tabList.forEach((element) => {
      element.active = element.url === tab.url;
    });
  }
}
