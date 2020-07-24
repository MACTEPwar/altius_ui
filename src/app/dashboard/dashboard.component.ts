import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { MainMenu } from '../models/mainmenu';
import { MainMenuService } from '../services/concrete/mainmenu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items: MainMenu[];
  currentDraggableItem: MainMenu = null;

  selectedItem: any;

  onPlitkaCkick(event: any) {
    // console.log(event);
    this.selectedItem = event;
  }

  constructor(private helpers: MainMenuService) {}

  ngOnInit(): void {
    this.helpers
      .getMenu()
      .pipe()
      .subscribe((menu) => (this.items = menu));
  }

  onDrop(event): void {
    let target = event.target.closest('app-plitka');
    if (!event.target.closest('app-plitka')) {
      target = event.target.querySelectorAll('app-plitka')[0];
    }
    this.array_move(
      this.currentDraggableItem.id,
      parseInt(target.getAttribute('data-id'))
    );
    this.currentDraggableItem = null;
  }

  onDragStart(event, item): void {
    // console.log(event.target, item);
    this.currentDraggableItem = item;
  }

  array_move(idOne: number, idTwo: number): void {
    const old_index = this.items.findIndex((f) => f.id === idOne);
    const new_index = this.items.findIndex((f) => f.id === idTwo);
    if (new_index >= this.items.length) {
      var k = new_index - this.items.length + 1;
      while (k--) {
        this.items.push(undefined);
      }
    }
    this.items.splice(new_index, 0, this.items.splice(old_index, 1)[0]);
  }
}
