import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
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
