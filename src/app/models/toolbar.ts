import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { stirng2faIcon } from '../services/helpers/helper-functions';

export class ToolbarItem {
  type: string;
  icon: string | IconDefinition;
  iconType: eIconType;
  name: string;
  id?: number;

  constructor(name: string, icon: string, iconType = eIconType.fontawesome) {
    this.name = name;
    this.iconType = iconType;
    this.icon =
      this.iconType === eIconType.fontawesome ? stirng2faIcon(icon) : icon;
  }
}

export enum eIconType {
  fontawesome = 1,
  href,
  prime,
}
