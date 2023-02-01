import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/sign-up/register/register.component';
import { TwelvePhraseComponent } from './components/sign-up/twelve-phrase/twelve-phrase.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./app-main/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./app-main/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./app-main/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./app-main/accounts/accounts.module').then(
        (m) => m.AccountsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
