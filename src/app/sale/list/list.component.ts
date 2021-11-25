import { Sale } from './../../core/models/sale.model';
import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/core/resource/rest-api';
import { CoreService } from 'src/app/core/core.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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

  async toDelete(id: number = 0, index: number) {
    await this._api.delete(Number(id)).toPromise();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Venta Eliminada',
      showConfirmButton: false,
      timer: 1500
    });
    this.sales.splice(index, 1);

  }

  toGo() {
    this._router.navigate(['/sale/new'])
  }

}
