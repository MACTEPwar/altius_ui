import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {ITableService} from '../interfaces/itable.service';
import {Filter} from '../../models/filter/filter';
import {FilterValue} from '../../models/filtervalue';
import {Paging} from '../../models/paging';
import {BaseService} from './base.service';
import { Observable } from 'rxjs';

export class TableService extends BaseService implements ITableService {

  protected controller = '';
  protected identifier: string[] = [];

  constructor(http: HttpClient){
    super(http);
  }

  getIdetifiers(): string[] {
    return this.identifier;
  }

  getController(): string {
    return this.controller;
  }

  getAllItems() {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/all`);
  }

  getCount() {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/count`);
  }

  getFilter() {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/getfilter`);
  }

  // getItems(filter: Filter[], values: FilterValue[], paging: Paging) {
  //   const params = new HttpParams()
  //     .set('filter.paging.pageItems', paging.pageItems.toString())
  //     .set('filter.paging.page', paging.page.toString());
  //   return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/filter`, {params});
  //   // return this.http.post(this.baseURL + `/api/catalogs/${this.controller}/filter`, JSON.stringify(filter));
  // }

  // getItems(filter: Filter[], values: FilterValue[], paging) {
  //   let params = new HttpParams();
  //   const pageItems = paging.pageItems;
  //   const page = paging.page;
  //   if (filter && filter.length > 0) {

  //   }
  //   if (pageItems) { params = params.set('filter.paging.pageItems', pageItems.toString()); }
  //   if (page) { params = params.set('filter.paging.page', page.toString()); }
  //   return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/filter`, {params});
  // }

  
  getItems(filters: any[], values: FilterValue[], paging): any {
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
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/filter`, {params});
  }

  getTemplate(short: boolean = false): Observable<any> {
    // return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/template`);
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/header?shortHead=${short}`);
  }

  // getFullTemplate() {
  //   return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/getFullTemplate`);
  // }

  getItem(id: string) {
    return this.http.get(this.baseURL + `/api/catalogs/${this.controller}/` + id);
  }

  putItem(item: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(this.baseURL + `/api/catalogs/${this.controller}/`, JSON.stringify(item), httpOptions);
  }

  deleteItem(id: string) {
    return this.http.delete(this.baseURL + `/api/catalogs/${this.controller}/` + id);
  }

  // getDataFromApi(request){
  //   return request
  // }

}
