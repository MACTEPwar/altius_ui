import { Component, OnInit } from '@angular/core';
import { ITableService } from 'src/app/services/interfaces/itable.service';

@Component({
  selector: 'app-update-default-container',
  templateUrl: './update-default-container.component.html',
  styleUrls: ['./update-default-container.component.scss']
})
export class UpdateDefaultContainerComponent implements OnInit {

  service: ITableService;
  item: any;
  template: any;
  containerRef: any;

  constructor() { }

  ngOnInit(): void {
    this.service.getTemplate(false).pipe().subscribe(template => this.template = template);
  }

  create(): void{
    this.service.putItem(this.item).pipe().subscribe();
  }

  close(): void {
    this.containerRef.clear();
  }

}
