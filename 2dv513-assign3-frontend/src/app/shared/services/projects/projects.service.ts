import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models/projects/project';
import { ItemsService } from '../items-service';
import { environment } from '../../../../environments/environment';


@Injectable()
export class ProjectsService extends ItemsService<Project> {
  constructor(http: HttpClient) {
    super(http, environment.baseApi + 'projects')
  }

  getTotal() {
    return this.http.get<any>(this.path + '/total', {})
  }
}
