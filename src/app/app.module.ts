import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AlertComponent } from './components/alert.component';
import { appRoutingModule } from './app.routing';
import { ErrorInterceptor } from './services/helpers/error.interceptor';
import { fakeBackendProvider } from './services/helpers/fake-backend';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { DragDropModule } from 'primeng/dragdrop';
import { NaclComponent } from './components/nacl/nacl.component';
import { ProductSheetComponent } from './components/nacl/sheet.component';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'node_modules/primeng/tree';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PlitkaComponent } from './components/plitka/plitka.component';
import { ParseDatePipe } from './pipes/parse-date/parse-date.pipe';
import { GetColumnRulesByModelAndFieldNamePipe } from './pipes/get-column-rules-by-model-and-field-name/get-column-rules-by-model-and-field-name.pipe';

import { AuthenticationModule } from './modules/authentication/authentication.module';

import { DataTableModule } from './modules/dataTable/data-table.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    NaclComponent,
    ProductSheetComponent,
    ParseDatePipe,
    GetColumnRulesByModelAndFieldNamePipe,
    PlitkaComponent
  ],
  imports: [
    AuthenticationModule,
    DataTableModule,

    BrowserModule,
    TabViewModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DialogModule,
    TreeModule,
    DropdownModule,
    CheckboxModule,
    appRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    FontAwesomeModule,
    SidebarModule,
    InputTextModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ],
})
export class AppModule {}
