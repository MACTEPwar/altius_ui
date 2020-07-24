import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export class TopTab {
  name: string;
  image?: IconDefinition;
  url: string;
  canClose: boolean;
  active: boolean;
}
