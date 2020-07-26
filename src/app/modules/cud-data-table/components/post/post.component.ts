import {Component, ComponentFactoryResolver} from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/concrete/authentication.service';
import { TopTabService } from '../../../topTab/toptab.service';
import { TableDirective } from '../../baseclasses/table.component';
import {PostService} from '../../services/concrete/post.service';

@Component({
  templateUrl: '../../baseclasses/table.component.html',
  styleUrls: ['../../baseclasses/table.component.scss'],
  providers: [PostService]
})
export class PostComponent extends TableDirective {
  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: PostService,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(authenticationService, toptabService, service, componentFactoryResolver);
    this.currentUser = this.authenticationService.currentUserValue;
    this.title = 'Профессии';
    this.url = '/posts';
  }

}
