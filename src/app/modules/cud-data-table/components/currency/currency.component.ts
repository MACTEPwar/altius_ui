import {Component, ComponentFactoryResolver} from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';
import {CurrencyService} from '../../services/concrete/currency.service';

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
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Валюты';
    this.url = '/currency';
    this.image = 'fas charging-station';
  }

}
