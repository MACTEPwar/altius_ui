import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getColumnRulesByModelAndFieldName'
})
export class GetColumnRulesByModelAndFieldNamePipe implements PipeTransform {

  transform(array: any[], modelName: string, fieldName: string): any {
    return array.filter(f => f.nameModel === modelName && f.nameField === fieldName)[0];
  }

}
