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
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    XiqNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [Authservice, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
