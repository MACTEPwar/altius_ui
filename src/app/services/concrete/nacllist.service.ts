import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableService} from '../shared/table.service';

@Injectable()
export class NaclListService extends TableService {

  constructor(http: HttpClient) {
    super(http);
    this.controller = 'bank';
  }

}
