import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'chart',
  template: '<canvas></canvas>',
  styles: [':host { display: block; }']
})
export class ChartComponent implements OnInit, OnChanges  {
  chart: any;

  @Input() type: string;
  @Input() data: any;
  @Input() options: any;
  @Input() height: number;
  @Input() width: number;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    let canvas = this.elementRef.nativeElement.querySelector('canvas');
    if(!!this.height) {
      canvas.setAttribute('height', this.height);
    }
    if(!!this.width) {
      canvas.setAttribute('width', this.width);

    }
    this.chart = new Chart(canvas, {
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
