import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Product } from 'src/app/core/models/inventory.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent extends FormComponent implements OnInit {

  private _api: Api<Product>;
  private id: number;



  constructor(protected builder: FormBuilder, private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    super();
    this._api = this._core.newResource('productos');
    this.id = Number(this.route.snapshot.paramMap.get('id'));


    this.toInitForm();
  }

  private toInitForm() {
    this._form = this.builder.group({
      id: null,
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      costo: [null, [Validators.required]],
      precio: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log(this.id);
    if (this.id) {
      this.toGetById();
    }
  }

  async toSave() {
    try {
      if (this.id) {
        await this._api.update(this._form.value, null, null, this._form.value.id).toPromise();
      } else {
        await this._api.insert(this._form.value).toPromise()
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto guardado',
        showConfirmButton: false,
        timer: 1500
      });
      this.toInitForm();
      this._router.navigate(['/product']);

    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al guardar el producto',
        showConfirmButton: false,
        timer: 1500
      })
    } finally {

    }
  }

  toClear() {
    this.toInitForm();
  }

  async toGetById() {
    const resp = await this._api.findById(this.id).toPromise();
    console.log(resp);
    this._form.patchValue(resp);
  }


}
