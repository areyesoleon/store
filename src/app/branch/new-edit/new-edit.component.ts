import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Branch } from 'src/app/core/models/branch.model';
import { Entity } from 'src/app/core/models/entity.model';
import { User } from 'src/app/core/models/user.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _api: Api<Branch>;
  private _apiUser: Api<User>;
  private _apiEntity: Api<Entity>;
  private id: number;


  users: User[] = [];



  constructor(protected builder: FormBuilder, private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    super();
    this._api = this._core.newResource('sucursales');
    this._apiUser = this._core.newResource('empleados');
    this._apiEntity = this._core.newResource('entidades');
    this.id = Number(this.route.snapshot.paramMap.get('id'));


    this.toInitForm();
    this.toGetEmploy();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      emp_encargado_id: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.toGetById();
    }
  }

  async toSave() {
    try {
      await this._api.insert(this._form.value).toPromise();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Proveedor guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
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

  async toGetEmploy() {
    try {
      this.users = await this._apiUser.find().toPromise();
      console.log(this.users);
      this.users.forEach(async (user: User) => {
        const entidad = await this._apiEntity.findById(user.entidad_id!).toPromise();
        user.nombre = entidad.nombre;
        user.apellido = entidad.apellido;
      });
    } catch (error) {

    }
  }

  async toGetById() {
    const resp = await this._api.findById(this.id).toPromise();
    this._form.patchValue(resp);
  }


}
