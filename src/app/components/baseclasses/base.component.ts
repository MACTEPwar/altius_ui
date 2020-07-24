import {User} from '../../models/user';
import {TopTabService} from '../../services/concrete/toptab.service';
import { AuthenticationService } from 'src/app/modules/authentication/services/concrete/authentication.service';

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
