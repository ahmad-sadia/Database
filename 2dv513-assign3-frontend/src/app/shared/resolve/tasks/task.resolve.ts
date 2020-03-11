import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable()
export class TaskResolve implements Resolve<any> {
  constructor(private http: HttpClient) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.http.get(environment.baseApi + 'tasks/' + route.params.id, {})
      ;
  }
}
