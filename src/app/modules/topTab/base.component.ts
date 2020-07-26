import {User} from '../authentication/models/user';
import {AuthenticationService} from '../authentication/services/concrete/authentication.service';
import {TopTabService} from './toptab.service';

export abstract class BaseComponent {
  currentUser: User;
  loading = true;

  protected constructor(
    protected authenticationService: AuthenticationService,
    protected toptabService: TopTabService,
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }
}
