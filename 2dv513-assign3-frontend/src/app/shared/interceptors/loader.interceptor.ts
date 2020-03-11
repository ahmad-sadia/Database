import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventsService } from '../services/events.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private eventsService: EventsService) {

  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // disable for selected routes
    if (request.url.startsWith(environment.baseApi + 'resources')) {
      return next.handle(request);
    }


    this.eventsService.emit('LOADER-SHOW');

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {

      if (event instanceof HttpResponse) {

        this.eventsService.emit('LOADER-HIDE');
      }
    },
      () => {
        this.eventsService.emit('LOADER-HIDE');
      }));
  }

}
