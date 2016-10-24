import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '../src';

@Component({
  selector: 'app',
  template: '<button (click)="change()">Change</button><chart [type]="type" [data]="data" [options]="options"></chart>'
})
export class AppComponent {
  @ViewChild(ChartComponent) chartComponent: ChartComponent;

  type = 'line';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() {
  }

  change() {
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          data: [10, 30, 20, 40, 60, 50, 70]
        }
      ]
    }
  }
}
