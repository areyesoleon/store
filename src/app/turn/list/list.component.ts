import { Turn } from './../../core/models/turn.models';
import { Branch } from './../../core/models/branch.model';
import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/core/resource/rest-api';
import { CoreService } from 'src/app/core/core.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private _api: Api<any>;

  turns: Turn[] = [];

  constructor(private _core: CoreService, private _router: Router) { 
    this._api = this._core.newResource('turnos');
    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.turns = await this._api.find().toPromise(); 
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
