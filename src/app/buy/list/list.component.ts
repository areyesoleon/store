import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';
import Swal from 'sweetalert2';


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

  async toDelete(id: number = 0, index: number) {
    await this._api.delete(Number(id)).toPromise();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra eliminada',
      showConfirmButton: false,
      timer: 1500
    });
    this.buys.splice(index, 1);

  }

}
