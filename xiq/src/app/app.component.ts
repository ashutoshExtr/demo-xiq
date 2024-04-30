import { Component } from '@angular/core';
import { Authservice } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  

  constructor(public authservice: Authservice) { }
}
