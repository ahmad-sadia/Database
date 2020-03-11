import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Task } from '../../shared/models/tasks/task'
import { ItemsComponent } from '../../shared/components/items/items.component'
import { DeleteComponent } from './components/delete/delete.component'
import { TasksService } from '../../shared/services/tasks/tasks.service'
import { TaskDeleteComponent } from './components/task/delete/delete.component'
import { AddComponent } from './components/add/add.component'
import { TaskEditComponent } from './components/task/edit/edit.component'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent extends ItemsComponent<Task> implements OnInit {
  columns = ['select', 'name', 'project', 'hours', 'createdAt', 'edit']
  displayedColumns = ['select', 'name', 'project', 'hours', 'createdAt', 'edit']

  constructor(
    public tasksService: TasksService,
    private dialog: MatDialog,
  ) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  ngOnDestroy(): void {

  }

  // ---------------------
  openAddComponent() {
    const ref = this.dialog.open(AddComponent, {
      autoFocus: true, width: '480px'
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.add(result)
      }
    })
  }

  openDeleteComponent() {
    const ref = this.dialog.open(DeleteComponent, { autoFocus: true, data: this.selection.selected });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result)
      }
    })
  }

  // ---------------------
  openTaskDeleteComponent(item) {
    const ref = this.dialog.open(TaskDeleteComponent, { autoFocus: true, data: item });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result);
      }
    })
  }

  openTaskEditComponent(item) {
    const ref = this.dialog.open(TaskEditComponent, { autoFocus: true, width: '480px', data: item });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.update(result)
      }
    })
  }

  // ---------------------
  get(filterValue = '', sortOrder = 'asc'): void {
    this.working = true
    this.clear()
    this.tasksService.get({ filterValue, sortOrder, pageIndex: this.pageIndex, pageSize: this.pageSize })
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


