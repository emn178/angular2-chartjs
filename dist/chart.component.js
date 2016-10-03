"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ChartComponent = (function () {
    function ChartComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.chart = new Chart(this.elementRef.nativeElement.querySelector('canvas'), {
            type: this.type,
            data: this.data,
            options: this.options
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChartComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "options", void 0);
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'chart',
            template: '<canvas></canvas>',
            styles: [':host { display: block; }']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map