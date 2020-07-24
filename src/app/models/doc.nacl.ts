import {Doc} from './doc';
import {NaclProduct} from './doc.nacl.product';

export class Nacl extends Doc {
  num: string;
  numInner: string;
  sumWNds: number;
  sumWONds: number;
  date: string;
  dateCheck: string;
  sumActWNds: number;
  contractor: string;
  contractorId: number;
  state: string;
  stateId: number;
  paymentType: number;
  products: NaclProduct[];
}
