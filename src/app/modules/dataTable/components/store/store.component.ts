import { Component, ComponentFactoryResolver } from '@angular/core';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';
import { StoreService } from '../../services/concrete/store.service';
import { CUDService } from '../../../cud-data-table/services/concrete/cud-service.service';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';

@Component({
  templateUrl: '../../baseclasses/table.component.html',
  styleUrls: ['../../baseclasses/table.component.scss'],
  providers: [StoreService]
})
export class StoreComponent extends TableDirective {

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: StoreService,
    cudService: CUDService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, cudService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Подразделения';
    this.url = '/store';
  }

}
