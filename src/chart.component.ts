import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

declare var Chart;

@Component({
  selector: 'chart',
  template: '',
  styles: [':host { display: block; }']
})
export class ChartComponent implements OnInit, OnChanges  {
  chart: any;

  @Input() type: string;
  @Input() data: any;
  @Input() options: any;

  private canvas;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.create();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on change event from chart comp', changes);
    if (this.chart) {
      if (changes['type'] || changes['options']) {
        this.create();
      } else if (changes['data']) {
        let currentValue = changes['data'].currentValue;
        ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(property => {
          this.chart.data[property] = currentValue[property];
        })
        this.chart.update();
      }
    }
  }

  private create() {
    if (this.canvas) {
      this.elementRef.nativeElement.removeChild(this.canvas);
    }
    this.canvas = document.createElement('canvas');
    this.elementRef.nativeElement.appendChild(this.canvas);
    this.chart = new Chart(this.canvas, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }
}
