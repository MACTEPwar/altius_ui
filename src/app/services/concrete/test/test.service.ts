import { Injectable, Type } from '@angular/core';
import {EmployeeComponent} from '../../../components/employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  get(): Type<any> {
    return EmployeeComponent;
  }
}
