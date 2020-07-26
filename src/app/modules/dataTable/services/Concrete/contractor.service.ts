import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TableService } from '../../../dataTable/services/Concrete/table.service';

@Injectable()
export class ContractorService extends TableService {

  constructor(http: HttpClient) {
    super(http);
    this.controller = 'contractor';
  }

}
