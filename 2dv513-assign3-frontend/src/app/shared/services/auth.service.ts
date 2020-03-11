import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  user = null;

  constructor(
    private http: HttpClient
  ) {
    this.fetchUser().subscribe(
      (next) => {
        this.user = next
      }
    )
  }

  fetchUser() {
    return this.http.get(environment.baseApi + 'account')
  }

  isAdmin() {
    return this.user && this.user.admin
  }
}
