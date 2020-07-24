import { IDashboardMenuItem } from '../interfaces/idashboardmenuitem';

export class DashboardMenuItem implements IDashboardMenuItem {
    Name: string;
    Icon: string;
    Route: string;
    Childs: Array<string> = new Array<string>();
}
