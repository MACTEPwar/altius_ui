import {Component, ComponentFactoryResolver} from '@angular/core';
import {TopTabService} from '../../services/concrete/toptab.service';
import {TableDirective} from '../baseclasses/table.component';
import {Currency} from '../../models/currency';
import {LocationService} from '../../services/concrete/location.service';
import { CUDService } from 'src/app/services/concrete/CUD-service/cud-service.service';
import { AuthenticationService } from 'src/app/modules/authentication/services/concrete/authentication.service';

@Component({
  templateUrl: '../baseclasses/table.component.html',
  providers: [LocationService]
})
export class LocationComponent extends TableDirective {
  data: Currency[] = [];

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: LocationService,
    cudService: CUDService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, cudService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Местоположения';
    this.url = '/location';
  }

}
