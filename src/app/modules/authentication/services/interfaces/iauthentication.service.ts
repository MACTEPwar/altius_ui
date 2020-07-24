import { Observable } from 'rxjs';

export interface IAuthenticationService {
    currentUserValue;
    currentUser;

    login(username, password): Observable<any>;
    logout(): void;
}
