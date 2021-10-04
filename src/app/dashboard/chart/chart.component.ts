import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart, registerables } from 'chart.js';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart: any;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {

    this.chart = new Chart('myChart', {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'Score',
          data: [670, 720],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 3,
          offset: 20,

        }]
      },
      options: {

        cutout: 110,
        circumference: 180,
        rotation: 270,
        radius: 100
      }


    });
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
