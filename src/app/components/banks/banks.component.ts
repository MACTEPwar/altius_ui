import { Component, ComponentFactoryResolver } from '@angular/core';
import { CUDService } from 'src/app/services/concrete/CUD-service/cud-service.service';
import { BankService } from '../../services/concrete/bank.service';
import { TopTabService } from '../../services/concrete/toptab.service';
import { TableDirective } from '../baseclasses/table.component';
import { AuthenticationService } from 'src/app/modules/authentication/services/concrete/authentication.service';

@Component({
  selector: 'app-banks',
  templateUrl: '../baseclasses/table.component.html',
  styleUrls: ['../baseclasses/table.component.scss'],
  providers: [BankService]
})
export class BanksComponent extends TableDirective {

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected bankService: BankService,
    cudService: CUDService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, bankService, cudService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Банки';
    this.url = '/banks';
  }
}
