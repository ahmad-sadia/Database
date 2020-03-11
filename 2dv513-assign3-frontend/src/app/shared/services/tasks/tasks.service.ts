import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ItemsService } from '../items-service';
import { Task } from '../../models/tasks/task';


@Injectable()
export class TasksService extends ItemsService<Task> {
  constructor(http: HttpClient) {
    super(http, environment.baseApi + 'tasks');
  }

}
