import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module'

import { ResourcesRoutingModule } from './users.routing.module'

import { CommonModule } from '@angular/common'
import { OzComponentsModule } from '../../oz-components.module'
import { UsersService } from '../../shared/services/users/users.service'
import { UsersComponent } from './users.component'
import { NgxEchartsModule } from 'ngx-echarts'
import { UserService } from 'src/app/shared/services/users/user.service';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UserDeleteComponent } from './components/user/delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    OzComponentsModule,
    ResourcesRoutingModule,
    NgxEchartsModule,
  ],
  declarations: [
    UsersComponent,
    AddComponent,
    DeleteComponent,

    UserDeleteComponent,
  ],
  providers: [
    UsersService,
    UserService
  ],
  entryComponents: [
    AddComponent,
    DeleteComponent,

    UserDeleteComponent,
  ]
})
export class UsersModule {
}
