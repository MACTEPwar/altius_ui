import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CreateDefaultContainerComponent } from './CUD-containers/create-containers/create-default-container/create-default-container.component';
import { UpdateDefaultContainerComponent } from './CUD-containers/update-containers/update-default-container/update-default-container.component';
import { DeleteDefaultContainerComponent } from './CUD-containers/delete-containers/delete-default-container/delete-default-container.component';

@NgModule({
  declarations: [
    CreateDefaultContainerComponent,
    UpdateDefaultContainerComponent,
    DeleteDefaultContainerComponent,

    BanksComponent,
    ContractorComponent,
    CurrencyComponent,
    EmployeeComponent,
    LocationComponent,
    NaclListComponent,
    PostComponent,
    StoreComponent,

    DataFormatPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
    DragDropModule
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
export class CudDataTableModule { }
