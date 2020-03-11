import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models/projects/project';
import { ItemService } from '../item-service';
import { environment } from '../../../../environments/environment';


@Injectable()
export class ProjectService extends ItemService<Project> {
  constructor(http: HttpClient) {
    super(http, environment.baseApi + 'projects/', '');
  }

  stats (id) {
    return this.http.get(this.path + id + '/stats', {})
  }
}
