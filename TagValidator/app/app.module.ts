import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

import './rxjs-extensions';

import { AppComponent }  from './app.component';
import { CreateScanComponent }  from './components/create-scan/create-scan.component';
import { HeaderComponent }  from './components/header/header.component';
import { OneTimeScanComponent }  from './components/one-time-scan/one-time-scan.component';
import { SingleInfoComponent }  from './components/single-info/single-info.component';
import { UserManagementComponent }  from './components/user-management/user-management.component';
import { CreateUserComponent }  from './components/create-user/create-user.component';
import { EditUserComponent }  from './components/edit-user/edit-user.component';
import { MonitorChartComponent }  from './components/monitor-chart/monitor-chart.component';
import { MonitorGraphComponent }  from './components/monitor-graph/monitor-graph.component';

import { dropdownUrlComponent }  from './components/dropdown-url/dropdown-url.component';
import { dropdownSearchComponent }  from './components/dropdown-search/dropdown-search.component';
import { dropdownCheckComponent }  from './components/dropdown-checks/dropdown-check.component';

import { CreatePageComponent }  from './components/pages/create-scan-page/create-scan-page.component';
import { OneTimPageComponent }  from './components/pages/one-time-page/one-time-page.component';
import { SingleInfoPageComponent }  from './components/pages/single-info-page/single-info-page.component';
import { UserManagementPageComponent }  from './components/pages/user-management-page/user-management-page.component';
import { EditUserPageComponent }  from './components/pages/edit-user-page/edit-user-page.component';
import { CreateUserPageComponent }  from './components/pages/create-user-page/create-user-page.component';
import { MonitoringPageComponent }  from './components/pages/monitoring-page/monitoring-page.component';


import { TableApiService }  from './services/table-api.service';
import { AuthService }  from './services/auth.service';

import { AppRoutingModule }     from './app-routing.module';




@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],

  declarations: [ 
  AppComponent,
  CreateScanComponent,
  HeaderComponent,
  OneTimeScanComponent,
  SingleInfoComponent,
  UserManagementComponent,
  CreateUserComponent,
  EditUserComponent,
  MonitorChartComponent,
  MonitorGraphComponent,

  dropdownUrlComponent,
  dropdownSearchComponent,
  dropdownCheckComponent,

  CreatePageComponent,
  OneTimPageComponent,
  SingleInfoPageComponent,
  UserManagementPageComponent,
  EditUserPageComponent,
  CreateUserPageComponent,
  MonitoringPageComponent
   ],

  providers: [
    AuthService,
    TableApiService
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule {
}





