import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TableService } from './table.service';

@Injectable()
export class StoreService extends TableService {

  constructor(http: HttpClient) {
    super(http);
    this.controller = 'store';
  }

}
