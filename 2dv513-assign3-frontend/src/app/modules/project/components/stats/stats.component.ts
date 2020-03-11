import { Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/projects/project.service';

@Component({
  selector: 'app-project-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit, OnDestroy {
  seriesData = [];
  updateOptions: any;
  options: any = {};
  prepared = false;
  timer = null;

  @ViewChild('chart', { static: false }) chart;
  @Input() id;

  constructor(
    public projectService: ProjectService,
  ) {

  }

  ngOnInit(): void {
    this.prepaere()
    this.get()
  }

  ngOnDestroy(): void {

  }

  get(): void {
    this.projectService.stats(this.id).subscribe(
      (data) => {
        this.update(data)
      }
    );
  }

  prepaere() {
    this.options = {
      color: ['#3398DB'],
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      series: [{
        data: [],
        type: 'line',
        smooth: true
      }]
    };
  }

  update(data) {
    this.updateOptions = {
      xAxis: {
        data: data.map((elem) => {
          return elem.date;
        })
      },
      series: [{
        data: data.map((elem) => {
          return elem.hours;
        })
      }]
    };
  }

}

