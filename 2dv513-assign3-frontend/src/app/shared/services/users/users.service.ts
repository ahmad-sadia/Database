import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ItemsService } from '../items-service';
import { User } from '../../models/users/user';


@Injectable()
export class UsersService extends ItemsService<User> {
  constructor(http: HttpClient) {
    super(http, environment.baseApi + 'users')
  }

  online() {
    return this.http.get<any>(this.path + '/online', {})
  }
}
