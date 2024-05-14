import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrl: './a3.component.css'
})
export class A3Component {
  constructor(public router: Router) {}

  public get url() {
    return this.router.url;
  }

  navigateToInventory() {
    this.router.navigate(['/a3/inventory']);
  }

  navigateToReporting() {
    this.router.navigate(['/a3/reporting']);
  }
}
