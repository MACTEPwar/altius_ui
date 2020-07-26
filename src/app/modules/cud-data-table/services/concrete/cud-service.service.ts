import { Injectable, Type } from '@angular/core';
import { CreateDefaultContainerComponent } from '../../CUD-containers/create-containers/create-default-container/create-default-container.component';
import { DeleteDefaultContainerComponent } from '../../CUD-containers/delete-containers/delete-default-container/delete-default-container.component';
import { UpdateDefaultContainerComponent } from '../../CUD-containers/update-containers/update-default-container/update-default-container.component';

@Injectable({
  providedIn: 'root'
})
export class CUDService {

  table: TableElement[] = [
    // new TableElement('bank', CreateDefaultContainerComponent, eMode.CREATE),
  ] ;

  constructor(){}

  getCreateTypeModal(routeName: string): Type<any> {
    return  this.table?.filter(f => f.name === routeName && f.mode === eMode.CREATE)[0]?.type ?? CreateDefaultContainerComponent;
  }

  getUpdateTypeModal(routeName: string): Type<any> {
    return  this.table?.filter(f => f.name === routeName && f.mode === eMode.UPDATE)[0]?.type ?? UpdateDefaultContainerComponent;
  }

  getDeleteTypeModal(routeName: string): Type<any> {
    return  this.table?.filter(f => f.name === routeName && f.mode === eMode.DELETE)[0]?.type ?? DeleteDefaultContainerComponent;
  }
}

class TableElement{
  name: string;
  type: Type<any>;
  mode: eMode;

  constructor(name, type, mode){
    this.name = name;
    this.type = type;
    this.mode = mode;
  }
}

export enum eMode {
  CREATE,
  UPDATE,
  DELETE
}