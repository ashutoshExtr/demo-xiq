import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xiq-nav',
  templateUrl: './xiq-nav.component.html',
  styleUrl: './xiq-nav.component.css'
})
export class XiqNavComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.sidenav.open();
  }
}
