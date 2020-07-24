import {Injectable} from '@angular/core';
import {BaseService} from '../shared/base.service';
import {Observable, Subject} from 'rxjs';
import {Doc} from '../../models/doc';

@Injectable({ providedIn: 'root' })
export class MessageService extends BaseService {
  protected message = new Subject<Doc>();

  getMessage(): Observable<Doc> {
    return this.message.asObservable();
  }

  updateMessage(doc: Doc) {
    this.message.next(doc);
  }
}
