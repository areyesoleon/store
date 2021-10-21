import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Customer } from 'src/app/core/models/customer.model';
import { Entity } from 'src/app/core/models/entity.model';
import { Product } from 'src/app/core/models/inventory.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _apiCustomers: Api<Customer>;
  private _apiEntity: Api<Entity>;
  customers: Customer[] = [];

  constructor(protected builder: FormBuilder, private _core: CoreService) {
    super();
    this._apiCustomers = this._core.newResource('clientes');
    this._apiEntity = this._core.newResource('entidades');

    this.toGetCustomers();
    this.toInitForm();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      cliente_id: 0,
      emp_cajero_id: 1,
      sucursal_id: null,
      metodo_pago_id: 0,
      estado_venta_id: null,
      documento: null,
      fecha: new Date(),
      direccion_entrega: null,
      detalles: [[]]
    });
  }

  ngOnInit(): void {

  }

  toSave() {
    console.log(this._form.value);
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

}
