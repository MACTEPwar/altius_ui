import {Component, ComponentFactoryResolver} from '@angular/core';
import { TableDirective } from '../../baseclasses/table.component';
import {NaclListService} from '../../services/concrete/naclList.service';
import { TopTabService } from '../../../topTab/toptab.service';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';

@Component({
  templateUrl: '../../baseclasses/table.component.html',
  styleUrls: ['../../baseclasses/table.component.scss'],
  providers: [NaclListService]
})
export class NaclListComponent extends TableDirective {
  
  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: NaclListService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Накладные';
    this.url = '/nacl';
  }

}
