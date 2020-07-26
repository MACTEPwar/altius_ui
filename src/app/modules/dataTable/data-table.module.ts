import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DragDropModule } from 'primeng/dragdrop';

import { BanksComponent } from './components/banks/banks.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LocationComponent } from './components/location/location.component';
import { NaclListComponent } from './components/naclList/naclList.component';
import { PostComponent } from './components/post/post.component';
import { StoreComponent } from './components/store/store.component';

import { DataFormatPipe } from './pipes/data-format/data-format.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { CudDataTableModule } from '../cud-data-table/cud-data-table.module';


@NgModule({
  declarations: [
    BanksComponent,
    ContractorComponent,
    CurrencyComponent,
    EmployeeComponent,
    LocationComponent,
    NaclListComponent,
    PostComponent,
    StoreComponent,

    DataFormatPipe,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    TableModule,
    CheckboxModule,
    CalendarModule,
    ToolbarModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    DragDropModule,

    CudDataTableModule
  ],
  exports: [
    BanksComponent,
    ContractorComponent,
    CurrencyComponent,
    EmployeeComponent,
    LocationComponent,
    NaclListComponent,
    PostComponent,
    StoreComponent,
  ]
})
export class DataTableModule { }
