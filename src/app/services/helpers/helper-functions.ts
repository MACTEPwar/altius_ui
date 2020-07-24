import {
  IconDefinition,
  findIconDefinition,
  IconPrefix,
  IconName,
  IconLookup,
  library,
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';

/** Переводит стрингку в иконку (пример: fas times) */
export function stirng2faIcon(stirngIcon: string): IconDefinition {
  library.add(fas, far, fal);
  const tmpSplit = stirngIcon.split(' ');
  const tempFind = findIconDefinition({
    prefix: tmpSplit[0] as IconPrefix,
    iconName: tmpSplit[1] as IconName,
  });
  return tempFind ?? null;
}
