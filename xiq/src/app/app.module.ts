import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Authservice } from './auth.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { XiqNavComponent } from './xiq-nav/xiq-nav.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireStore } from '@angular/fire/firestore';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CopilotComponent } from './copilot/copilot.component';
import { ConfigureComponent } from './configure/configure.component';
import { ManageComponent } from './manage/manage.component';
import { MlInsightsComponent } from './ml-insights/ml-insights.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { A3Component } from './a3/a3.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './copilot/sidebar/sidebar.component';
import { ConnectivityComponent } from './copilot/connectivity/connectivity.component';
import { AnomaliesComponent } from './copilot/anomalies/anomalies.component';
import { InventoryComponent } from './a3/inventory/inventory.component';
import { ReportingComponent } from './a3/reporting/reporting.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    XiqNavComponent,
    CopilotComponent,
    ConfigureComponent,
    ManageComponent,
    MlInsightsComponent,
    EssentialsComponent,
    A3Component,
    SidebarComponent,
    ConnectivityComponent,
    AnomaliesComponent,
    InventoryComponent,
    ReportingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [Authservice, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
