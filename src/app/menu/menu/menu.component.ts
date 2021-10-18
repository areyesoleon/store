import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public options = [
    {
      icon: 'fa-user',
      title: 'Empleados'
    },
    {
      icon: 'fa-user',
      title: 'Cliente'
    },
    {
      icon: 'fa-user',
      title: 'Proveedor'
    },
    {
      icon: 'fa-clock',
      title: 'Turno'
    },
    {
      icon: 'fa-building',
      title: 'Sucursal'
    },
    {
      icon: 'fa-cash-register',
      title: 'Venta'
    },
    {
      icon: 'fa-box',
      title: 'Inventario'
    },
    {
      icon: 'fa-box-open',
      title: 'Producto'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
