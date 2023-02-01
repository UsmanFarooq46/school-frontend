import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component"
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AccountsComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class AccountsModule { }
