import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoreService } from 'src/app/core/core.service';
import { Provider } from 'src/app/core/models/provider.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _apiProvider: Api<Provider>;
  providers: Provider[] = [];

  constructor(protected builder: FormBuilder, private _core: CoreService) {
    super();
    this._apiProvider = this._core.newResource('proveedores');
    this.toGetProviders();
    this.toInitForm();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      proveedor_id: null,
      sucursal_id: null,
      estado_compra_id: null,
      documento: null,
      fecha: new Date(),
      detalles: [[]]
    });
  }

  ngOnInit(): void {

  }

  toSave() {
    console.log(this._form.value);
  }

  toClear() {
    this.toInitForm();
  }

  async toGetProviders() {
    try {
      this.providers = await this._apiProvider.find().toPromise();
      this.providers.forEach(async (provider: Provider) => {
        const entidad = await this._apiProvider.findById(provider.entidad_id!).toPromise();
        provider.nombre = entidad.nombre;
        provider.apellido = entidad.apellido;
      });
    } catch (error) {

    }
  }

}
