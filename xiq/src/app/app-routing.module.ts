import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { XiqNavComponent } from './xiq-nav/xiq-nav.component';
import { CopilotComponent } from './copilot/copilot.component';
import { AuthGuard } from './auth.guard.service';
import { ConfigureComponent } from './configure/configure.component';
import { ManageComponent } from './manage/manage.component';
import { MlInsightsComponent } from './ml-insights/ml-insights.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { A3Component } from './a3/a3.component';
import { InventoryComponent } from './a3/inventory/inventory.component';
import { ReportingComponent } from './a3/reporting/reporting.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'copilot', 
    component: CopilotComponent,
    canActivate: [AuthGuard],
    // children: [
    //   { path: 'copilot', component: CopilotComponent },
      // Add other paths here
    //]
  },
  {
    path: 'configure',
    component: ConfigureComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'insights',
    component: MlInsightsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'essentials',
    component: EssentialsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'a3',
    component: A3Component,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'inventory',
        component: InventoryComponent,
      },
      {
        path: 'reporting',
        component: ReportingComponent,
      },
    ]
  },
  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
