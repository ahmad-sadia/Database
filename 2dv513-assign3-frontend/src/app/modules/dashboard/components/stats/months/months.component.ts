import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-dashboard-stats-months',
  templateUrl: './months.component.html',
})
export class StatsMonthsComponent implements OnInit, OnDestroy {
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
    this.accountService.statsMonths().subscribe(
      (data) => {
        this.update(data)
      },
      (error) => {
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
        type: 'bar'
      }]
    };
  }

  update(data) {
    this.updateOptions = {
      xAxis: {
        data: data.map((elem) => {
          return elem.year + '-' + elem.month;
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

