import { Customer } from './../../core/models/customer.model';
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
  private _apiEntity: Api<Customer>;

  customers: Customer[] = [];

  constructor(private _core: CoreService, private _router: Router) {
    this._api = this._core.newResource('clientes');
    this._apiEntity = this._core.newResource('entidades');
    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.customers = await this._api.find().toPromise();
    this.customers.forEach(async (customer: Customer) => {
      const entidad = await this._apiEntity.findById(customer.entidad_id!).toPromise();
      customer.nombre = entidad.nombre;
      customer.apellido = entidad.apellido;
    });
  }

  toEdit(id: number = 0) {
    this._router.navigate([`/customer/${id}`]);

  }

  toGo() {
    this._router.navigate(['/customer/new'])
  }

  async toDelete(id: number = 0, index: number) {
    await this._api.delete(Number(id)).toPromise();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Turno guardado',
      showConfirmButton: false,
      timer: 1500
    });
    this.customers.splice(index, 1);

  }
}
