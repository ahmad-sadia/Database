import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ProjectRoutingModule } from './project.routing.module';
import { ProjectComponent } from './project.component';
import { OzComponentsModule } from '../../oz-components.module';
import { ProjectService } from '../../shared/services/projects/project.service';
import { EditComponent } from './components/edit/edit.component';
import { StatsComponent } from './components/stats/stats.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ProjectRoutingModule,
    OzComponentsModule,
    NgxEchartsModule,
  ],
  declarations: [
    ProjectComponent,
    EditComponent,
    StatsComponent
  ],
  providers: [
    ProjectService,
  ],
  entryComponents: [
    EditComponent,
  ]
})

export class ProjectModule {
}
