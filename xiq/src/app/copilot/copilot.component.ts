import { Component } from '@angular/core';

@Component({
  selector: 'app-copilot',
  templateUrl: './copilot.component.html',
  styleUrl: './copilot.component.css'
})
export class CopilotComponent {

  items = [
    'Reducing risk of widespread operational issues',
    'Reducing amount of false positive alarms',
    'Enhancing trust with Explainable ML / AI'
  ];


  showSidebar = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

}
