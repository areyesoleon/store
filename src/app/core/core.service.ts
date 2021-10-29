import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from './resource/rest-api';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }


  newResource<T>(area: string) {
    return new Api<T>(this.http, area, this.localStorage);
  }

  fechaEstandar(date: Date, separator: string = '/'): string {
    console.log(date);
    return (((date.getDate() < 10 ? '0' : '') + date.getDate()) +
      separator + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)
      + separator + (date.getFullYear())).replace(/ /g, '');
  }
}


