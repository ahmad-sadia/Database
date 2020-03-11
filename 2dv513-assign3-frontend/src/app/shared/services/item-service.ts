import { Service } from './service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class ItemService<T> extends Service {
    constructor(
        protected http: HttpClient,
        protected path: string,
        protected subPath: string
    ) {
        super()
    }

    get(id): Observable<T> {
        return this.http.get<T[]>(this.path + id, {})
            .pipe(map(res => res['item']))
    }

    update(id, data): any {
        return this.http.put(this.path + id, data, {})
    }

    delete(id): any {
        return this.http.delete(this.path + id)
    }
}
