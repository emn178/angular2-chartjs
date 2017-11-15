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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#FF6384'
      },
      {
        label: 'My Second dataset',
        data: [60, 65, 75, 86, 49, 42, 35],
        backgroundColor: '#36A2EB'
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  };

  constructor() {
  }

  change() {
    this.type = 'bar';
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: '#FF6384'
        },
        {
          label: 'My Second dataset',
          data: [10, 30, 20, 40, 60, 50, 70],
          backgroundColor: '#36A2EB'
        },
        {
          label: 'My Third dataset',
          data: [35, 59, 50, 61, 76, 46, 35],
          backgroundColor: '#FFCE56'
        }
      ]
    };
  }
}
