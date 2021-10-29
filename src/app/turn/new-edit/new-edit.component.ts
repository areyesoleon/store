import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Branch } from 'src/app/core/models/branch.model';
import { Entity } from 'src/app/core/models/entity.model';
import { Turn } from 'src/app/core/models/turn.models';
import { User } from 'src/app/core/models/user.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import * as moment from 'moment';
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
  private id: number;


  branches: Branch[] = [];
  users: User[] = [];



  constructor(protected builder: FormBuilder, private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    super();
    this._api = this._core.newResource('turnos');
    this._apiUser = this._core.newResource('empleados');
    this._apiBranch = this._core.newResource('sucursales');
    this._apiEntity = this._core.newResource('entidades');
    this.id = Number(this.route.snapshot.paramMap.get('id'));



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
    if (this.id) {
      this.toGetById();
    }
  }

  async toSave() {
    try {
      if (this.id) {
        console.log(this._form.value);
        this._form.value.fecha_fin = new Date(this._form.value.fecha_fin);
        this._form.value.fecha_inicio = new Date(this._form.value.fecha_inicio);

        await this._api.update(this._form.value, null, null, this._form.value.id).toPromise();
      } else {
        console.log(this._form.value);
        await this._api.insert(this._form.value).toPromise()
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Turno guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
      this._router.navigate(['/turn']);
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

  async toGetById() {
    const resp = await this._api.findById(this.id).toPromise();
    const initDate = new Date(resp.fecha_inicio);
    const finishDate = new Date(resp.fecha_fin);
    resp.fecha_inicio = moment(`${initDate.getFullYear()}-${initDate.getMonth()}-${initDate.getDay()}`).calendar();
    resp.fecha_fin = moment(`${finishDate.getFullYear()}-${finishDate.getMonth()}-${finishDate.getDay()}`).calendar();

    console.log(resp);
    this._form.patchValue(resp);
  }


}
