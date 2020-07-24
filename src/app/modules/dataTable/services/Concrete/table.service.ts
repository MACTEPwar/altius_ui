import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ITableService } from '../interfaces/itable.service';
import { FilterValue } from '../../models/filtervalue';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

export class TableService extends BaseService implements ITableService {

  protected controller = '';
  protected identifier: string[] = [];

  constructor(http: HttpClient) {
    super(http);
  }

  getController(): string {
    return this.controller;
  }

  getAllItems(): Observable<any> {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/all`);
  }

  getCount(): Observable<any> {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/count`);
  }

  getFilter(): Observable<any> {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/getfilter`);
  }

  getItems(filters: any[], values: FilterValue[], paging): Observable<any> {
    let params = new HttpParams();
    const pageItems = paging.pageItems;
    const page = paging.page;
    if (filters && filters.length > 0) {
      filters.forEach((filter, ind) => {
        params = params.set(`filter.values[${ind}].nameModel`, filter.namemodel);
        params = params.set(`filter.values[${ind}].nameField`, filter.namefield);
        if (filter.value) {
          params = params.set(`filter.values[${ind}].value`, filter.value);
        }
        if (filter.order) {
          params = params.set(`filter.values[${ind}].order`, filter.order);
        }
      });
    }
    if (pageItems) { params = params.set('filter.paging.pageItems', pageItems.toString()); }
    if (page) { params = params.set('filter.paging.page', page.toString()); }
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/filter`, { params });
  }

  getTemplate(short: boolean = false): Observable<any> {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/header?shortHead=${short}`);
  }

  getItem(id: string): Observable<any> {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/` + id);
  }

  putItem(item: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(this.baseURL + `/api/catalogs/${this.controller}/`, JSON.stringify(item), httpOptions);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(this.baseURL + `/api/catalogs/${this.controller}/` + id);
  }
}
