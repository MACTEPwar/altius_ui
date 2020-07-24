import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  public loginQuery(login: string, password: string): any {
    return null;
  }
}
