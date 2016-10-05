# angular2-chartjs
Chart.js component for Angular2

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
```
HTML
```HTML
<chart [type]="type" [data]="data" [options]="options"></chart>
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/angular2-chartjs  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
