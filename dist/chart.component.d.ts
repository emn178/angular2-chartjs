import { ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class ChartComponent implements OnInit, OnChanges {
    private elementRef;
    private chart;
    type: string;
    data: any;
    options: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
