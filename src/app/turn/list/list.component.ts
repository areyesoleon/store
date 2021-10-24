import { Turn } from './../../core/models/turn.models';
import { Branch } from './../../core/models/branch.model';
import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/core/resource/rest-api';
import { CoreService } from 'src/app/core/core.service';
import { Router } from '@angular/router';

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

  toEdit(id: number = 0) {
    this._router.navigate([`/turn/${id}`]);

  }

  toGo() {
    this._router.navigate(['/turn/new'])
  }
}
