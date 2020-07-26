import {Component, ComponentFactoryResolver} from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';
import {CurrencyService} from '../../services/concrete/currency.service';
import { CUDService } from '../../../cud-data-table/services/concrete/cud-service.service';

@Component({
  templateUrl: '../../baseclasses/table.component.html',
  styleUrls: ['../../baseclasses/table.component.scss'],
  providers: [CurrencyService]
})
export class CurrencyComponent extends TableDirective {

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: CurrencyService,
    cudService: CUDService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, cudService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Валюты';
    this.url = '/currency';
    this.image = 'fas charging-station';
  }

}
