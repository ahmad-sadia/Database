import { Service } from './service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ItemsService<T> extends Service {
    constructor(
        protected http: HttpClient,
        protected path: string
    ) {
        super()
    }

    get(args = null): Observable<any> {
        return this.http.get<any>(this.path, {
            params: this.createParameters(args)
        }).pipe()
    }

    add(data: any): any {
        return this.http.post(this.path, data, {})
    }

    delete(body: any): any {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
            body: body
        };
        return this.http.delete(this.path, httpOptions)
    }
}
