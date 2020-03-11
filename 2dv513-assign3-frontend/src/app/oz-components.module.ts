import { NgModule } from '@angular/core';

import { OzCounterComponent } from './shared/oz-components/oz-counter/oz-counter.component';
import { OzEmptyStateComponent } from './shared/oz-components/oz-empty-state/oz-empty-state.component';
import { OzAlertComponent } from './shared/oz-components/oz-alert/oz-alert.component';
import { OzHeaderComponent } from './shared/oz-components/oz-header/oz-header.component';
import { OzSearchComponent } from './shared/oz-components/oz-search/oz-search.component';
import { OzTimeElapsedComponent } from './shared/oz-components/oz-time-elapsed/oz-time-elapsed.component';


@NgModule({
    declarations: [
        OzCounterComponent,
        OzEmptyStateComponent,
        OzAlertComponent,
        OzHeaderComponent,
        OzSearchComponent,
        OzTimeElapsedComponent,
    ],
    imports: [],
    exports: [
        OzCounterComponent,
        OzEmptyStateComponent,
        OzAlertComponent,
        OzHeaderComponent,
        OzSearchComponent,
        OzTimeElapsedComponent,
    ]
})
export class OzComponentsModule {
}
