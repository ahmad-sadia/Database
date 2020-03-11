import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../material.module'

import { OzComponentsModule } from '../../oz-components.module'
import { DeleteComponent } from './components/delete/delete.component'
import { TasksService } from '../../shared/services/tasks/tasks.service'
import { ProflesRoutingModule } from './tasks.routing.module'
import { TasksComponent } from './tasks.component'
import { AddComponent } from './components/add/add.component'
import { TaskService } from '../../shared/services/tasks/task.service'
import { TaskDeleteComponent } from './components/task/delete/delete.component'
import { ProjectsService } from 'src/app/shared/services/projects/projects.service'
import { TaskEditComponent } from './components/task/edit/edit.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ProflesRoutingModule,
    OzComponentsModule,
  ],
  declarations: [
    TasksComponent,
    DeleteComponent,
    AddComponent,

    TaskDeleteComponent,
    TaskEditComponent,
  ],
  providers: [
    TaskService,
    TasksService,
    ProjectsService
  ],
  entryComponents: [
    AddComponent,
    DeleteComponent,

    TaskDeleteComponent,
    TaskEditComponent,
  ]
})

export class TasksModule {
}
