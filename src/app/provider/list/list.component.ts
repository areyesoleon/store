import { Provider } from './../../core/models/provider.model';
import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/core/models/entity.model';
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
  private _apiEntity: Api<Entity>;

  providers: Provider[] = [];

  constructor(private _core: CoreService, private _router: Router) { 
    this._api = this._core.newResource('proveedores');
    this._apiEntity = this._core.newResource('entidades');
    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.providers = await this._api.find().toPromise(); 
    this.providers.forEach(async (provider: Provider) => {
      const entidad = await this._apiEntity.findById(provider.entidad_id!).toPromise();
      provider.nombre = entidad.nombre;
      provider.apellido = entidad.apellido;
    });
  }

  toEdit(id: number = 0) {
    this._router.navigate([`/provider/${id}`]);

  }

  toGo() {
    this._router.navigate(['/provider/new'])
  }

  async toDelete(id: number = 0, index: number) {
    await this._api.delete(Number(id)).toPromise();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Proveedor eliminado',
      showConfirmButton: false,
      timer: 1500
    });
    this.providers.splice(index, 1);

  }

}
