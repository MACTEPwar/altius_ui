import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MainMenu } from '../models/mainmenu';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plitka',
  templateUrl: './plitka.component.html',
  styleUrls: ['./plitka.component.scss'],
})
export class PlitkaComponent implements OnInit {
  /** Эл-нт меню */
  @Input() item: MainMenu;
  /** Количество детей в троке */
  @Input() itemsPreRow: number = 3;
  /** Подменю */
  childs: TreeNode[];
  /** Индекс показываемой строки детей */
  rowIndexDisplayedChildren?: number = -1;

  @Output() onClick = new EventEmitter<any>();
  @Input() incomingSelect: any;

  selectedItem: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  /** Создает фейковый массив */
  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  /** Отдает индекс эл-нта по его строке и столбцу */
  ind(i: number, j: number): number {
    return (i - 1) * this.itemsPreRow + (j - 1);
  }

  /** Получает количество строк */
  getRowCount(): number {
    return Math.ceil((this.item.children.length || 0) / this.itemsPreRow);
  }

  /** При нажатии на самый верхний элемент */
  onFirstParentClick(i: number, j: number, rowIndex: number): void {
    // console.log(i, j, rowIndex);
    this.childs = [];
    this.rowIndexDisplayedChildren = rowIndex;
    const ind = this.ind(i, j);
    if (
      !this.item.children[ind].children ||
      this.item.children[ind].children.length === 0
    ) {
      this.router.navigate([this.item.children[ind].url]);
    } else {
      this.childs = this.menuItem2TreeNodePipe(
        this.item.children[ind].children
      );
    }
    this.selectedItem = this.item.children[ind];
    this.onClick.emit(this.selectedItem);
  }

  /** При нажатии на любую ноду (от 2 уровня и выше) */
  onNodeSelect(event) {
    if (event.node.children && event.node.children.length > 0) {
      event.node.expanded = !event.node.expanded;
    } else {
      // console.log('url -- > ', event.node.data);
      this.router.navigate([event.node.data]);
    }
  }

  /** Превращает меню в дерево */
  menuItem2TreeNodePipe(value: MainMenu[]): TreeNode[] {
    if (value) {
      const result: TreeNode[] = value.map((m) => {
        let tn: TreeNode = {
          label: m.name,
          data: m.url,
        };

        if (m.children && m.children.length > 0) {
          tn.expandedIcon = 'pi pi-folder-open';
          tn.collapsedIcon = 'pi pi-folder';
          tn.children = this.menuItem2TreeNodePipe(m.children);
        } else {
          tn.type = 'picture';
        }

        return tn;
      });
      return result;
    } else {
      return null;
    }
  }
}
