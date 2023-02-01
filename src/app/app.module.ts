import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/sign-up/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './shared-ui/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClipboardModule } from 'ngx-clipboard';
import { SingupIntroComponent } from './components/sign-up/singup-intro/singup-intro.component';
import { CreateWalletComponent } from './components/sign-up/create-wallet/create-wallet.component';
import { TwelvePhraseComponent } from './components/sign-up/twelve-phrase/twelve-phrase.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared-ui/footer/footer.component';
import { MainComponent } from './shared-ui/main/main.component';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProfileComponent,
    SingupIntroComponent,
    CreateWalletComponent,
    TwelvePhraseComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ClipboardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
