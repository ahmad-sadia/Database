import { HttpParams } from '@angular/common/http'

export class Service {
  constructor () {

  }

  createParameters (args = null) {
    let httpParams = new HttpParams()
    if ((args !== undefined) && (args !== null)) {
      Object.keys(args).forEach(k => {
        httpParams = httpParams.set(k, args[k].toString())
      })
    }
    return httpParams
  }
}
