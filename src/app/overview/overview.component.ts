import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  standalone: false,
})
export class OverviewComponent {
  demographicsData: ChartData<'pie'> = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        data: [40, 55, 5],
        backgroundColor: ['#3366cc', '#dc3912', '#ff9900'],
      },
    ],
  };

  absenteeismData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Absenteeism (%)',
        data: [4.2, 3.8, 5.1, 4.5],
        backgroundColor: '#3366cc',
      },
    ],
  };
}
