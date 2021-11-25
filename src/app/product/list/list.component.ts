import { Product } from './../../core/models/inventory.model';
import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import { Router } from '@angular/router';
import { Api } from 'src/app/core/resource/rest-api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private _api: Api<any>;

  products: Product[] = [];

  constructor(private _core: CoreService, private _router: Router) { 
    this._api = this._core.newResource('productos');
    this.toGetInfo();
  }

  ngOnInit(): void {

  }

  async toGetInfo() {
    this.products = await this._api.find().toPromise(); 
    console.log(this.products);
  }

  toEdit(id: number = 0) {
    this._router.navigate([`/product/${id}`]);

  }

  toGo() {
    this._router.navigate(['/product/new'])
  }

  async toDelete(id: number = 0, index: number) {
    await this._api.delete(Number(id)).toPromise();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto eliminado',
      showConfirmButton: false,
      timer: 1500
    });
    this.products.splice(index, 1);

  }

}
