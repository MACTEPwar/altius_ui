import {Component, ComponentFactoryResolver} from '@angular/core';
import {TopTabService} from '../../services/concrete/toptab.service';
import {Post} from '../../models/post';
import {NaclListService} from '../../services/concrete/nacllist.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TableDirective} from '../baseclasses/table.component';
import { CUDService } from 'src/app/services/concrete/CUD-service/cud-service.service';
import { AuthenticationService } from 'src/app/modules/authentication/services/concrete/authentication.service';

@Component({
  selector: 'nacl-list',
  templateUrl: 'nacllist.component.html',
  providers: [
    NaclListService,
    MatDatepickerModule
  ]
})
export class NaclListComponent extends TableDirective {
  data: Post[] = [];

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

  rowClick(item): void {
    console.log(item);
  }

}
