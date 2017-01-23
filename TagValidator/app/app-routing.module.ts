import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePageComponent }  from './components/pages/create-scan-page/create-scan-page.component';
import { OneTimePageComponent }  from './components/pages/one-time-page/one-time-page.component';
import { SingleInfoPageComponent }  from './components/pages/single-info-page/single-info-page.component';
import { UserManagementPageComponent }  from './components/pages/user-management-page/user-management-page.component';
import { CreateUserPageComponent }  from './components/pages/create-user-page/create-user-page.component';
import { EditUserPageComponent }  from './components/pages/edit-user-page/edit-user-page.component';
import { MonitoringPageComponent }  from './components/pages/monitoring-page/monitoring-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-scan', pathMatch: 'full' },
  { path: 'create-scan',  component: CreatePageComponent },
  { path: 'one-time', component: OneTimePageComponent },
  { path: 'scan-info',  component: SingleInfoPageComponent },
  { path: 'edit-user/:id',  component: EditUserPageComponent },
  { path: 'user-managment',  component: UserManagementPageComponent },
  { path: 'create-user',  component: CreateUserPageComponent },
  { path: 'monitoring',  component: MonitoringPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}