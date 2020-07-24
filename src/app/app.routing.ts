import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/helpers/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BanksComponent } from './components/banks/banks.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { LocationComponent } from './components/location/location.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PostComponent } from './components/post/post.component';
import { StoreComponent } from './components/store/store.component';
import { NaclListComponent } from './components/nacllist/nacllist.component';
import { NaclComponent } from './components/nacl/nacl.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contractor', component: ContractorComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'posts', component: PostComponent },
  { path: 'store', component: StoreComponent },
  { path: 'nacllist', component: NaclListComponent },
  { path: 'nacl/:id', component: NaclComponent },

  // otherwise redirect to dashboard
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
