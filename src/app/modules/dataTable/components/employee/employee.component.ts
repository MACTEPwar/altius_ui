import { Component, ComponentFactoryResolver } from '@angular/core';
import { CUDService } from '../../../cud-data-table/services/concrete/cud-service.service';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';
import { EmployeeService } from '../../services/concrete/employee.service';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';

@Component({
  selector: 'app-employee',
  templateUrl: '../../baseclasses/table.component.html',
  styleUrls: ['../../baseclasses/table.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent extends TableDirective {

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: EmployeeService,
    cudService: CUDService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, cudService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Сотрудники';
    this.url = '/employee';
  }

}
