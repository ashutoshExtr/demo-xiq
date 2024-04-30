import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Authservice } from './auth.service';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireStore } from '@angular/fire/firestore';
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [Authservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
