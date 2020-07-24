import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './models/user';
import { AuthenticationService } from './services/concrete/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptor/jwt.interceptor';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  exports: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
