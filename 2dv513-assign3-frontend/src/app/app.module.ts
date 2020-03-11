import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './shared/services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { LoaderComponent } from './components/loader/loader.component';
import { OzComponentsModule } from './oz-components.module';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EventsService } from './shared/services/events.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from './shared/services/local-storage.service';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { CookiesService } from './shared/services/cookies.service';
import { ProjectResolve } from './shared/resolve/projects/project.resolve';
import { AccountService } from './shared/services/account/account.service';
import { ProjectService } from './shared/services/projects/project.service';
import { TaskResolve } from './shared/resolve/tasks/task.resolve';


@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
        ToolbarComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MaterialModule,
        OzComponentsModule,
    ],
    providers: [
        CookiesService,
        LocalStorageService,
        EventsService,
        AuthService,
        AccountService,
        ProjectService,

        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
        ProjectResolve,
        TaskResolve,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
