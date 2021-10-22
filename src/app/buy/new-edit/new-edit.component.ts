import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Branch } from 'src/app/core/models/branch.model';
import { Entity } from 'src/app/core/models/entity.model';
import { Provider } from 'src/app/core/models/provider.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import Swal from 'sweetalert2';
import { BuyModule } from '../buy.module';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _apiProvider: Api<Provider>;
  private _apiEntity: Api<Entity>;
  private _api: Api<any>;
  private _apiBranch: Api<Branch>;



  providers: Provider[] = [];
  branches: Branch[] = [];


  constructor(protected builder: FormBuilder, private _core: CoreService) {
    super();
    this._apiBranch = this._core.newResource('sucursales');
    this._apiProvider = this._core.newResource('proveedores');
    this._apiEntity = this._core.newResource('entidades');
    this._api = this._core.newResource('compras');

    this.toGetProviders();
    this.toInitForm();
    this.toGetBranch();

  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      proveedor_id: null,
      sucursal_id: null,
      estado_compra_id: 1,
      documento: null,
      fecha: new Date(),
      detalles: [[]],
      total: 0,
      descuento: 0
    });
  }

  ngOnInit(): void {

  }


  async toSave() {
    try {
      await this._api.insert(this._form.value).toPromise();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compra guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al guardar el compra',
        showConfirmButton: false,
        timer: 1500
      })
    } finally {

    }
  }

  toClear() {
    this.toInitForm();
  }

  async toGetProviders() {
    try {
      this.providers = await this._apiProvider.find().toPromise();
      this.providers.forEach(async (provider: Provider) => {
        const entidad = await this._apiEntity.findById(provider.entidad_id!).toPromise();
        provider.nombre = entidad.nombre;
        provider.apellido = entidad.apellido;
      });
      console.log(this.providers);
    } catch (error) {

    }
  }

  async toGetBranch() {
    try {
      this.branches = await this._apiBranch.find().toPromise();
    } catch (error) {

    }
  }

}
