import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from './resource/rest-api';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient,) { }


  newResource<T>(area: string) {
    return new Api<T>(this.http, area,);
  }

  fechaEstandar(date: Date, separator: string = '/'): string {
    console.log(date);
    return (((date.getDate() < 10 ? '0' : '') + date.getDate()) +
      separator + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)
      + separator + (date.getFullYear())).replace(/ /g, '');
  }
}


