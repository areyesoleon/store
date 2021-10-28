import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { find } from 'lodash';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public options = [{
    id: 1,
    icon: 'fa-user',
    title: 'Empleados',
    click: '/user'
  }];

  public options_completo = [
    {
      id: 1,
      icon: 'fa-user',
      title: 'Empleados',
      click: '/user'
    },
    {
      id: 2,
      icon: 'fa-user',
      title: 'Cliente',
      click: '/customer'

    },
    {
      id: 3,
      icon: 'fa-user',
      title: 'Proveedor',
      click: '/provider'

    },
    {
      id: 4,
      icon: 'fa-clock',
      title: 'Turno',
      click: '/turn'

    },
    {
      id: 5,
      icon: 'fa-building',
      title: 'Sucursal',
      click: '/branch'

    },
    {
      id: 6,
      icon: 'fa-cash-register',
      title: 'Venta',
      click: '/sale'

    },
    {
      id: 7,
      icon: 'fa-box-open',
      title: 'Producto',
      click: '/product'

    },
    {
      id: 8,
      icon: 'fa-shopping-cart',
      title: 'Compra',
      click: '/buy'
    },
    {
      id: 9,
      icon: 'fa-file',
      title: 'Reporte 1',
      click: '/report/1'
    },
    {
      id: 10,
      icon: 'fa-file',
      title: 'Reporte 2',
      click: '/report/2'
    },
    {
      id: 11,
      icon: 'fa-file',
      title: 'Reporte 3',
      click: '/report/3'
    },
  ];

  // public options = []

  constructor(private _router: Router, private localStorage: LocalStorageService) {
  }

  async ngOnInit() {
    await this.asignarAccesos(this.localStorage.retrieve('user').accesos);
  }

  async asignarAccesos(accesos: any) {
    this.options = [];
    for (const op of this.options_completo) {
      if (find(accesos, { operacion_id: op.id })) {
        this.options.push(op);
      }
    }
  }

  toGo(path: string) {
    this._router.navigate([path]);
  }

}
