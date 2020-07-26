import { Component, ComponentFactoryResolver } from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';
import { BankService } from '../../services/concrete/bank.service';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';

@Component({
  templateUrl: '../../baseclasses/table.component.html',
  styleUrls: ['../../baseclasses/table.component.scss'],
  providers: [BankService]
})
export class BanksComponent extends TableDirective {

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected bankService: BankService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, bankService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Банки';
    this.url = '/banks';
  }
}
