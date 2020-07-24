import {HttpClient} from '@angular/common/http';

export class BaseService {

  protected baseURL = 'http://localhost:3333';

  constructor(protected http: HttpClient){ }

}
