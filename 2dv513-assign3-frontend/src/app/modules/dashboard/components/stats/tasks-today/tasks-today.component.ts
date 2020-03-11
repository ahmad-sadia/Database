import { Component, OnInit } from '@angular/core'
import { ItemsComponent } from 'src/app/shared/components/items/items.component'
import { Task } from 'src/app/shared/models/tasks/task'
import { AccountService } from 'src/app/shared/services/account/account.service'

@Component({
  selector: 'app-dashboard-stats-tasks-today',
  templateUrl: './tasks-today.component.html',
})
export class StatsTasksTodayComponent extends ItemsComponent<Task> implements OnInit {
  columns = ['name', 'project', 'hours']
  displayedColumns = ['name', 'project', 'hours']

  constructor(
    public accountService: AccountService
  ) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  ngOnDestroy(): void {

  }

  // ---------------------
  get(): void {
    this.working = true
    this.clear()
    this.accountService.getTasksToday()
      .subscribe(
        (data) => {
          this.working = false
          this.set(data)
        },
        (error) => {
          this.working = false
        }
      )
  }
}


