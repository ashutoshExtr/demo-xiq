import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { XiqNavComponent } from './xiq-nav/xiq-nav.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'nav', 
    component: XiqNavComponent
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
