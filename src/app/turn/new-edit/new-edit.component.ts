import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Turn } from 'src/app/core/models/turn.models';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _api: Api<Turn>;

  constructor(protected builder: FormBuilder, private _core: CoreService) {
    super();
    this._api = this._core.newResource('turnos');
    this.toInitForm();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      sucursal_id: 1,
      empleado_id: 1,
      fecha_inicio:[null, [Validators.required]],
      fecha_fin: [null, [Validators.required]]
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
        title: 'Turno guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al guardar el turno',
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
