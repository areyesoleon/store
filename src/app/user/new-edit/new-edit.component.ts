import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import { User } from 'src/app/core/models/user.model';


@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _api: Api<any>;


  constructor(protected builder: FormBuilder, private _core: CoreService) {
    super();
    this._api = this._core.newResource('empleados');
    this.toInitForm();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      fecha_ingreso: new Date(),
      flg_activo: true,
      entidad: this.builder.group({
        id: null,
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

  async toSave() {
    const form: User = this._form.value;
    // form.fecha_ingreso = new Date();
    console.log(this._form.value);
    const resp = await this._api.insert(this._form.value).toPromise();
    console.log(resp);

  }

  toClear() {
    this.toInitForm();
  }

}

// secretaria de inteligencia del estado 
// fie 
