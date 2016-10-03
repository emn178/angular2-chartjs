import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: '<chart [type]="type" [data]="data" [options]="options"></chart>'
})
export class AppComponent {
  type = 'line'
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }
  options = {
    responsive: true,
    maintainAspectRatio: false
  }

  constructor() { }
}
