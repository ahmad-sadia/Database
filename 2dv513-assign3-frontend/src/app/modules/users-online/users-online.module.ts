import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module'

import { ResourcesRoutingModule } from './users-online.routing.module'

import { CommonModule } from '@angular/common'
import { OzComponentsModule } from '../../oz-components.module'
import { UsersOnlineComponent } from './users-online.component'
import { NgxEchartsModule } from 'ngx-echarts'
import { UsersService } from 'src/app/shared/services/users/users.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    OzComponentsModule,
    ResourcesRoutingModule,
    NgxEchartsModule,
  ],
  declarations: [
    UsersOnlineComponent,
  ],
  providers: [
    UsersService,
  ],
  entryComponents: [
  ]
})
export class UsersOnlineModule {
}
