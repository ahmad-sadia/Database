import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../item-service';
import { environment } from '../../../../environments/environment';
import { Task } from '../../models/tasks/task';


@Injectable()
export class TaskService extends ItemService<Task> {
  constructor(http: HttpClient) {
    super(http, environment.baseApi + 'tasks/', '');
  }
}
