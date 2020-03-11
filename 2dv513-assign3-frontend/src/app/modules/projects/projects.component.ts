import { Component, OnInit } from '@angular/core'
import { MatDialog, MatSnackBar } from '@angular/material'
import { ProjectsService } from '../../shared/services/projects/projects.service'
import { DeleteComponent } from './components/delete/delete.component'
import { ProjectDeleteComponent } from './components/project/delete/delete.component'
import { AuthService } from '../../shared/services/auth.service'
import { ItemsComponent } from '../../shared/components/items/items.component'
import { EventsService } from '../../shared/services/events.service'
import { AddComponent } from './components/add/add.component'
import { Project } from 'src/app/shared/models/projects/project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent extends ItemsComponent<Project> implements OnInit {
  columns = ['select', 'name', 'tasks', 'hours', 'createdAt', 'edit'];
  displayedColumns = ['select', 'name', 'tasks', 'hours', 'createdAt', 'edit'];

  constructor(
    private projectsService: ProjectsService,
    private eventsService: EventsService,
    public authService: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  ngOnDestroy(): void {

  }

  openDeleteComponent() {
    const ref = this.dialog.open(DeleteComponent, { autoFocus: true, data: this.selection.selected });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result);
      }
    })
  }

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

  // ---------------------
  openProjectDeleteDialog(item) {
    const ref = this.dialog.open(ProjectDeleteComponent, { autoFocus: true, width: '480px', data: item });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.delete(result)
      }
    })
  }

  // ---------------------
  get(filterValue = '', sortOrder = 'asc'): void {
    this.working = true;
    this.clear();
    this.projectsService.get({ filterValue, sortOrder, pageIndex: this.pageIndex, pageSize: this.pageSize })
      .subscribe(
        (data) => {
          this.working = false
          this.set(data)
        },
        (error) => {
          this.working = false;
          this.snackBar.open((error.status === 0) ? error.message : error.error, null, {
            duration: 3000,
          })
        }
      )
  }
}
