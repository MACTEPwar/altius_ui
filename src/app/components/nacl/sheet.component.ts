import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {SelectionModel} from '@angular/cdk/collections';
import {NaclProduct} from '../../models/doc.nacl.product';

@Component({
  selector: 'product-sheet',
  templateUrl: 'sheet.component.html',
})
export class ProductSheetComponent {
  public fields;
  public header;
  selection = new SelectionModel<NaclProduct>(true, []);
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public products: any) {
    this.fields = Object.keys(products[0]);
    this.header = Object.keys(products[0]);
    this.header.unshift('_select');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.products.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.products.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: NaclProduct): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
