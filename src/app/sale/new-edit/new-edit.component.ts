import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormComponent } from 'src/app/core/tools/form.component';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {
  constructor(protected builder: FormBuilder) {
    super();
    this.toInitForm();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      cliente_id: null,
      emp_cajero_id: null,
      sucursal_id: null,
      metodo_pago_id: null,
      estado_venta_id: null,
      documento: null,
      fecha: new Date(),
      direccion_entrega: null,
      detalles: []
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


}
