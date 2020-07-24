import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {MainMenu} from '../../models/mainmenu';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MainMenuService {
  constructor(private http: HttpClient) { }

  getMenu(): Observable<any> {
    return this.http.get<MainMenu[]>(`${environment.apiUrl}/mainmenu`);
  }
}
