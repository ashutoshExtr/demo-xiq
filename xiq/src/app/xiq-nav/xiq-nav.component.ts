import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-xiq-nav',
  templateUrl: './xiq-nav.component.html',
  styleUrl: './xiq-nav.component.css'
})
export class XiqNavComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router, public authservice: Authservice) {}

  // navigateTo(route: string) {
  //   this.router.navigate([route]);
  //   this.sidenav.open();
  // }
}
