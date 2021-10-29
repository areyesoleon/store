import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Entity } from 'src/app/core/models/entity.model';
import { Turn } from 'src/app/core/models/turn.models';
import { Api } from 'src/app/core/resource/rest-api';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private _api: Api<any>;
  private _apiEntity: Api<Entity>;


  turns: Turn[] = [];

  constructor(private _core: CoreService, private _router: Router) {
    this._api = this._core.newResource('turnos');
    this._apiEntity = this._core.newResource('entidades');

    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.turns = await this._api.find().toPromise();
    this.turns.forEach(async (turno: any) => {
      const entidad = await this._apiEntity.findById(turno.empleado_id!).toPromise();

      turno.nombre = `${entidad.nombre} ${entidad.apellido}`;
    });
  }

  async toDelete(id: number = 0, index: number) {
    await this._api.delete(Number(id)).toPromise();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Turno guardado',
      showConfirmButton: false,
      timer: 1500
    });
    this.turns.splice(index, 1);

  }

  toGo() {
    this._router.navigate(['/turn/new'])
  }
}
