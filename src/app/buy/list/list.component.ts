import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private _api: Api<any>;

  buys: any[] = [];

  constructor(private _core: CoreService, private _router: Router) { 
    this._api = this._core.newResource('compras');
    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.buys = await this._api.find().toPromise(); 
    console.log(this.buys);
  }

  toEdit(id: number = 0) {
    this._router.navigate([`/buy/${id}`]);

  }

  toGo() {
    this._router.navigate(['/buy/new'])
  }

}
