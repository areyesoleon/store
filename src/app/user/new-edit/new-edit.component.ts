import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import { User } from 'src/app/core/models/user.model';
import Swal from 'sweetalert2'


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
      fecha_ingreso: [null, [Validators.required]],
      flg_activo: true,
      entidad: this.builder.group({
        id: null,
        nombre: [null, [Validators.required]],
        apellido: [null, [Validators.required]],
        dpi: [null, [Validators.required]],
        nit: [null, [Validators.required]],
        telefono: [null, [Validators.required]],
        direccion: [null, [Validators.required]],
        fecha_nacimiento: [null, [Validators.required]],
        correo: [null, [Validators.required]]
      })
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
        title: 'Empleado guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al guardar el usuario',
        showConfirmButton: false,
        timer: 1500
      })
    } finally {

    }
  }

  toClear() {
    this.toInitForm();
  }

}