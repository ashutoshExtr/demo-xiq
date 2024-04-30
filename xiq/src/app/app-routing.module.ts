import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { XiqNavComponent } from './xiq-nav/xiq-nav.component';
import { CopilotComponent } from './copilot/copilot.component';
import { AuthGuard } from './auth.guard.service';

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
