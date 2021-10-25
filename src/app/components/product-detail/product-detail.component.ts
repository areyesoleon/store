import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { find } from 'lodash';
import { CoreService } from 'src/app/core/core.service';
import { Product } from 'src/app/core/models/inventory.model';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent extends FormComponent implements OnInit {

  private _apiProduct: Api<Product>;
  products: Product[] = [];
  formDetalle: any;


  constructor(protected builder: FormBuilder, private _core: CoreService) {
    super();
    this._apiProduct = this._core.newResource('productos');
    this.toGetProducts();
    this.toInitForm();
  }

  ngOnInit(): void {

  }

  private toInitForm() {
    this.formDetalle = this.builder.group({
      producto_id: null,
      nombre: null,
      cantidad: 1,
      descuento: 0,
      precio: 0,
      total: 0
    });
  }

  async toGetProducts() {
    try {
      this.products = await this._apiProduct.find().toPromise();
      console.log(this.products);
    } catch (error) {

    }
  }

  setPrice() {
    const finded: Product = find(this.products, { id: Number(this.formDetalle.value.producto_id) })!;
    console.log(finded);
    this.formDetalle.patchValue({ precio: finded.precio });
    this.formDetalle.patchValue({ nombre: finded.nombre });

  }

  addRow() {
    const total = this.formDetalle.value.cantidad * this.formDetalle.value.precio;
    this.formDetalle.patchValue({ total });
    this._form.value.detalles.push(this.formDetalle.value);
    this.toClean();
  }

  toClean() {
    this.toInitForm();
  }

  toDeleteRow(index: number) {
    this._form.value.detalles.splice(index, 1);
  }

  get total(): number {
    if (this._form.value.id) {
      this._form.value.detalles.forEach((row: any) => {
        row.total = row.cantidad * Number(row.precio);
      });
    }
    let total = 0;
    let descuento = 0;
    this._form.value.detalles.forEach((row: any) => {
      total += Number(row.total);
      descuento += Number(row.descuento);
    });
    this._form.patchValue({ total, descuento });
    return total;
  }

}
