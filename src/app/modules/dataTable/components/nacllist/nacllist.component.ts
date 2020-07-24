import {Component, ComponentFactoryResolver} from '@angular/core';
import {AuthenticationService} from '../../services/concrete/authentication.service';
import {TopTabService} from '../../services/concrete/toptab.service';
import {Post} from '../../models/post';
import {NaclListService} from '../../services/concrete/nacllist.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TableDirective} from '../baseclasses/table.component';
import { CUDService } from 'src/app/services/concrete/CUD-service/cud-service.service';

@Component({
  templateUrl: 'nacllist.component.html',
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
