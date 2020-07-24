import {Filter} from '../../models/filter/filter';
import {FilterValue} from '../../models/filtervalue';
import {Paging} from '../../models/paging';
import { Observable } from 'rxjs';

export interface ITableService{

  getController(): string;

  getAllItems();

  getCount();

  getFilter();

  // getItems(filter: Filter[], values: FilterValue[], paging: Paging);
  getItems(filter: Filter[], values: FilterValue[], paging);

  getTemplate(short: boolean): Observable<any>;

  // getFullTemplate();

  getItem(id: string);

  putItem(item: any);

  deleteItem(id: string);

}
