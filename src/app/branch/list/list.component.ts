import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Branch } from 'src/app/core/models/branch.model';
import { Api } from 'src/app/core/resource/rest-api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  private _api: Api<any>;

  branches: Branch[] = [];

  constructor(private _core: CoreService, private _router: Router) { 
    this._api = this._core.newResource('sucursales');
    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.branches = await this._api.find().toPromise(); 
  }

  toEdit(id: number = 0) {
    this._router.navigate([`/branch/${id}`]);

  }

  toGo() {
    this._router.navigate(['/branch/new'])
  }

}
