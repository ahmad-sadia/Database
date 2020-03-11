import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable()
export class AccountService {
  path = environment.baseApi + 'account/';

  constructor(private http: HttpClient) {

  }

  statsDays() {
    return this.http.get(this.path + 'stats/days', {})
  }

  statsMonths() {
    return this.http.get(this.path + 'stats/months', {})
  }

  getCurrentHours() {
    return this.http.get(this.path + 'current_hours', {})
  }

  getTasksToday() {
    return this.http.get(this.path + 'tasks_today', {})
  }

  config(): any {
    return this.http.get(this.path + '/config', {})
  }
}
