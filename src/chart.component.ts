import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'chart',
  template: '<canvas></canvas>',
  styles: [':host { display: block; }']
})
export class ChartComponent implements OnInit, OnChanges  {
  private chart: any;

  @Input() type: string;
  @Input() data: any;
  @Input() options: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.chart = new Chart(this.elementRef.nativeElement.querySelector('canvas'), {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && changes['data']) {
      let currentValue = changes['data'].currentValue;
      ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(property => {
        this.chart.data[property] = currentValue[property];
      })
      this.chart.update();
    }
  }
}
