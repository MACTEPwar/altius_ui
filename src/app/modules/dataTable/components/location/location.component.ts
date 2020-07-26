import {Component, ComponentFactoryResolver} from '@angular/core';
import { CUDService } from '../../../../services/concrete/CUD-service/cud-service.service';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';
import {LocationService} from '../../services/concrete/location.service';


@Component({
  templateUrl: '../../baseclasses/table.component.html',
  styleUrls: ['../../baseclasses/table.component.scss'],
  providers: [LocationService]
})
export class LocationComponent extends TableDirective {

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
