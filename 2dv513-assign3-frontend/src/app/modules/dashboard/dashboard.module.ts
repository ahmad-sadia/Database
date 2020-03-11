import { NgModule } from '@angular/core'
import { MaterialModule } from '../../material.module'

import { DashboardRoutingModule } from './dashboard.routing.module'

import { DashboardComponent } from './dashboard.component'
import { CommonModule } from '@angular/common'
import { OzComponentsModule } from '../../oz-components.module'
import { OverviewComponent } from './components/overview/overview.component'
import { ProjectsService } from '../../shared/services/projects/projects.service'
import { TasksService } from 'src/app/shared/services/tasks/tasks.service'
import { StatsDaysComponent } from './components/stats/days/days.component'
import { NgxEchartsModule } from 'ngx-echarts'
import { StatsMonthsComponent } from './components/stats/months/months.component'
import { AccountService } from 'src/app/shared/services/account/account.service'
import { StatsTasksTodayComponent } from './components/stats/tasks-today/tasks-today.component'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxEchartsModule,
    OzComponentsModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    OverviewComponent,
    StatsDaysComponent,
    StatsMonthsComponent,
    StatsTasksTodayComponent,
  ],
  providers: [
    ProjectsService,
    AccountService,
    TasksService,
  ]
})
export class DashboardModule {
}
