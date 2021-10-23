import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Customer } from 'src/app/core/models/customer.model';
import { Entity } from 'src/app/core/models/entity.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _api: Api<Customer>;
  private _apiEntity: Api<Entity>;
  private id: number;


  constructor(protected builder: FormBuilder, private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    super();
    this._api = this._core.newResource('clientes');
    this.toInitForm();
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this._apiEntity = this._core.newResource('entidades');
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      puntos: 0,
      entidad: this.builder.group({
        entidad_id: null,
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
        title: 'Cliente guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
      this._router.navigate(['/customer']);

    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al guardar el cliente',
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
