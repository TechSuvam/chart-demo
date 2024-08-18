import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { FormDataService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, BaseChartDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  formData: any;
  title = 'chart-demo';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
   };

  constructor(private formDataService: FormDataService) {
  }
  ngOnInit() {
    this.formDataService.currentFormData.subscribe(data => {
      this.formData = data;
      console.log(this.formData);
    });
  }
}
