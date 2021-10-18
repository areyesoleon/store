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

  ngOnInit(): void {

  }

  toSave() {
    console.log(this._form.value);
  }

  toClear() {
    this.toInitForm();
  }

}
