import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../material.module'
import { ProjectsRoutingModule } from './projects.routing.module'
import { ProjectsService } from '../../shared/services/projects/projects.service'
import { ProjectService } from '../../shared/services/projects/project.service'
import { ProjectsComponent } from './projects.component'
import { DeleteComponent } from './components/delete/delete.component'
import { OzComponentsModule } from '../../oz-components.module'

import { ProjectDeleteComponent } from './components/project/delete/delete.component'
import { ProjectResolve } from '../../shared/resolve/projects/project.resolve'
import { TasksService } from '../../shared/services/tasks/tasks.service'
import { AddComponent } from './components/add/add.component'
import { AccountService } from '../../shared/services/account/account.service'
import { ComponentsModule } from '../../components.module'

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ProjectsRoutingModule,
        OzComponentsModule,
        ComponentsModule,
    ],
    declarations: [
        ProjectsComponent,
        DeleteComponent,
        ProjectDeleteComponent,
        AddComponent
    ],
    providers: [
        ProjectsService,
        ProjectService,
        ProjectResolve,
        TasksService,
        AccountService,
    ],
    entryComponents: [
        DeleteComponent,
        ProjectDeleteComponent,
        AddComponent,
    ]
})

export class ProjectsModule {
}
