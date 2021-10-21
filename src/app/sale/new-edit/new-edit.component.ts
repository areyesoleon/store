import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Branch } from 'src/app/core/models/branch.model';
import { Customer } from 'src/app/core/models/customer.model';
import { Entity } from 'src/app/core/models/entity.model';
import { Sale } from 'src/app/core/models/sale.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _apiCustomers: Api<Customer>;
  private _apiEntity: Api<Entity>;
  private _api: Api<Sale>;
  private _apiBranch: Api<Branch>;
  customers: Customer[] = [];
  branches: Branch[] = [];


  constructor(protected builder: FormBuilder, private _core: CoreService) {
    super();
    this._apiCustomers = this._core.newResource('clientes');
    this._apiEntity = this._core.newResource('entidades');
    this._api = this._core.newResource('ventas');
    this._apiBranch = this._core.newResource('sucursales');



    this.toGetCustomers();
    this.toInitForm();
    this.toGetBranch();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      cliente_id: [0, [Validators.required]],
      emp_cajero_id: 1,
      sucursal_id: [0, [Validators.required]],
      metodo_pago_id: [0, [Validators.required]],
      estado_venta_id: 1,
      documento: [null, [Validators.required]],
      fecha: [null, [Validators.required]],
      direccion_entrega: [null, [Validators.required]],
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
        title: 'Venta guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al guardar el venta',
        showConfirmButton: false,
        timer: 1500
      })
    } finally {

    }
  }

  toClear() {
    this.toInitForm();
  }

  async toGetCustomers() {
    try {
      this.customers = await this._apiCustomers.find().toPromise();
      this.customers.forEach(async (customer: Customer) => {
        const entidad = await this._apiEntity.findById(customer.entidad_id!).toPromise();
        customer.nombre = entidad.nombre;
        customer.apellido = entidad.apellido;
      });
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
