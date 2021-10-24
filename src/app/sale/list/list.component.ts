import { Sale } from './../../core/models/sale.model';
import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/core/resource/rest-api';
import { CoreService } from 'src/app/core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private _api: Api<any>;

  sales: Sale[] = [];

  constructor(private _core: CoreService, private _router: Router) { 
    this._api = this._core.newResource('ventas');
    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.sales = await this._api.find().toPromise(); 
    console.log(this.sales);
  }

  toEdit(id: number = 0) {
    this._router.navigate([`/sale/${id}`]);

  }

  toGo() {
    this._router.navigate(['/sale/new'])
  }

}
