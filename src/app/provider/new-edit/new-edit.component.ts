import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import Swal from 'sweetalert2';
import { Provider } from './../../core/models/provider.model';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _api: Api<Provider>;
  private _apiEntity: Api<Provider>;
  private id: number;


  constructor(protected builder: FormBuilder, private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    super();
    this._api = this._core.newResource('proveedores');

    this.toInitForm();
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this._apiEntity = this._core.newResource('entidades');
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      entidad: this.builder.group({
        entidad_id: null,
        nombre: [null, [Validators.required]],
        apellido: [null, [Validators.required]],
        dpi: [null, [Validators.required]],
        nit: [null, [Validators.required]],
        telefono: [null, [Validators.required]],
        direccion: [null, [Validators.required]],
        fecha_nacimiento: [null, new Date()],
        correo: [null, [Validators.required]]
      })
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.toGetById();
    }
  }

  async toSave() {
    try {
      if (this.id) {
        await this._api.update(this._form.value, null, null, this._form.value.id).toPromise();
      } else {
        await this._api.insert(this._form.value).toPromise()
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Proveedor guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
      this._router.navigate(['/provider']);

    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al guardar el proveedor',
        showConfirmButton: false,
        timer: 1500
      })
    } finally {

    }
  }

  toClear() {
    this.toInitForm();
  }

  async toGetById() {
    const resp = await this._api.findById(this.id).toPromise();
    this._form.patchValue(resp);
    const entidad = await this._apiEntity.findById(resp.entidad_id!).toPromise();
    this._form.patchValue({ entidad });
  }

}
