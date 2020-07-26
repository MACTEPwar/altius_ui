import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { eIconType, ToolbarItem } from '../../models/toolbar';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() toolbarItem: ToolbarItem = null;

  @Input() icon: string;
  @Input() name: string;
  @Input() type: eIconType = eIconType.fontawesome;

  @Output() call: EventEmitter<any> = new EventEmitter<any>();

  onClick(event: any): void {
    this.call.emit(event);
  }

  eToolbarItem = eIconType;
  ngOnInit(): void {
    if (!this.toolbarItem) {
      this.toolbarItem = new ToolbarItem(this.name, this.icon, this.type);
    }
  }
}
