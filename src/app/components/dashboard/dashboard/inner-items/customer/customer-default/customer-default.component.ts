import {AfterViewInit, Component} from '@angular/core';
import {MatButton} from "@angular/material/button";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid, NgApexchartsModule
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-customer-default',
  standalone: true,
  imports: [
    MatButton,
    NgApexchartsModule
  ],
  templateUrl: './customer-default.component.html',
  styleUrl: './customer-default.component.scss'
})
export class CustomerDefaultComponent implements AfterViewInit {

// @ts-ignore
  @ViewChild("chart") chart: ChartComponent;
  // @ts-ignore
  public chartOptions: Partial<ChartOptions>;

  ngAfterViewInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Users",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 480, 50, 450],
          color: '#16A085'
        }
      ],
      chart: {
        animations: {
          enabled: true,
          easing: 'linear',
          speed: 1000
        },
        height: 250,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    };
  }

}
