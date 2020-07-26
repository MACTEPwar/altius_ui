import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {User} from '../../modules/authentication/models/user';
import {BaseService} from '../../modules/topTab/base.service';

@Injectable({ providedIn: 'root' })
export class NaclService extends BaseService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(http: HttpClient) {
    super(http);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getNacl(id: number) {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(this.baseURL + `/nacl/${id}`);
  }
  getNaclProducts(id: number) {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get(this.baseURL + `/naclproducts/${id}`);
  }
}
