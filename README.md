# angular2-chartjs
Chart.js component for Angular2+

## Installation
You can install angular2-chartjs by using npm.
```
npm install angular2-chartjs
```

## Usage
Add `ChartModule` to your module, eg.
```JavaScript
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports: [ ChartModule ]
  // ...
})
export class AppModule {
}
```
And you can use selector `chart` in your template.

JavaScript
```JavaScript
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
```
HTML
```HTML
<chart [type]="type" [data]="data" [options]="options"></chart>
```

## Options
### [type]
*string*, required  
Chart type.

### [data]
*object*, required  
To display data, the chart must be passed a data object that contains all of the information needed by the chart. [See](http://www.chartjs.org/docs/#chart-configuration-chart-data).

### [options]
*object*, optional  
To create a chart with configuration options, simply pass an object containing your configuration to the constructor. [See](http://www.chartjs.org/docs/#chart-configuration-creating-a-chart-with-options).

## Members
### chart
*Chart*  
Chart instance. You can call Chart.js methods via this member.

Example:
```JavaScript
chartComponent.chart.destroy();
```

## SystemJs
Add following settings
```JavaScript
{
  map: {
    'angular2-chartjs': 'npm:angular2-chartjs',
    'chart.js': 'npm:chart.js/dist/Chart.bundle.js'
  },
  packages: {
    'angular2-chartjs': {
      main: './dist/index.js',
      defaultExtension: 'js'
    }
  }
}
```

## FAQ
How to call Chart.js methods - [#7](https://github.com/emn178/angular2-chartjs/issues/7), [#2](https://github.com/emn178/angular2-chartjs/issues/2)

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/angular2-chartjs  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
