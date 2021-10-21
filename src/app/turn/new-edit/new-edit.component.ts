import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Branch } from 'src/app/core/models/branch.model';
import { Entity } from 'src/app/core/models/entity.model';
import { Turn } from 'src/app/core/models/turn.models';
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

  private _api: Api<Turn>;
  private _apiUser: Api<User>;
  private _apiBranch: Api<Branch>;
  private _apiEntity: Api<Entity>;


  branches: Branch[] = [];
  users: User[] = [];



  constructor(protected builder: FormBuilder, private _core: CoreService) {
    super();
    this._api = this._core.newResource('turnos');
    this._apiUser = this._core.newResource('empleados');
    this._apiBranch = this._core.newResource('sucursales');
    this._apiEntity = this._core.newResource('entidades');


    this.toInitForm();
    this.toGetEmploy();
    this.toGetBranch();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      sucursal_id: [0, [Validators.required]],
      empleado_id: [0, [Validators.required]],
      fecha_inicio: [null, [Validators.required]],
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


  async toGetBranch() {
    try {
      this.branches = await this._apiBranch.find().toPromise();
    } catch (error) {

    }
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

  toClear() {
    this.toInitForm();
  }


}
