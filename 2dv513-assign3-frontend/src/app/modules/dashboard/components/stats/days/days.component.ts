import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-dashboard-stats-days',
  templateUrl: './days.component.html',
})
export class StatsDaysComponent implements OnInit, OnDestroy {
  seriesData = [];
  updateOptions: any;
  options: any = {};
  prepared = false;
  timer = null;

  @ViewChild('chart', { static: false }) chart;

  constructor(
    public accountService: AccountService,
  ) {

  }

  ngOnInit(): void {
    this.prepaere()
    this.get()
  }

  ngOnDestroy(): void {

  }

  get(): void {
    this.accountService.statsDays().subscribe(
      (data) => {
        this.update(data)
      },
      (error) => {
      }
    );
  }

  prepaere() {
    this.options = {
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
        type: 'bar'
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

