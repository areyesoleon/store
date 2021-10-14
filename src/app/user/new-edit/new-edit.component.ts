import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormComponent } from 'src/app/core/tools/form.component';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  constructor(protected builder: FormBuilder) {
    super();
    this.initForm();
  }

  ngOnInit(): void {

  }

  private initForm() {
    this._form = this.builder.group({
      empleado_id: null,
      fecha_ingreso: new Date(),
      flg_activo: false,
      entidad: this.builder.group({
        entidad_id: null,
        nombre: null,
        apellido: null,
        dpi: null,
        nit: null,
        telefono: null,
        direccion: null,
        fecha_nacimiento: new Date(),
        correo: null
      })
    });
  }

}
