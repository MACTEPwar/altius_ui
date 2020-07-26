import { Component, ComponentFactoryResolver } from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';
import { ContractorService } from '../../services/concrete/contractor.service';
import { CUDService } from '../../../../services/concrete/CUD-service/cud-service.service';

@Component({
  templateUrl: '../../baseclasses/table.component.html',
  styleUrls: ['../../baseclasses/table.component.scss'],
  providers: [ContractorService]
})
export class ContractorComponent extends TableDirective {

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: ContractorService,
    cudService: CUDService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, cudService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Контрагенты';
    this.url = '/contractor';
  }

}
