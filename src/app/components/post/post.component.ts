import {Component, ComponentFactoryResolver} from '@angular/core';
import {TopTabService} from '../../services/concrete/toptab.service';
import {TableDirective} from '../baseclasses/table.component';
import {Post} from '../../models/post';
import {PostService} from '../../services/concrete/post.service';
import { CUDService } from 'src/app/services/concrete/CUD-service/cud-service.service';
import { AuthenticationService } from 'src/app/modules/authentication/services/concrete/authentication.service';

@Component({
  templateUrl: '../baseclasses/table.component.html',
  providers: [PostService]
})
export class PostComponent extends TableDirective {
  data: Post[] = [];

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: PostService,
    cudService: CUDService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, cudService, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Профессии';
    this.url = '/posts';
  }

}
