import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AlertComponent } from './components/alert.component';
import { appRoutingModule } from './app.routing';
import { ErrorInterceptor } from './services/helpers/error.interceptor';
import { fakeBackendProvider } from './services/helpers/fake-backend';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ErrorStateMatcher,
  MatNativeDateModule,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BanksComponent } from './components/banks/banks.component';
import { DragDropModule } from 'primeng/dragdrop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CurrencyComponent } from './components/currency/currency.component';
import { LocationComponent } from './components/location/location.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PostComponent } from './components/post/post.component';
import { StoreComponent } from './components/store/store.component';
import { NaclListComponent } from './components/nacllist/nacllist.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NaclComponent } from './components/nacl/nacl.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { ProductSheetComponent } from './components/nacl/sheet.component';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'node_modules/primeng/tree';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { DataFormatPipe } from './pipes/data-format/data-format.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PlitkaComponent } from './plitka/plitka.component';
import { ParseDatePipe } from './pipes/parse-date/parse-date.pipe';
import { GetColumnRulesByModelAndFieldNamePipe } from './pipes/get-column-rules-by-model-and-field-name/get-column-rules-by-model-and-field-name.pipe';
import { CreateDefaultContainerComponent } from './services/concrete/CUD-service/CUD-service-containers/create-containers/create-default-container/create-default-container.component';
import { UpdateDefaultContainerComponent } from './services/concrete/CUD-service/CUD-service-containers/update-containers/update-default-container/update-default-container.component';
import { DeleteDefaultContainerComponent } from './services/concrete/CUD-service/CUD-service-containers/delete-containers/delete-default-container/delete-default-container.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    BanksComponent,
    CurrencyComponent,
    LocationComponent,
    ContractorComponent,
    EmployeeComponent,
    PostComponent,
    StoreComponent,
    NaclListComponent,
    NaclComponent,
    ProductSheetComponent,
    DataFormatPipe,
    ParseDatePipe,
    GetColumnRulesByModelAndFieldNamePipe,
    PlitkaComponent,
    CreateDefaultContainerComponent,
    UpdateDefaultContainerComponent,
    DeleteDefaultContainerComponent,
    ToolbarComponent,
  ],
  imports: [
    AuthenticationModule,

    BrowserModule,
    TabViewModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    DialogModule,
    TableModule,
    TreeModule,
    DropdownModule,
    ToolbarModule,
    CheckboxModule,
    appRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatIconModule,
    MatTabsModule,
    DragDropModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatMenuModule,
    MatBottomSheetModule,
    FontAwesomeModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteDefaultContainerComponent,
    CreateDefaultContainerComponent,
    UpdateDefaultContainerComponent,

    BanksComponent,
    EmployeeComponent
  ],
})
export class AppModule {}
