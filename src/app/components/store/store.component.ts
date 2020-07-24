import {Component, ComponentFactoryResolver} from '@angular/core';
import {TopTabService} from '../../services/concrete/toptab.service';
import {TableDirective} from '../baseclasses/table.component';
import {StoreService} from '../../services/concrete/store.service';
import {Store} from '../../models/store';
import { CUDService } from 'src/app/services/concrete/CUD-service/cud-service.service';
import { AuthenticationService } from 'src/app/modules/authentication/services/concrete/authentication.service';

@Component({
  templateUrl: '../baseclasses/table.component.html',
  providers: [StoreService]
})
export class StoreComponent extends TableDirective {
  data: Store[] = [];

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
