import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AdminModule } from './admin/admin.module';
import { RegisterComponent } from './user/register/register.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ExaminationComponent } from './user/examination/examination.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'examPortal/:name',
    component: ExaminationComponent
  },
  {
    path: 'dashboard/:name/:result',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
