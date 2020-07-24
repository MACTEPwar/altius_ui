import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainMenu } from '../models/mainmenu';
import { MainMenuService } from '../services/concrete/mainmenu.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { of as observableOf, Observable } from 'rxjs';
import { TopTab } from '../models/toptab';
import { TopTabService } from '../services/concrete/toptab.service';
import { Router } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';
import { faThList, faTh } from '@fortawesome/pro-duotone-svg-icons';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { TreeNode as TNode } from 'node_modules/primeng/api';
import { environment } from '../../environments/environment';

interface Node {
  name: string;
  children?: Node;
}

interface TreeNode {
  expandable: boolean;
  name: string;
  level: number;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menu: MainMenu[] = [];
  public topTabs: TopTab[] = [];
  public myMenu: TNode[] = [];
  public displaySidebar: boolean = false;

  imagePath = environment.imagePath;
  faThList = faThList;
  faTimes = faTimes;
  faTh = faTh;

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;
  treeControl: FlatTreeControl<TreeNode>;
  treeFlattener: MatTreeFlattener<MainMenu, TreeNode>;
  dataSource: MatTreeFlatDataSource<MainMenu, TreeNode>;

  constructor(
    private mainmenuService: MainMenuService,
    private toptabService: TopTabService,
    private router: Router
  ) {}

  nodeSelect(e: any): void {
    if (
      !((e.node as TNode).children && (e.node as TNode).children.length > 0)
    ) {
      this.router.navigate([(e.node as TNode).data]);
      this.displaySidebar = false;
    }
  }

  menu2TNode(menu: MainMenu, parent: TNode): TNode {
    const res: TNode = {};
    res.label = menu.name;
    res.data = menu.url;
    res.parent = parent;
    const level = menu.level;
    const last = !(menu.children && menu.children.length > 0);
    if (!last && level == 1) {
      res.styleClass = 'menuTreeCatTitle';
      res.children = menu.children.map((m) => this.menu2TNode(m, menu));
    } else if (level == 2) {
      res.icon = menu.image;
      res.type = 'picture';
      res.children = menu.children.map((m) => this.menu2TNode(m, menu));
    } else if (level == 3) {
      res.styleClass = 'lastMenuLevel';
    } else {
      res.icon = menu.image;
      res.type = 'picture';
    }
    // console.log('----->', menu);
    return res;
  }

  ngOnInit(): void {
    this.loadMenu();
    this.loadTabs();
  }

  private loadMenu(): void {
    this.mainmenuService
      .getMenu()
      .pipe()
      .subscribe((menu: MainMenu[]) => {
        this.myMenu = menu.map((m) => this.menu2TNode(m, null));
      });
  }

  private loadTabs(): void {
    this.topTabs = this.toptabService.getTabs();
  }

  closeTab(event: Event, index: number): void {
    if (this.topTabs[index].active) {
      this.clickTab(this.topTabs[index - 1]);
    }
    this.topTabs.splice(index, 1);
    event.stopPropagation();
  }

  clickTab(tab: TopTab): void {
    this.toptabService.activateTab(tab);
    this.router.navigate([tab.url]);
  }
}
