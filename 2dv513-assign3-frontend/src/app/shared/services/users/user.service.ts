import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../item-service';
import { environment } from '../../../../environments/environment';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Injectable()
export class UserService extends ItemService<Token> {
  constructor(http: HttpClient) {
    super(http, environment.baseApi + 'users/', '')
  }
}
