import { Component, ComponentFactoryResolver } from '@angular/core';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';
import { StoreService } from '../../services/concrete/store.service';
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
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Подразделения';
    this.url = '/store';
  }

}
