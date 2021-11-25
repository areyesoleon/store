import { User } from './../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';
import { Entity } from 'src/app/core/models/entity.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private _api: Api<any>;
  private _apiEntity: Api<Entity>;

  users: User[] = [];

  constructor(private _core: CoreService, private _router: Router) { 
    this._api = this._core.newResource('empleados');
    this._apiEntity = this._core.newResource('entidades');
    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.users = await this._api.find().toPromise(); 
    this.users.forEach(async (user: User) => {
      const entidad = await this._apiEntity.findById(user.entidad_id!).toPromise();
      user.nombre = entidad.nombre;
      user.apellido = entidad.apellido;
    });
    console.log(this.users);
  }

  toEdit(id: number = 0) {
    this._router.navigate([`/user/${id}`]);

  }

  toGo() {
    this._router.navigate(['/user/new'])
  }

  async toDelete(id: number = 0, index: number) {
    await this._api.delete(Number(id)).toPromise();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Empleado eliminado',
      showConfirmButton: false,
      timer: 1500
    });
    this.users.splice(index, 1);

  }

}
