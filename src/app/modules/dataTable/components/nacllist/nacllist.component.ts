import {Component, ComponentFactoryResolver} from '@angular/core';
import { TableDirective } from '../../baseclasses/table.component';
import {NaclListService} from '../../services/Concrete/naclList.service';
import { CUDService } from '../../../../services/concrete/CUD-service/cud-service.service';
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
    cudService: CUDService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, cudService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Накладные';
    this.url = '/nacl';
  }

}
