import {Component, ComponentFactoryResolver} from '@angular/core';
import {AuthenticationService} from '../../services/concrete/authentication.service';
import {TopTabService} from '../../services/concrete/toptab.service';
import {TableDirective} from '../baseclasses/table.component';
import {Currency} from '../../models/currency';
import {ContractorService} from '../../services/concrete/contractor.service';
import { CUDService } from 'src/app/services/concrete/CUD-service/cud-service.service';

@Component({
  templateUrl: '../baseclasses/table.component.html',
  providers: [ContractorService]
})
export class ContractorComponent extends TableDirective {
  data: Currency[] = [];

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
