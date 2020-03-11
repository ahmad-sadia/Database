import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersOnlineComponent} from './users-online.component';

const routes: Routes = [
  {path: '', component: UsersOnlineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule {
}
