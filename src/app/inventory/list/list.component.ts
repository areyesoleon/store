import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends FormComponent implements OnInit {

  private _api: Api<any>;
  private _apiProd: Api<any>;
  private _apiSuc: Api<any>;

  lista: any;

  constructor(protected builder: FormBuilder,
    private _core: CoreService) { 
    super();
    this.toInitForm();
    this._api = this._core.newResource('inventarios');
    this._apiProd = this._core.newResource('productos');
    this._apiSuc = this._core.newResource('sucursales');
    }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      sucursal_id: null,
      producto_id: null,
      cantidad: null,
      producto: null,
      sucursal: null
    });
  }

  async ngOnInit() {
    this.lista = await this._api.find().toPromise();

    this.lista.forEach(async (inv: any) => {
      inv.producto = (await this._apiProd.findById(inv.producto_id).toPromise()).nombre;
      inv.sucursal = (await this._apiSuc.findById(inv.sucursal_id).toPromise()).direccion;
    });
    
  }

}
