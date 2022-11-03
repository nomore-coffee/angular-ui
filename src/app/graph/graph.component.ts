import { Component, OnInit } from '@angular/core';
import { Chart , registerables} from 'node_modules/chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {
    Chart.register(...registerables);
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Mumbai', 'Delhi', 'Dubai', 'Nepal', 'New York', 'Brazil'],
        datasets: [
          {
            label: '# of Votes',
            data: [255 , 257 , 296 , 277 , 200 , 231],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

  }
}
