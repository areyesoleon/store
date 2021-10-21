import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNil } from 'lodash';
import { Observable } from 'rxjs';
export class Api<T> {
  private _url: string;
  private headers: HttpHeaders;
  constructor(
    public _http: HttpClient,
    public _area: string,
  ) {
    this._url = 'http://138.197.214.214:8010';
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD',
      'Access-Control-Allow-Headers':
        `Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control`,
      'Content-Type': 'Application/json'
    });
  }

  find(where?: any, subR?: any): Observable<T[]> {
    return this._http.get<T[]>(`${this._url}/${this._area}${isNil(subR) ? '' :
      `/${subR}`}${isNil(where) ? '' : `?${where}`}`,
      { headers: this.headers });
  }

  findById(_id: number): Observable<T> {
    return this._http.get<T>(`${this._url}/${this._area}/${_id}`,
      { headers: this.headers });
  }

  insert(obj: T, subR?: any): Observable<T> {
    return this._http.post<T>(`${this._url}/${this._area}${!isNil(subR) ? `/${subR}` : ''}`,
      obj, { headers: this.headers });
  }

  update(obj: T, where?: any, subR?: any, id?: number): Observable<T> {
    return this._http.put<T>(`${this._url}/${this._area}/${id}${isNil(subR) ? '' :
      `/${subR}`}${isNil(where) ? '' : `?${where}`}`, obj, { headers: this.headers });
  }

  put(obj?: T, where?: any, subR?: any, id = 'id'): Observable<T> {
    return this._http.put<T>(`${this._url}/${this._area}${isNil(subR) ? '' :
      `/${subR}`}${isNil(where) ? '' : `?${where}`}`, obj, { headers: this.headers });
  }

  delete(id?: number): Observable<T> {
    return this._http.delete<T>(`${this._url}/${this._area}/${id}}`, { headers: this.headers });
  }
}
