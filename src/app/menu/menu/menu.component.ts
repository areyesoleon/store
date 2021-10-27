import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public options = [
    {
      icon: 'fa-user',
      title: 'Empleados',
      click: '/user'
    },
    {
      icon: 'fa-user',
      title: 'Cliente',
      click: '/customer'

    },
    {
      icon: 'fa-user',
      title: 'Proveedor',
      click: '/provider'

    },
    {
      icon: 'fa-clock',
      title: 'Turno',
      click: '/turn'

    },
    {
      icon: 'fa-building',
      title: 'Sucursal',
      click: '/branch'

    },
    {
      icon: 'fa-cash-register',
      title: 'Venta',
      click: '/sale'

    },
    {
      icon: 'fa-box-open',
      title: 'Producto',
      click: '/product'

    },
    {
      icon: 'fa-shopping-cart',
      title: 'Compra',
      click: '/buy'
    },
    {
      icon: 'fa-file',
      title: 'Reporte 1',
      click: '/report/1'
    },
    {
      icon: 'fa-file',
      title: 'Reporte 2',
      click: '/report/2'
    },
    {
      icon: 'fa-file',
      title: 'Reporte 3',
      click: '/report/3'
    },
  ];
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  toGo(path: string) {
    this._router.navigate([path]);
  }

}
