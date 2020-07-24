import {User} from '../../models/user';
import {AuthenticationService} from '../../services/concrete/authentication.service';
import {TopTabService} from '../../services/concrete/toptab.service';

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
